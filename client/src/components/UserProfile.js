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
            <h2>{user.full_name}</h2>
            <p><span className="label">Username:</span> <span className="value">{user.username}</span></p>
            <p><span className="label">Role:</span> <span className="value">{user.role}</span></p>
            <p><span className="label">Department:</span> <span className="value">{user.department}</span></p>
            <p><span className="label">Employed On:</span> <span className="value">{new Date(user.employed_on).toLocaleDateString()}</span></p>
        </div>
        </div>

  );
};

export default UserProfileCard;
