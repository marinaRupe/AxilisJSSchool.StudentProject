import React, { Component } from 'react';
import MovieComponent from './components/MovieComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


const NotFound = () => {
  return (
    <h1>This page is missing...</h1>
  );
};

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar/>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ MovieComponent }/>
            <Route exact path="/login" component={ LoginComponent }/>
            <Route path="*" component={ NotFound } />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
