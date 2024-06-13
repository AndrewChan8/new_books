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

import Favorite from '../img/Favorite.png'

function BookCard({ book }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="BookCard">
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            alt={book.volumeInfo.title}
            height="250"
            image={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="BookTitle1">
              {book.volumeInfo.title}
            </Typography>
          </CardContent>
          <CardActions>
            <img src= { Favorite } className="FavoriteIcon"/> 
            {/* TODO: Add OnClick to FavoriteIcon/ */}
            {book.volumeInfo.description && <Button size="small" onClick={handleOpen} className="BookCardButton">
              More
            </Button>}
          </CardActions>
        </Card>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="BookTitle2">{book.title}</DialogTitle>
          {book.volumeInfo.authors && <DialogContent className="BookAuthor">Author: {`${book.volumeInfo.authors}`}</DialogContent>}
          <DialogContent sx={{ display: 'flex' }}>
            <CardMedia
              className="BookCover"
              component="img"
              alt="Book Cover"
              height="140"
              image={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail}
            />
            <Typography className="BookDescription">
              {book.volumeInfo.description}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus className="CloseBookButton">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default BookCard;