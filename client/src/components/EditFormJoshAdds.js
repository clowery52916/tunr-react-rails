import React, {Component} from "react";
import {Input, Form} from 'semantic-ui-react'

class EditArtistForm extends Component {
  render() {
    return (<Form onSubmit={this.props.handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <Input placeholder={this.props.artist.name} name="name" type="text" onChange={this.props.handleChange} value={this.props.artist.name}/>
      </Form.Field>
      <Form.Field>
        <label>Nationality</label>
        <Input placeholder={this.props.artist.nationality} name="nationality" type="text" onChange={this.props.handleChange} value={this.props.artist.nationality}/>
      </Form.Field>
      <Form.Field>
        <label>Photo Url</label>
        <Input placeholder={this.props.artist.photo_url} name="photo_url" type="text" onChange={this.props.handleChange} value={this.props.artist.photo_url}/>
      </Form.Field>
      <Form.Button color="green" type="submit">Edit Artist</Form.Button>
    </Form>);
  }
}

export default EditArtistForm
