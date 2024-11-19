import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Login = () => {
  const { signInWithEmail, handleGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const signInWithGoogle = () => {
    handleGoogle()
      .then(() => {
        toast.success('Google Sign-In Successful!');
        navigate(location.state ? location.state : '/');
      })
      .catch((error) => {
        toast.error(error.message || 'Google Sign-In Failed.');
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmail(email, password)
      .then(() => {
        toast.success('Login Successful!');
        navigate(location.state ? location.state : '/');
      })
      .catch((error) => {
        toast.error(error.message || 'Login Failed.');
      });
  };

  return (
    <div>
      <Helmet>
      <title>talent trail | login </title>
      </Helmet>
      <nav className="lg:w-9/12 mx-auto py-6">
        <Navbar />
      </nav>
      <div className="hero py-32">
        <div className="flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold py-4 text-center mb-4">Please Login</h1>
          </div>
          <div className="lg:w-[500px] w-full bg-base-300 p-10">
            <form onSubmit={handleLogin}>
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
                <button className="btn btn-neutral">Login</button>
                <p>
                  Don't have an account?{' '}
                  <Link to={'/register'} className="text-blue-600">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <div className="form-control mt-6">
              <button
                onClick={signInWithGoogle}
                className="btn border border-black">
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
