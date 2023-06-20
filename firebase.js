import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Replace with your own Firebase configuration
  apiKey: 'AIzaSyCoGbKYeooHqU74jmPc2RMyOiQr8NNPEzk',
  authDomain: 'bookbuzz-dcb6a.firebaseapp.com',
  projectId: 'bookbuzz-dcb6a',
  // ... other configuration options
};

firebase.initializeApp(firebaseConfig);

export default firebase;
