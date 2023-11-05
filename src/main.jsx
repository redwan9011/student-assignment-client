import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOuts from './LayOuts/LayOuts.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './AuthPorvider/AuthProvider.jsx';
import AllAssignment from './Assignment-pages/AllAssignments/AllAssignment.jsx';
import CreateAssignment from './Assignment-pages/CreateAssignment/CreateAssignment.jsx';
import PrivateRout from './PrivateRout/PrivateRout.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Update from './Home-Components/UpdateAssignment/Update.jsx';
import ViewDetails from './Home-Components/ViewDetails/ViewDetails.jsx';
import MyAssignment from './Assignment-pages/MyAssignment/MyAssignment.jsx';
import AssignmentSubmit from './Assignment-pages/AssignmentSubmit/AssignmentSubmit.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allassignment',
        element: <AllAssignment></AllAssignment>,
        loader: ()=> fetch('http://localhost:3000/assignments')
      },
      {
        path: '/createassignment',
        element: <PrivateRout><CreateAssignment></CreateAssignment></PrivateRout>
      },
      {
        path: '/updateassignment/:id',
        element: <PrivateRout><Update></Update></PrivateRout>,
        loader: ({params})=> fetch(`http://localhost:3000/assignments/${params.id}`)
      },
      {
        path: '/viewdetails/:id',
        element: <PrivateRout> <ViewDetails></ViewDetails></PrivateRout>,
        loader: ({params})=> fetch(`http://localhost:3000/assignments/${params.id}`)
      },

      {
        path: '/myassignment',
        element: <PrivateRout> <MyAssignment></MyAssignment> </PrivateRout>,
        loader: () => fetch('http://localhost:3000/assignments')
      },

      {
        path: '/assignmentsubmit',
        element: <PrivateRout> <AssignmentSubmit></AssignmentSubmit> </PrivateRout>,
        
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
