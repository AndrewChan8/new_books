import React, { useState, useEffect } from "react";
import AddUser from './components/AddUser';
import axios from "axios"

import SearchBooks from './components/SearchBooks';

import './css/App.css';
import './css/NavBar.css';
import './css/Auth.css';
import './css/SlideShow.css';
import './css/About.css';
import './css/SearchBar.css';
import './css/BookCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("best sellers");

  const handleSearch = (query) => {
    setBooks([]);
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/books?q=${searchQuery}`);
        setBooks(response.data || []);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the API:", error);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Book Search</h1>
      </header>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <AddUser />
      <SearchBooks books={books} />
    </div>
  );
}

export default App;
