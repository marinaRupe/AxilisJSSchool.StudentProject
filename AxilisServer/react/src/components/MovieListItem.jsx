import React, { Component } from 'react';

const NavigLink = (props) => {
  return (
    <NavLink activeClassName="active" {...props} >
      {props.children}
    </NavLink>
  );
};

class MovieListItem extends Component {
    render () {
        let movie = this.props.movie;
        return(
            <div>
               <NavigLink to={'/' + movie.imdbID} > <img src={movie.Poster}/> </NavigLink>
                <p>{movie.Title}</p>
                <p> {movie.Released} </p>
            </div>
        );
    }
}