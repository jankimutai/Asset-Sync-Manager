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
            <FaUser size={36} />
        </div>
        <div className="profile-details">
            <p><span className="label">Username:</span> <span className="value">{user.username}</span></p>
            <p><span className="label">Role:</span> <span className="value">{user.role}</span></p>
            <p><span className="label">Department:</span> <span className="value">{user.department}</span></p>
        </div>
        </div>

  );
};

export default UserProfileCard;
