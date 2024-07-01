import React, { useState } from 'react';
import './signin.css';
import { TextField, Button } from '@mui/material';
import { storeUser } from '../../../utils/localStorageUtils'; 

const SignIn = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    storeUser({ username, email: '' });
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
            onChange={(e: any) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
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
