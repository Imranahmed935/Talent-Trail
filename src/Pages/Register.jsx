import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
  const { createUserWithEmail, handleGoogle } = useContext(AuthContext);
  const [showPassword, setPassword] = useState(true);
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    handleGoogle()
      .then(() => {
        toast.success('Google Sign-In Successful!');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message || 'Google Sign-In Failed.');
      });
  };
 
  
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regValidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;

    if (!regValidate.test(password)) {
        toast.error(
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 6-16 characters long without spaces.'
            );
            return;
    } 

    createUserWithEmail(email, password)
      .then(async ()=> {
        toast.success('Registration Successful!');
        navigate('/');
        const data = {
          displayName: name,
          photoURL: photo,
        };

        try {
              await updateProfile(auth.currentUser, data);
              toast.success('Profile Updated Successfully!');
          } catch (error) {
              toast.error('Profile Update Failed: ' + error.message);
          }
      })
      .catch((error) => {
        toast.error(error.message || 'Registration Failed.');
      });
  };

  const handleIcon = ()=>{
    setPassword(!showPassword)
  }

  return (
    <div>
      <Helmet>
        <title>talent trail | register </title>
      </Helmet>
      <nav className='lg:w-9/12 mx-auto py-6'>
        <Navbar />
      </nav>
      <div className="hero py-24 ">
        <div className="flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold py-4 text-center mb-4">Please Register</h1>
          </div>
          <div className="lg:w-[500px] w-full bg-base-300 p-10">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
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
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'password': 'text'}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered "
                  required
                />
                <p onClick={handleIcon} className='absolute cursor-pointer right-4 text-xl top-12'>{showPassword ? <FaEyeSlash/>: <IoMdEye/>}</p>
              </div>
               
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
                <p>
                  Already have an account?{' '}
                  <Link to={'/login'} className="text-blue-600">
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <div className="form-control mt-6">
              <button onClick={signInWithGoogle} className="btn border border-black">
               <FaGoogle/>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
