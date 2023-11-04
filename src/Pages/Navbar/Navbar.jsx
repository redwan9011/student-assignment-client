import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthPorvider/AuthProvider";



const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
    const links = <>
  

    <li> <NavLink 
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    to = "/addproduct">Create Assignment</NavLink></li>

    

    <li> <NavLink
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    to = "/mycart">My Assignment</NavLink></li>

    <li> <NavLink
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    to = "/mycart">Submitted Assignment</NavLink></li>

  
       
       
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48  ">
        <div className="flex flex-col  gap-1 ">
        <ul tabIndex={0} className="menu menu-sm gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        <li> <NavLink
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    
    to = "/">Home</NavLink></li>

        <li>
          <a className="bg-black text-white hover:bg-black hover:text-white w-full">Assignments</a>
          <ul className="w-full">
           <div className=" w-44 flex flex-col gap-2 mt-2">
           {links}
           </div>
          </ul>
        </li>
        <li> <NavLink 
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    to = "/addproduct"> All Assignments</NavLink></li>
      </ul>
        </div>
      </ul>
    </div>
   <div>
   logo  
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
   <div className="flex gap-5">
   <ul className="menu menu-horizontal px-1 gap-3">
       <li> <NavLink
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    
    to = "/">Home</NavLink></li>
      <li tabIndex={0}>
        <details>
          <summary className="bg-black text-white hover:bg-black hover:text-white"> Assignments</summary>
          <ul className="z-30">
          <div className="w-44 flex flex-col gap-2 mt-2">
          {links}
          </div>
          </ul>
        </details>
      </li>
      <li> <NavLink 
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "red" : "black",
          color: isActive ? "white" : "white",
        };
      }}
    to = "/addproduct">ALL Assignments</NavLink></li>
    </ul>
   </div>
    </ul>
  </div>
  <div className="navbar-end w-full md:w-8/12">
  {
      user ? <div className="flex items-center gap-2">
        <img className="w-10 h-10 md:w-11 md:h-11 rounded-full" src={user?.photoURL} alt="" />
        <p className="text-sm md:text-xl font-bold ">{user?.displayName}</p>
        <Link onClick={logOut} className="btn text-[10px] md:text-base bg-red-600 hover:bg-red-800 text-white md:px-6" to="/">LogOut</Link> 
      </div>: 
      <Link className=" bg-red-600 hover:bg-red-800 text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-md text-white" to = "/login">Login / Register </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;