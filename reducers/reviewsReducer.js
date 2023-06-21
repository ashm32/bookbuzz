import { ADD_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from '../actions/types';

const initialState = {
  reviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          {
            id: Date.now(), // Generate a unique ID (you can use a different approach if needed)
            userId: action.payload.userId,
            bookId: action.payload.bookId,
            reviewText: action.payload.reviewText,
          },
        ],
      };

    case EDIT_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload.reviewId ? { ...review, reviewText: action.payload.reviewText } : review
        ),
      };

    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload.reviewId),
      };

    default:
      return state;
  }
};

export default reviewReducer;
