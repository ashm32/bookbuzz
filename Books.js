import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '/Users/ayshahmalik/Downloads/bookbuzz/actions/booksActions.js';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks(1)); // Fetch books on component mount (initially page 1)
  }, [dispatch]);

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Book Catalog</h2>
      {books.map((book) => (
        <div key={book.id}>
          <img src={book.cover} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Rating: {book.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
