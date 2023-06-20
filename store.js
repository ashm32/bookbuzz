import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
