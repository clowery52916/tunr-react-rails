import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'


class NewArtistForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewArtist}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newArtist.name}/>
          {/* //on the on submit option we need to padd down props for the new artist tot be created
          {this.props.createNewArtist} in the artistListView */}
        </Form.Field>
        <Form.Field>
          <label>Nationality</label>
          <input placeholder='Nationality' name="nationality" onChange={this.props.handleChange} value={this.props.newArtist.nationality}/>
          {/* //we will add in a new artist to the state and make it equal to title nationality and photo */}
          {/* //so we can call in new artist on out Artist List view and pass the props to it! */}
        </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <input placeholder='Photo Url' name="photo_url" onChange={this.props.handleChange} value={this.props.newArtist.photo_url}/>
          {/* //we will add in a new artist to the state and make it equal to title nationality and photo */}
          {/* //so we can call in new artist on out Artist List view and pass the props to it! */}
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default NewArtistForm

//this form was inputted by semantic-ui! It makes forms pretty easy to add in your app!!!
//we will need to get the inputs and tie them to our react app
//in order to do that, we can do an entire axios call and then pass down state
