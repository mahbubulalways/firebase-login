import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signInUser,googleLogIn}=useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault()
        const form =event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
          console.log(result.user);
          form.reset()
        })
        .catch(error=>{
          console.log(error.message);
        })
    }

    const handleGoogle=()=>{
      googleLogIn()
      .then(result=>{
      console.log(result);
      })
      .catch(error=>{
        console.log(error);
      })
      
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-screen max-w-sm   shadow-2xl bg-base-100 mt-5">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
  </form>
<button onClick={handleGoogle} className='bg-gray-700 text-white rounded-md px-2 py-1'> Continue with google</button>

  <Link to='/register'>
      <button className="btn  btn-link">New to website</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;