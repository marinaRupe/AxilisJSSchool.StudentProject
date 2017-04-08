import React, { Component } from 'react';
import LoginComponent from './components/LoginComponent';
import FavoritesComponent from './components/FavoritesComponent';
import SearchComponent from './components/SearchComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const logout = () => {
  return (<h3>Logout</h3>);
};

const NotFound = () => {
  return (
    <h1>This page is missing...</h1>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: false,
      isError: false
    };
  }

  componentDidMount() {
    /*
    this.setState({
      isError: false,
      isLoading: true
    });

    let _this = this;


    fetch("http://localhost:3000/movie/all").then((response) => response.json())
      .then((movies) => {
        _this.setState({
          movies: movies,
          isLoading: false
        });
      })
      .catch((error) => {
        _this.setState({
          movies: [],
          isLoading: false,
          isError: true
        });
      });
      */
  }

  render() {
    let favorites = (props) => { return (<FavoritesComponent movies={this.state.movies} {...props}/>) };
    let search = (props) => { return (<SearchComponent movies={this.state.movies} {...props} />)};
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={FavoritesComponent}/>
              <Route exact path="/login" component={LoginComponent}/>
              <Route exact path="/favorites" component={favorites} />
              <Route path="/search" component={search}/>
              <Route path="/logout" component={logout}/>
              <Route path="*" component={ NotFound }/>
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
