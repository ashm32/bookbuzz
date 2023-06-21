// Action Types
export const FETCH_BOOK_DETAILS_REQUEST = 'FETCH_BOOK_DETAILS_REQUEST';
export const FETCH_BOOK_DETAILS_SUCCESS = 'FETCH_BOOK_DETAILS_SUCCESS';
export const FETCH_BOOK_DETAILS_FAILURE = 'FETCH_BOOK_DETAILS_FAILURE';

// Action Creators
export const fetchBookDetailsRequest = () => ({
  type: FETCH_BOOK_DETAILS_REQUEST,
});

export const fetchBookDetailsSuccess = (bookDetails) => ({
  type: FETCH_BOOK_DETAILS_SUCCESS,
  payload: bookDetails,
});

export const fetchBookDetailsFailure = (error) => ({
  type: FETCH_BOOK_DETAILS_FAILURE,
  payload: error,
});

// Thunk to fetch book details
export const fetchBookDetails = (bookId) => {
  return (dispatch) => {
    dispatch(fetchBookDetailsRequest());

    axios
      .get(`https://openlibrary.org/works/${bookId}.json`)
      .then((response) => {
        const bookDetails = {
          description: response.data.description || 'No description available.',
          averageRating: response.data.average_rating || 'N/A',
          reviews: response.data.reviews || [],
        };

        dispatch(fetchBookDetailsSuccess(bookDetails));
      })
      .catch((error) => {
        dispatch(fetchBookDetailsFailure(error.message));
      });
  };
};
