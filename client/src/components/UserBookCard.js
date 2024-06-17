import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { unfavoriteBook } from '../services/bookService'; // Assuming you have a service for book-related API calls
import Unfavorite from '../img/Unfavorite.png';

function BookCard({ book }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnfavoriteClick = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      console.error('User not logged in');
      return;
    }

    try {
      const bookDetails = {
        user_id: user.id,
        book_title: book.book_title,
      };

      await unfavoriteBook(bookDetails);
      console.log('Book unfavorited successfully');
    } catch (error) {
      console.error('Error unfavoriting book:', error);
    }
  };

  return (
    <div className="BookCard">
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt={book.book_title}
          height="250"
          image={book.book_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className="BookTitle1">
            {book.book_title}
          </Typography>
        </CardContent>
        <CardActions>
          <img
            src={Unfavorite}
            className="UnfavoriteIcon"
            onClick={handleUnfavoriteClick}
            alt="Unfavorite Icon"
          />
          {book.book_description && (
            <Button size="small" onClick={handleOpen} className="BookCardButton">
              More
            </Button>
          )}
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="BookTitle2">{book.book_title}</DialogTitle>
        {book.book_authors && (
          <DialogContent className="BookAuthor">
            Author: {book.book_authors}
          </DialogContent>
        )}
        <DialogContent sx={{ display: 'flex' }}>
          <CardMedia
            className="BookCover"
            component="img"
            alt="Book Cover"
            height="140"
            image={book.book_image}
          />
          <Typography className="BookDescription">{book.book_description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus className="CloseBookButton">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BookCard;
