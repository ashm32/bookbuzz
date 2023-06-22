import { SET_ERROR, CLEAR_ERROR } from './types';

// Action creator to set an error
export const setError = (message) => ({
  type: SET_ERROR,
  payload: message,
});

// Action creator to clear the error
export const clearError = () => ({
  type: CLEAR_ERROR,
});
