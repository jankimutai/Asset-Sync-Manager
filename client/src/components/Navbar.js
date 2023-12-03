import React,{useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import UserProfileCard from './UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import "../Styles/navbar.css"
function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  

  const goBack = () => {
    navigate(-1);
  };

  const [isProfileHovered, setProfileHovered] = useState(false);

  const handleProfileMouseEnter = () => {
    setProfileHovered(true);
  };

  const handleProfileMouseLeave = () => {
    setProfileHovered(false);
  };
  

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

  return (
    <nav className="w-full bg-amber-700 shadow z-4">
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
        {user ? (
        <div className="nav-list right">
          <ul>
            <button className="logout-button" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>

          </ul>
          
          <div className={`user-profile-dropdown ${isProfileHovered ? 'show' : ''}`}>
            {isProfileHovered && <UserProfileCard />}
          </div>
          <>
            <div className="user-icon" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </>
          <ul className="mb-2" style={{fontSize: '20px',padding:"10px",textTransform: 'uppercase'}}>Welcome, {user.username}</ul>
        </div>
          ) : (
            <>
            <div className="px-4 py-1 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
              <Link to="/register">Register</Link>
            </div>
            <div className="px-4 py-1 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
              <Link to="/login">Login</Link>
            </div>
          </>
          )}
        </div>
    </nav>
  );
}

export default Navbar;
