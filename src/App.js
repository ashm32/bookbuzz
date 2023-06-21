import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar /> {/* Include the Navbar component */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book/:id" component={BookDetails} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
