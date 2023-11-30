import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const BackArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

function Navbar() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="w-full bg-amber-700 shadow z-40">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center space-x-4">
          <button
            className="text-white hover:text-indigo-200 ml-auto"
            onClick={goBack}
          >
            <BackArrowIcon /> 
          </button>

          <h2 className="text-2xl font-bold text-white">ASSET SYNC MANAGER</h2>
        </div>

        <div className="flex">
          <ul className="items-center flex px-10 justify-center space-y-8 md:flex md:space-x-6 md-space-y-0">
            <li className="text-white hover:text-indigo-200">
              <NavLink to="/home">Home</NavLink>
            </li>
          </ul>
          <ul className="items-center flex px-10 justify-center space-y-8 md:flex md:space-x-6 md-space-y-0">
            <li className="text-white hover:text-indigo-200">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <ul className="items-center flex px-10 justify-center space-y-8 md:flex md:space-x-6 md-space-y-0">
            <li className="text-white hover:text-indigo-200">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="md:flex md:space-x-4 md:inline-block">
          <div className="px-4 py-1 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
            <Link to="/register">Register</Link>
          </div>
          <div className="px-4 py-1 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
