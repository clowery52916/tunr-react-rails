import React, {Component} from 'react';
import axios from 'axios';

class SingleArtistView extends Component {
  state = {
    artist: {},
    songs: []
  }
  //creating a default state for our single artists
}

componentDidMount() {
  this.getSingleArtist()
  //we are making an api call so we need to do a componentDidMount
  //props are just passing information down, props dont have to be state, could be info from api!

}

getSingleArtist = async () => {
  const artistId = this.props.match.params.id
  //here are are calling on the built in props that are supplied by the react ruter dom
  const res = await axios.get(`/api/artist/${artistId}`)
  //and here we are getting the response from the us calling on the props we were calling on
  console.log(res.data)
  this.setState(
    artist: res.data.artist,
    songs: res.data.songsRes
  //here we are setting the new state here to make get all the info from the artist and all of the artist
  //songs
)}  catch (error) {
    console.log(error)
    await this.setState({error: error.message})
    //this is just the error message we want to use if something doesnt work out

render() {
  return (<div>
    <img src={this.state.artist.photo_url} alt=""/>
    <h1>{this.state.artist.name}</h1>
    {
      this.state.songs.map(song => (<div key={song.id}>
        <h4>{song.title}</h4>
        <audio controls="controls" src={song.preview_url}></audio>
      </div>))
    }
  </div>);
}
//
//app is the parent so, allArtists are children, singleArtists are childre and the NavBar is the children

export default Artist;
