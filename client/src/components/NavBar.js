// src/pages/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/userService';

import EmailIcon from "../img/EmailIcon.png";
import PasswordIcon from "../img/PasswordIcon.png";

const SignIn = ({toggleForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const response = await authenticateUser(credentials);
      // Handle successful authentication (e.g., store user info, redirect, etc.)
      console.log(response.message);
      navigate('/');
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  return (
    <div className="AuthWrapper">
        <div className="userForm">
        <h1 className="AuthTitle">Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div className="AuthFormInput">
            <img src={EmailIcon} alt="Email Icon" className="AuthIcon" />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
            />
            </div>
            <div className="AuthFormInput">
            <img src={PasswordIcon} alt="Password Icon" className="AuthIcon" />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
            />
            </div>
            <div className="ButtonWrapper">
                <button type="submit" className="SubmitButton">Sign In</button>
            </div>
            <p onClick={toggleForm} className="AuthInfo" >Don't have an account? Sign up</p>
        </form>
        </div>
    </div>
  );
};

export default SignIn;