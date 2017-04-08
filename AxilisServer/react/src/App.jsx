import React, { Component } from 'react';
import MovieComponent from './MovieComponent';
import LoginComponent from './LoginComponent';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


const NotFound = () => {
  return (
    <h1>This page is missing...</h1>
  );
};

const favorites = () => {
  return (<h3>Favorites</h3>);
};

const search = () => {
  return (<h3>Search</h3>);
};

const logout = () => {
  return (<h3>Logout</h3>);
};

const NasLink = (props) => {
  return (
    <NavLink activeClassName="active" {...props} >
      {props.children}
    </NavLink>
  );
};

const NavigationBar = () => {
  return(
    <div>
      <Router>
        <div>
          <ul>
            <NasLink exact to="/">
              <h1>Home</h1>
              <h2>Subtitle</h2>
            </NasLink>
            <NasLink to="/favorites">Favorites</NasLink>
            <NasLink to="/search">Search</NasLink>
            <NasLink to="/logout">Logout</NasLink>
          </ul>
          <Route exact path="/" component={favorites} />
          <Route path="/world" component={search} />
          <Route path="/about" component={logout} />
        </div>
      </Router>
    </div>
  );
};

const FavoritesHeader = () => {
  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
};

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ MovieComponent }/>
            <Route exact path="/login" component={ LoginComponent }/>
            <Route path="*" component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
