import React,{useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import UserProfileCard from './UserProfile';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
      viewBox="0 0 20 20"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 19l-6-6 6-5"
      />
    </svg>
  );

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><button
            className="text-white hover:text-indigo-200 ml-auto"
            onClick={goBack}
          >
            <BackArrowIcon />
              
          </button> Back</li>
        <li><Link to="/" className="nav-link"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        
      </ul>
      <ul>
      <h3 className="font-bold text-white">ASSET SYNC MANAGER</h3>
      </ul>
      <ul>
      <div className="flex">
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
      </ul>
      {user ? (
        <div className="nav-list right">
          <ul>
            <button className="logout-button" onClick={()=>{
              navigate("/login")
              logout()
            }}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
          </ul>
          <ul>
          </ul>
          <div className={`user-profile-dropdown ${isProfileHovered ? 'show' : ''}`}>
            {isProfileHovered && <UserProfileCard />}
          </div>
          <>
            <div className="user-icon" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </>
        </div>
      ) : (
        <ul className="nav-list right">
          <li><Link to="/login" className="nav-link"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
          <li><Link to="/register" className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Register</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
