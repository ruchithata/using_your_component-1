// cart/BookCard.jsx
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h3>{book.name}</h3>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookCard;
