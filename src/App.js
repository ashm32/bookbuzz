import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { checkAuthStatus } from '/Users/ayshahmalik/Downloads/bookbuzz/actions/authActions.js';
import LoginForm from '/Users/ayshahmalik/Downloads/bookbuzz/components/LoginForm';
import RegisterForm from '/Users/ayshahmalik/Downloads/bookbuzz/components/RegisterForm';
import Books from '/Users/ayshahmalik/Downloads/bookbuzz/components/Books.js'; // Import the new component

const App = () => {
  // Dispatch checkAuthStatus action as needed

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/books" component={Books} /> // Add the new route
          {/* Add other routes for your application */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
