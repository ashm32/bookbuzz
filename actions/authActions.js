import firebase from '../firebase';

// Action to handle user login
export const login = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      });
  };
};

// Action to handle user registration
export const register = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'REGISTER_SUCCESS', payload: user });
      })
      .catch((error) => {
        dispatch({ type: 'REGISTER_ERROR', payload: error.message });
      });
  };
};

// Action to handle user logout
export const logout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_SUCCESS' });
      })
      .catch((error) => {
        dispatch({ type: 'LOGOUT_ERROR', payload: error.message });
      });
  };
};

// Action to check the authentication status
export const checkAuthStatus = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        // User is not authenticated
        dispatch({ type: 'LOGOUT_SUCCESS' });
      }
    });
  };
};
