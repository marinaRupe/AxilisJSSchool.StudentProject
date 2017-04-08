import React, { Component } from 'react';
import LoginComponent from './LoginComponent'
import FavoritesComponent from './FavoritesComponent'
import SearchComponent from './SearchComponent'

const logout = () => {
  return (<h3>Logout</h3>);
};

const NavigLink = (props) => {
  return (
    <NavLink activeClassName="active" {...props} >
      {props.children}
    </NavLink>
  );
};

class NavigationBar extends Component() {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <NavigLink exact to="/">
                <h1>Home</h1>
                <h2>Subtitle</h2>
              </NavigLink>
              <NavigLink to="/favorites">Favorites</NavigLink>
              <NavigLink to="/search">Search</NavigLink>
              <NavigLink to="/logout">Logout</NavigLink>
            </ul>
            
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/favorites" component={FavoritesComponent} />
            <Route path="/search" component={SearchComponent} />
            <Route path="/logout" component={logout} />
            
          </div>
        </Router>
      </div>
    );
  }
}

export default NavigationBar;