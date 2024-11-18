import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const {signInWithEmail,handleGoogle} = useContext(AuthContext)
    const navigate = useNavigate()


    const signInWithGoogle = ()=>{
        handleGoogle()
        .then(result =>{
            console.log(result.user)
            navigate('/')
            toast.success('Successfully loggedIn')
        })
        .then(error =>{
            console.log(error.message)
            toast.error(error.message)
        })
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmail(email, password)
        .then((result)=>{
            console.log(result.user)
            navigate('/')
        })
        .then((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <nav className='lg:w-9/12 mx-auto py-6'>
             <Navbar/>
           </nav>
           <div className="hero py-32">
  <div className=" flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold py-4 text-center mb-4">Please Login </h1>
    </div>
    <div className="lg:w-[500px] w-full bg-base-300 p-10">
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
          <p>don't have an account | <Link to={'/register'} className='text-blue-600'>Register</Link></p>
        </div>
        
      </form>
      <div className="form-control mt-6">
          <button onClick={signInWithGoogle} className="btn border border-black">Login with Google</button>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;