import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOK_DETAILS_REQUEST,
  FETCH_BOOK_DETAILS_SUCCESS,
  FETCH_BOOK_DETAILS_FAILURE,
} from '../actions/booksActions';

const initialState = {
  books: [],
  loading: false,
  error: null,
  bookDetails: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_BOOK_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        bookDetails: null,
      };
    case FETCH_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookDetails: action.payload,
      };
    case FETCH_BOOK_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
