import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UserBookCardGrid from '../components/UserBookCardGrid';
import NavBar from '../components/NavBar';
import { getFavoriteBooks } from '../services/bookService';

const Profile = () => {
  const navigate = useNavigate();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const userRef = useRef(JSON.parse(localStorage.getItem('user')));
  const user = userRef.current;

  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      if (user) {
        try {
          const books = await getFavoriteBooks(user.id);
          setFavoriteBooks(books);
        } catch (error) {
          console.error('Error fetching favorite books:', error);
        }
      } else {
        console.log('No user found, navigating to authentication');
        navigate('/authentication');
      }
    };

    fetchFavoriteBooks();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) {
    return null;
  }

  console.log('Favorite books:', favoriteBooks);

  return (
    <>
      <NavBar />
      <div className="ProfileWrapper">
        <h1>Welcome, {user.username}!</h1>
        <button className="SubmitButton" onClick={handleLogout}>Logout</button>
      </div>
      <div className="FavoriteBooksWrapper">
        <h2>Your Favorite Books</h2>
        <UserBookCardGrid books={favoriteBooks} />
      </div>
    </>
  );
};

export default Profile;
