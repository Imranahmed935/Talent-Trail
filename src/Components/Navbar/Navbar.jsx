import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const handleSignOutForm = () => {
    handleSignOut()
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li><NavLink to={'/'}>Home</NavLink></li>
     {
     
       user && <div className='flex'>
        <li><NavLink to={'/profile'}>My Profile</NavLink></li>
        <li><NavLink to={'/interest'}>Interest Test</NavLink></li>
       </div>
     }
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className="lg:text-4xl text-2xl font-bold">Talent Trail</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <div className="flex items-center gap-5">
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt="User"
              />
              <span className="absolute left-1/2 top-full mt-1 hidden w-max -translate-x-1/2 rounded bg-gray-700 px-2 py-1 text-sm text-white group-hover:block">
                {user?.displayName || 'User'}
              </span>
            </div>
            <Link onClick={handleSignOutForm} to={'/'} className="btn btn-neutral">LogOut</Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to={'/register'} className="btn border border-black">Register</Link>
            <Link to={'/login'} className="btn btn-neutral">LogIn</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
