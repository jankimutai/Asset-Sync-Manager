import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [] = useState(false);

  return (
    <nav className="fixed w-full bg-amber-700 shadow z-40">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">ASSET SYNC MANAGER</h2>
            </a>
            <div className="md:hidden"></div>
          </div>
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
