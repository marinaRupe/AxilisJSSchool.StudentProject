import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import MovieList from "./MovieList";

class FavoritesComponent extends Component {

  render() {
    return(
      <div>
        <h1>Favorites</h1>
        <NavigationBar />
        <MovieList movies={ this.props.movies }/>
      </div>
    );
  }
}

export default FavoritesComponent;