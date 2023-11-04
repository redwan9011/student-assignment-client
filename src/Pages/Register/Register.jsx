
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { updateProfile, } from "firebase/auth";
import { AuthContext } from "../../AuthPorvider/AuthProvider";



const Register = () => {

  const {register} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
const [ success, setSuccess ] = useState(null);
const [ error, setError ] = useState(null);


  const handleRegister = (e) => {

    setError('')
    setSuccess('')

    e.preventDefault();
  

    const name = e.target.name.value;
    const image = e.target.image.value;

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if(password.length < 6) {
      setError('password should have atleast 6 characters')
      return
    }
    if( (!/[A-Z]/.test(password))) {
      setError('password should have atleast One Capital characters');
      return
    }
    if( (!/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}/.test(password))) {
      setError('password should have atleast One special characters');
      return
    }


    register(email, password)
    .then(result => {
      console.log(result.user)
      setSuccess('User Created successfull')

// set profile
      updateProfile( result.user , {
        displayName:name,
         photoURL:image,
      }) 
      .then(() =>{
        
      })
      .catch (error => {
        console.log(error.message)
      })

      navigate(location?.state ? location?.state : '/')
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
  } 


    return (
        <div>
        <div className="hero  py-6">
          
<div className="card  shadow-2xl  w-5/6  lg:w-5/12 ">
<h1 className="text-center text-3xl md:text-5xl font-bold pt-5 text-red-500">Register Now</h1>
  <form onSubmit={handleRegister} className="card-body">


  <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
    </div>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Photo URL</span>
      </label>
      <input type="text" name="image" placeholder="phot URL" className="input input-bordered"  />
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered"  />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
    
    </div>
    <div className="form-control mt-6">
    <input type="submit" value="Register" className="btn bg-red-600 hover:bg-red-800 text-white" />
  
    </div>
  </form>

<p className="text-center md:text-xl pb-4 font-semibold">Already have an account? <Link className="text-red-700 font-bold hover:underline" to = "/login">Login</Link> </p>

<div className="pb-6">
  
{
        success && <p className="text-center text-green-700 "> {success}</p>
      }

      {
        error &&  <p className="text-center text-red-700"> {error}</p>
      }
</div>
 
</div>


</div>


    </div>
    );
};

export default Register;