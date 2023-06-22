import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  reviews: reviewReducer,
    error: errorReducer,
});

export default rootReducer;


