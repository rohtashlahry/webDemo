import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, clearUser } from '../../utils/localStorageUtils'; // Adjust the import path as needed
import "./userdashboard.css"

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleSignOut = () => {
    clearUser();
    navigate('/sign-in');
  };

  return (
    <div className="welcome-container">
      {user ? (
        <>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
        </>
      ) : (
        <h1>You are not signed in.</h1>
      )}
    </div>
  );
};

export default UserDashboard;
