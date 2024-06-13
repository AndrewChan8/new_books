import React, { useState } from 'react';
import { createUser } from '../services/userService';

import EmailIcon from "../img/EmailIcon.png";
import UserIcon from "../img/UserIcon.png";
import PasswordIcon from "../img/PasswordIcon.png";

const SignUp = ({toggleForm}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    await createUser(newUser);
  };

  return (
    <div className="AuthWrapper">
      <div className="userForm">
        <h1 className="AuthTitle">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="AuthFormInput">
            <img src={UserIcon} alt="User Icon" className="AuthIcon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
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
          <br />
          <div className="ButtonWrapper">
            <button type="submit" className="SubmitButton">Add User</button>
          </div>
          <p onClick={toggleForm} className="AuthInfo">Already have an account? Sign in</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;