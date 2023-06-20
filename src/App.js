const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      // Implement other cases: REGISTER_SUCCESS, REGISTER_ERROR, LOGOUT_SUCCESS, LOGOUT_ERROR, etc.
      default:
        return state;
    }
  };
  
  export default authReducer;
  
