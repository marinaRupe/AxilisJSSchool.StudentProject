import React, { Component } from 'react';
import MovieComponent from './components/MovieComponent';
import LoginComponent from './components/LoginComponent';
import FavoritesComponent from './components/FavoritesComponent';
import SearchComponent from './components/SearchComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const logout = () => {
  return (<h3>Logout</h3>);
};

const NotFound = () => {
  return (
    <h1>This page is missing...</h1>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" component={FavoritesComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/favorites" component={FavoritesComponent} />
          <Route path="/search" component={SearchComponent} />
          <Route path="/logout" component={logout} />

        </div>
      </Router>

      </div>
    );
  }
  //<Route path="*" component={ NotFound } />
}

export default App;
