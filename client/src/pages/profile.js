import React from 'react';
import BookCardGrid from '../components/BookCardGrid';
const Profile = () => {
  return (
    <>
      <h1 className="Title">Welcome User!</h1>
      <h2>About You</h2>
      <p>Name : John Doe</p>
      <p>Email : johndoe89@gmail.com</p>
      <h2>Your Favorite Books</h2>
      <BookCardGrid />
    </>
  );
};

export default Profile;

