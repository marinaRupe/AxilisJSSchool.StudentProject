import React, { Component } from 'react';
import NavigationBar from './NavigationBar'

class SearchComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <h1>Search</h1>
        <NavigationBar />
      </div>
    );
  }
}

export default SearchComponent;