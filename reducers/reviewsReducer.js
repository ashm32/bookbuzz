//= TODO

const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      // Add logic to handle adding a review to the state
      // You can update the state by adding the new review to the reviews array


      return {
        ...state,
        reviews: [
          ...state.reviews,
          {
            id: Math.random().toString(),
            bookId: action.payload.bookId,
            content: action.payload.content,
          },
        ],
      };

    case 'UPDATE_REVIEW':
      // Add logic to handle updating a review in the state
      // You can update the state by finding the review by ID and updating its content

      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload.reviewId
            ? { ...review, content: action.payload.content }
            : review
        ),
      };

    case 'DELETE_REVIEW':
      // Add logic to handle deleting a review from the state
      // You can update the state by filtering out the review with the matching ID


      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id !== action.payload.reviewId
        ),
      };

    default:
      return state;
  }
};

export default reviewsReducer;
