import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

const NavigLink = (props) => {
  return (
    <NavLink activeClassName="active" {...props} >
      {props.children}
    </NavLink>
  );
};

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <NavigLink to="/favorites">Favorites</NavigLink>
          <NavigLink to="/search">Search</NavigLink>
          <NavigLink to="/logout">Logout</NavigLink>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;