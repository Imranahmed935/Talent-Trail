import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUserWithEmail, handleGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    handleGoogle()
      .then((result) => {
        console.log(result);
        toast.success('Google Sign-In Successful!');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || 'Google Sign-In Failed.');
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('Registration Successful!');
        navigate('/');
        const data = {
          displayName: name,
          photoURL: photo,
        };

        return updateProfile(auth.currentUser, data)
          .then(() => {
            toast.success('Profile Updated Successfully!');
          })
          .catch((error) => {
            console.error(error);
            toast.error('Profile Update Failed: ' + error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || 'Registration Failed.');
      });
  };

  return (
    <div>
      <nav className='lg:w-9/12 mx-auto py-6'>
        <Navbar />
      </nav>
      <div className="hero py-24">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
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
