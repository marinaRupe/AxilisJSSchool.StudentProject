import React, { Component } from 'react';
import NavigationBar from './NavigationBar'

class FavoritesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Favorites</h1>
        <NavigationBar />
      </div>
    );
  }
}

export default FavoritesComponent;