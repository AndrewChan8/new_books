import React from 'react';
import axios from 'axios';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      const response = await axios.post('http://localhost:9000/auth/signout', {}, { withCredentials: true });
      console.log(response.data);
      // Handle successful sign-out (e.g., clear user state, redirect to home page)
    } catch (error) {
      console.error('Sign out failed', error);
    }
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOut;
