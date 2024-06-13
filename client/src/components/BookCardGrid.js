import React from 'react';
import Grid from '@mui/material/Grid'; // Import Grid component from Material-UI
import BookCard from './BookCard'; // Import the BookCard component
import ExampleCover from '../img/ExampleCover.png';


const BookCardGrid = () => {
  const books = [
    {id: 1, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description"},
    {id: 2, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description"},
    {id: 3, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description" },
    {id: 3, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description" },
    {id: 3, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description" },
    {id: 3, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description" },
    {id: 3, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description" },
    {id: 3, title: ' The Labyrinth of Whispers', author: 'Timothy Lengley', coverImage: ExampleCover, description: "Here is a description" },

  ]

  books.map(book => console.log(book));
  return (
    <>
     <div className="BookGridContainer">
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
};

export default BookCardGrid;

