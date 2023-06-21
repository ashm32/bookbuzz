import { combineReducers } from 'redux';
import authReducer from '/actions/authActions.js';
import booksReducer from '/actions/booksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer, // Add the new reducer
  // Add other reducers if needed
});

export default rootReducer;
