import React from 'react';
import { useAuth } from './AuthContext';
import { FaUser } from 'react-icons/fa'; // Import the desired icon
const UserProfileCard = () => {
    const { user } = useAuth();
    if (!user) {
        return <p>User not logged in</p>;
    }

    return (
        <div className='user-profile-card'>
        <div className="user-avatar">
            <FaUser size={30} />
        </div>
        <div className="profile-details">
            <p><span className="label">Username: <span className="value">{user.username}</span></span></p>
            <p><span className="label">Role: <span className="value">{user.role}</span></span></p>
            <p><span className="label">Department: <span className="value">{user.department}</span></span></p>
        </div>
        </div>

  );
};

export default UserProfileCard;
