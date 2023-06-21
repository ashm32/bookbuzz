import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, editReview } from '../actions/reviewActions';

const ReviewForm = ({ bookId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const reviews = useSelector((state) => state.reviews.reviews);

  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reviewText.trim() === '') {
      return;
    }

    if (user) {
      const existingReview = reviews.find((review) => review.bookId === bookId && review.userId === user.id);

      if (existingReview) {
        dispatch(editReview(existingReview.id, reviewText));
      } else {
        dispatch(addReview(user.id, bookId, reviewText));
      }

      setReviewText('');
    }
  };

  return (
    <div>
      {user ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Please log in to add or edit reviews.</p>
      )}
    </div>
  );
};

export default ReviewForm;
