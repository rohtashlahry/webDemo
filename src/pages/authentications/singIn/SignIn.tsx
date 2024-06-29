import React, { useState } from 'react';
import './signin.css'; // Import the CSS file for styling
import { TextField, Button } from '@mui/material';
import { storeUser } from '../../../utils/localStorageUtils'; // Adjust the path as per your file structure

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., API call)

    // Example: Storing user information in localStorage
    storeUser({ username, email: '' }); // Replace with actual user data
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Username:</label>
          <TextField
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
