import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookDetails } from '../actions/booksActions';

const BookDetails = ({ match }) => {
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.books.bookDetails);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  const bookId = match.params.id;

  useEffect(() => {
    dispatch(fetchBookDetails(bookId));
  }, [dispatch, bookId]);

  if (loading) {
    return <div>Loading book details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bookDetails) {
    return null;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <h3>Description:</h3>
      <p>{bookDetails.description}</p>
      <h3>Average Rating:</h3>
      <p>{bookDetails.averageRating}</p>
      <h3>User Reviews:</h3>
      <ul>
        {bookDetails.reviews.length > 0 ? (
          bookDetails.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))
        ) : (
          <li>No reviews available.</li>
        )}
      </ul>
    </div>
  );
};

export default BookDetails;
