import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card, Image} from 'semantic-ui-react'
import styled from 'styled-components'

class SingleArtistView extends Component {
  state = {
    artist: {},
    songs: []
  }
  //creating a default state for our single artists

  componentDidMount() {
    this.getSingleArtist()
    //we are making an api call so we need to do a componentDidMount
    //props are just passing information down, props dont have to be state, could be info from api!
  }

  getSingleArtist = async () => {
    const artistId = this.props.match.params.id
    //here are are calling on the built in props that are supplied by the react router dom
    const res = await axios.get(`/api/artist/${artistId}`)
    //and here we are getting the response from the us calling on the props we were calling on
    console.log(res.data)
    this.setState(artist : res.data.artist, songs : res.data.songs
    //here we are setting the new state here to make get all the info from the artist and all of the artist
    //songs))
  )}
  //   catch (error) {
  //   console.log(error)
  //   await this.setState({error: error.message})
  //   this is just the error message we want to use if something doesnt work out
  // }
  deleteArtist = async () => {
    const artistId = this.props.match.params.id
    //here we are calling the built in props that are supplied by react, by react router dom
    await axios.delete(`/api/artists/${artistId}`)
    //and we are saying take the user input and wait on
    //the response and if that response is delete, redirect to the id of the artist
    this.props.history.push('/')
    //this is saying to push the response to the index page
  }


  render() {
    return (<Container>
      <Image src={this.state.artist.photo_url} alt=""/>
      <Header>{this.state.artist.name}</Header>
      <h4>Nationality: {this.state.artist.nationality}</h4>
      <Button negative onClick={this.deleteArtist}>Delete {this.state.artist.name}</Button>
      {/*created the delete button to delete the artist when it's clicked and then called the this.state
      so the button knows what to delete   */}
      <Divider/>
      <List>
        {
          this.state.songs.map(song => {
            return (
              <List.Item key={song.id}>
                {song.title}
                <audio controls src={song.preview_url}></audio>
              </List.Item>
            )
          })}
        </List>
      </Container>
    )
  }
}

//app is the parent so, allArtists are children, singleArtists are children and the NavBar is the child

export default SingleArtistView;
