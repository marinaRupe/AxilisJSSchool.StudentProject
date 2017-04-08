import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import MovieList from "./MovieList";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <h1>Search</h1>
        <NavigationBar />
        <MovieList movies={ this.props.movies }/>
      </div>
    );
  }
}

export default SearchComponent;