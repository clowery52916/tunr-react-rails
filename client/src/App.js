import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ArtistListView from './components/ArtistListView'
import SingleArtistView from './components/SingleArtistView'
import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                  <NavBar />
                  <Switch>
                    <Route exact path="/" component={ArtistListView}/>
                    <Route path="/artist/:id" component={SingleArtistView}/>
                  </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
