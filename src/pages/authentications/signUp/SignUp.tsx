import React, { useState } from 'react';
import { storeUser } from '../../../utils/localStorageUtils';
import './signup.css'; 

const SignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSignUp = () => {
    if (!username || !password || !email) {
      setErrorMessage('All fields are required.');
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((user: any) => user.username === username);

    if (userExists) {
      setErrorMessage('Username already exists. Please choose another.');
      return;
    }
    const newUser = { username, password, email };
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    storeUser(newUser);
    setUsername('');
    setPassword('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" className="form-control" value={username} onChange={(e: any) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e: any) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e: any) => setEmail(e.target.value)} />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
