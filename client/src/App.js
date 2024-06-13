import React, { useState, useEffect } from "react";
import axios from "axios"

import './css/App.css';
import './css/NavBar.css';
import './css/Auth.css';
import './css/SlideShow.css';
import './css/About.css';
import './css/SearchBar.css';
import './css/BookCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'
import ImageCarousel from './components/Carousel'
import SearchBooks from './components/SearchBooks';
import SearchIcon from './img/SearchIcon.png';
import BookCardGrid from "./components/BookCardGrid";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Best Sellers");

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
      <NavBar />
      <ImageCarousel />
      <header className="App-header">
        <h1 className="Title">Browse for your favorite books!</h1>
      </header>
      <div className="SearchBarContainer">
          <input
          className="SearchBar"
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for a book..."
        />
        <img src={ SearchIcon } alt="Search Icon" className="SearchIcon"/>
      </div>
      {/* <SearchBooks books={books} /> */}
      <BookCardGrid books={books}/>
    </div>
  );
}

export default App;