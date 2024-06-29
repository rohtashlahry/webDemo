import React, { useState } from 'react';
import { storeUser } from '../../../utils/localStorageUtils'; // Adjust the path as per your file structure
import './signup.css'; // Import the CSS file for styling

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    // Basic validation (you can add more as per your requirements)
    if (!username || !password || !email) {
      setErrorMessage('All fields are required.');
      return;
    }

    // Check if user with the same username already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((user: any) => user.username === username);

    if (userExists) {
      setErrorMessage('Username already exists. Please choose another.');
      return;
    }

    // Create new user object
    const newUser = { username, password, email };

    // Store new user in localStorage
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    storeUser(newUser);

    // Clear form fields and error message after successful signup
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
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
