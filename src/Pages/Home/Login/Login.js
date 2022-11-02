import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image  from  '../../../assets/images/login/login.svg'
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from 'react-hot-toast';

const Login = () => {
  const {loginUser} = useContext(AuthContext)
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    loginUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      form.reset()
      toast.success('Log in SuccessFully')
      
    })
    .catch(err=>{
      console.log('error', err)
      toast.error(err.message)
    })

  };
  return (
    <div className="hero my-20">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center my-2">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#"  className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className=" text-center">
            New To  Car Doctor Please{" "}
            <Link to="/signup" className="text-orange-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
