import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import booksReducer from './reducers/booksReducer'; // Import the new reducer

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer, // Add the new reducer to the combineReducers function
  // Add other reducers when needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
