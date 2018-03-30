import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled from 'styled-components'

const NavStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 15px 2.5vw;
  background: palevioletred;
`

export default class NavBar extends Component {

  render() {
    return (<div>
      <h1>Tunr</h1>
      <div>
        <div>
          <Link to="/">All Artists</Link>
        </div>
        <div>
          <Link to='/artist/3'>Test Single Artist</Link>
        </div>
      </div>
    </div>);
  }

}
//we are creating a navbar with 2 links here that will take us to a specific artist or to all of the artists 
