import axios from 'axios';

// Action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

// Action Creators
export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

// Thunk to fetch books
export const fetchBooks = (page) => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    const PAGE_SIZE = 10; // Number of books per page

    axios
      .get(
        `https://openlibrary.org/search.json?q=fantasy&page=${page}&limit=${PAGE_SIZE}`
      )
      .then((response) => {
        const booksData = response.data.docs;

        const books = booksData.map((book) => ({
          id: book.key,
          title: book.title,
          author: book.author_name ? book.author_name[0] : 'Unknown',
          rating: book.rating ? book.rating.average.toFixed(2) : 'N/A',
          cover: `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
        }));

        dispatch(fetchBooksSuccess(books));
      })
      .catch((error) => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};
