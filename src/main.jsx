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
        element: <AllAssignment></AllAssignment>
      },
      {
        path: '/createassignment',
        element: <PrivateRout><CreateAssignment></CreateAssignment></PrivateRout>
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
