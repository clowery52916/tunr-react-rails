import React, { Component } from 'react';
import {Form, Button } from 'semantic-ui-react'



export default class NewArtistForm extends Component {



  render() {
    return (
    <form>
      {/* //on the on submit option we need to padd down props for the new artist tot be created
      {this.props.createNewArtist} in the artistListView */} 
      <label htmlFor=""></label>
      <input type="text" name="artist" value="" />
    </form>
    );
  }

}


//this from was inputted by semantic-ui! It makes forms pretty easy to add in your app!!!
//wewill need to get the inputs and tie them to our react app
//in order to do that, we can do an entire axios call and then pass down state
//
//we will add in a new artist to the state and make it equal to title nationality and photo
//
//so we can call in new artist on out Artist List view and pass the props to it!
