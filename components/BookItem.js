import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const { id, title, author, coverImage } = book;

  return (
    <div className="book-item">
      <img src={coverImage} alt={title} />
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <Link to={`/book/${id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default BookItem;
