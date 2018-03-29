import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default class NavBar extends Component {



  render() {
    return (
      <div className="App">

          <div>
              <h1>Tunr</h1>
              <div>
                  <div><Link to="/">All Artists</Link></div>
                  <div><Link
              </div>
          </div>
    );
  }

}
