import { ADD_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from './types';

export const addReview = (userId, bookId, reviewText) => {
  return {
    type: ADD_REVIEW,
    payload: {
      userId,
      bookId,
      reviewText,
    },
  };
};

export const editReview = (reviewId, reviewText) => {
  return {
    type: EDIT_REVIEW,
    payload: {
      reviewId,
      reviewText,
    },
  };
};

export const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    payload: {
      reviewId,
    },
  };
};
