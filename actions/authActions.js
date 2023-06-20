import firebase from '../firebase';

export const login = (email, password) => {
  return (dispatch) => {
    // Call the Firebase login method and handle the authentication process
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User login successful
        const user = userCredential.user;
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      })
      .catch((error) => {
        // Handle login error
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      });
  };
};

// TODO: Implement other actions: register, logout, and checkAuthStatus
