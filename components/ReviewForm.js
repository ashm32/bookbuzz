import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview, updateReview } from '../actions/reviewActions';

const ReviewForm = ({ bookId, review, onSubmit }) => {
  const [content, setContent] = useState(review ? review.content : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (review) {
      dispatch(updateReview(review.id, content));
    } else {
      dispatch(addReview(bookId, content));
    }

    if (onSubmit) {
      onSubmit();
    }

    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review..."
        required
      ></textarea>
      <button type="submit">{review ? 'Update Review' : 'Add Review'}</button>
    </form>
  );
};

export default ReviewForm;
