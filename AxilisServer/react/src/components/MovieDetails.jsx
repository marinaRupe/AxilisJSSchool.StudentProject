import React, { Component } from 'react';

class MovieDetails extends Component {

    render() {
    let movie = this.props.movie;
        return(
            <div>
                <h1> {movie.Title} </h1>
                <img src={movie.Poster} />
                <h2> Plot </h2>
                <p> {movie.Plot} </p>
                <h2> Actors </h2>
                <p> {movie.Actors} </p>
                <h2> Directors </h2>
                <p> {movie.Directors} </p>
                <h2> Awards </h2>
                <p> {movie.Awards} </p>
            </div>
        );
    }
}