
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle, } from "react-icons/fc";
import { AuthContext } from "../../AuthPorvider/AuthProvider";




const Login = () => {
const [error , setError] = useState(null)
  const {login,  googleLogin} = useContext(AuthContext)
  const location = useLocation()

  const navigate = useNavigate()


  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    login(email, password)
    .then(() => {
     navigate(location?.state ? location?.state : '/')
    })
    .catch(error => {
    
      setError(error)
    })
  }

  const handleGoogleLogin = e => {
    e.preventDefault()
    googleLogin()
    .then(result => {
      console.log(result.user)
      navigate(location?.state ? location?.state : '/')
    })
    .catch(error => {
      console.log(error.message);
    })
    console.log('google login')
  }
    return (
        <div>
            <div className="hero  py-6">
              
    <div className="card  shadow-2xl w-5/6  lg:w-5/12 ">
    <h1 className="text-center text-3xl  md:text-5xl font-bold pt-5 text-red-500">Login Now</h1>
      <form onSubmit={handleLogin} className="card-body" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input type="submit" value="Login" className="btn  bg-red-600 hover:bg-red-800 text-white" />

        </div>
        <h4 className="text-center font-bold  my-3">OR</h4>
        <div  className="text-center border-2 border-red-400 py-2 cursor-pointer flex justify-center items-center gap-2">
         <FcGoogle className="text-xl"></FcGoogle>
          <button onClick={handleGoogleLogin} className="font-bold">Continue With GOOGLE</button>
        </div>
      </form>

    <p className="text-center md:text-xl pb-4 font-semibold">Do not have an account? <Link to = "/register" className="text-red-700 font-bold hover:underline">Register</Link> </p>

    <div className="pb-5">
      {
        error && <p className="text-center text-red-700">Wrong Email Or passWord</p>
      }
    </div>
    </div>

 
 
</div>
        </div>
    );
};

export default Login;