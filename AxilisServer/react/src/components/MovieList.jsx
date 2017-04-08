import React, { Component } from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends Component {
    render() {
        let movies = this.props.movies;
        var movieComponents = movies.map((m, index) => {
      return (<MovieListItem key={ m._id } movie={ m } index={ index }></MovieListItem>);
    });
        return(
            {movieComponents}
        );
    }
}

export default MovieList;