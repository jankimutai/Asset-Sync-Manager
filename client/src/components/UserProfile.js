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
            <FaUser size={40} />
        </div>
        <div className="profile-details">
            <h2>{user.full_name}</h2>
            <p>Username: {user.username}</p>
            <p>Role: {user.role}</p>
            <p>Department: {user.department}</p>
            <p>Employed On: {new Date(user.employed_on).toLocaleDateString()}</p>
        </div>
        </div>
  );
};

export default UserProfileCard;
