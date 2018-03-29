import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Card, Image} from 'semantic-ui-react'
import styled from 'styled-components'


const FlexCards = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: baseline;
  align-content:flex-start;
`

class ArtistListView extends Component {
  state = {

    artists: [],
    artistFormOpen: false
    //this is creating a toggle for our butoon to toggle the state switch
  }
  // we need state here because we are calling to our database to get the list of artist from api

  componentDidMount() {
    // initiate API call to rails
    this.fetchArtists();
    //when successful, update the state
  }
  getAllArtists = async () => {
    const res = await axios.get('/api/artists')
    this.setState({artists: response.data.artists})
  }
  toggleNewArtistForm = () => {
    this.setState({artistsFormOpen: !this.state.artistFormOpen})
  }

  handleChange = (event) => {
    const newArtist = {...this.state.newArtist}
    const attribute = event.target.name
    //if I wanted to call the nationality i would call event.target.nationallity 
    // this event.target.name is what is going to tell us what we are updating in our input
    // if we look at th handle change it's being calling in 3 different areas, the way it does that is the name="name inside the formm we are keeping the namespaceon what we want
    // object to loo like. so each time we input new input, this attribute sees every "name" in the form and updates based on what is touched.

    });"
    newArtist [attribute ] = event.target.value

    this.setState({newArtist: newArtist })
  }


  createNewArtist = async () => {
    e.preventDefault()
    //this is to prevent an event default
    //we are going to the newArtist data from state and we need to make a new post request
    const res = await axios.post('/api/artist', this.state.newArtist)
    //since we made an axios request we have to pass in the state to the new artist
    //then we need to call on the artists
    this.getAllArtists()
  }
  //above is just async & await
  //here we are making a function to call on when we want to call on this anywhere throughout the App
  //via the axios call - we are basically bringing this into it's own method that is encapsulating it in
  //it's own little space that we can call on over and over and over again
  //we will be using async await instead of a promise, anytime we are making a call to a database we use async await
  //and make and axios request
  //before this axios.get say await and make it equal to res -> the response. So hold everything until this response
  //is
  //to test before you move on do a
  //const response = await axios.get('/api/artists') and console.log()
  //then we need to set the response to the state
  //this.setState({artists: response.data.artists })
  //we are calling on all the artists NOTE: artists: can be called anything you want, but we are saying what
  //within our state we want to apply the data to, we want the response of the data for all the artists

  // fetchArtists = async () => {
  //   try {
  //     const res = await axios.get('/api/artists');
  //     await this.setState({artists: res.data});
  //     return res.data;
  //   } catch (err) {
  //     console.log(err)
  //     await this.setState({error: err.message})
  //     return err.message
  //   }
  //
  // }
  // this is async and await with a try catch!
  //
  //
  //ideally if something is going on and there is an error we want to wrap it in a try catch
  //this is saying hey try and ake this code work, but if something fails and I get a rejection to my promist
  //and assign it to my err, that way we can console.log our error and see exactly where the problem lies

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>
    }
    return (<div>
      <h1>All Artists</h1>
      <Button primary Onclick={this.toggleNewArtistForm}>
        Create New Form
      </Button>

      {/* //we haven;t told the handle change anything to do so in this form, we are telling it to handle the handleChange
      this is allow our form to be written in */}
      <Link to ='/artists/new' />
      <FlexCards>
        {
          this.state.artists.map(artist => {
            //we are now calling on the state array and asking it to map through this,
            //the first time it renders on mount, it will return a blank screen, but then
            //once we set this state here, and use an asyncronis call to update this state
            //to render this return of all the artists
            return (
              <Card key={artist.id}>
                <Link to={`/artist/${artist.id}`}>
                  <Image src={artist.photo_url}/>
                  <Card.Content>
                    <Card.Header>{artist.name}</Card.Header>
                    <Card.Meta>{artist.nationality}</Card.Meta>
                  </Card.Content>
                </Link>
              </Card>
            )
           })}
      </FlexCards>
    </div>)
  }
}

export default ArtistListView;
