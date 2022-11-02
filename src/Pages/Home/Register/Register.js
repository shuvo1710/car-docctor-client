import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image  from  '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            toast.success('Sign Up SuccessFully')
        })
        .catch(err=>{
            console.error('error',err)
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
          <h1 className="text-5xl font-bold text-center my-2">Sign up</h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className=" text-center">
            Already have an Account?{" "}
            <Link to="/login" className="text-orange-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;