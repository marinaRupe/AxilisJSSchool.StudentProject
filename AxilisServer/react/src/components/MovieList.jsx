import React, { Component } from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends Component {
  render() {
      let movies = this.props.movies;
      let movieComponents = movies.map((m, index) => {
    return (<MovieListItem key={ m._id } movie={ m } index={ index } />);
  });
      return(
        <div>{movieComponents}</div>
      );
  }
}

export default MovieList;