import React from 'react';

const SearchBooks = ({ books }) => {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <p>{book.volumeInfo.title}</p>
            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBooks;
