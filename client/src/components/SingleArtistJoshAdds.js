import React, {Component} from "react";
import axios from "axios";
import {
  Card,
  Image,
  Grid,
  List,
  Divider,
  Button
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import EditArtistForm from "./EditArtistForm";

class SingleArtistView extends Component {
  state = {
    artist: {},
    songs: [],
    showEditArtist: false
  };

  componentDidMount() {
    this.getSingleArtist();
  }

  getSingleArtist = async () => {
    const artistId = this.props.match.params.id;
    const res = await axios.get(`/api/artists/${artistId}`);
    this.setState({artist: res.data.artist, songs: res.data.songs});
    console.log(res.data);
  };

  deleteArtist = async () => {
    const artistId = this.props.match.params.id;
    await axios.delete(`/api/artists/${artistId}`);
    console.log(this.props.match.params.id);
    this.props.history.push("/");
  };

  toggleShowEdit = () => {
    this.setState({
      showEditArtist: !this.state.showEditArtist
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const artistId = this.state.artist.id;
    const artistUpdate = {
      ...this.state.artist
    };
    await axios.patch(`/api/artists/${artistId}`, artistUpdate);
    this.toggleShowEdit();
    await this.getSingleArtist();
  };

  handleChange = e => {
    const artist = e.target.name;
    const newArtist = {
      ...this.state.artist
    };
    newArtist[artist] = e.target.value;
    this.setState({artist: newArtist});
  };

  render() {
    return (<Grid centered="centered">
      <Divider/> {
        this.state.showEditArtist
          ? (<EditArtistForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} artist={this.state.artist}/>)
          : (<Card raised="raised">
            <Link to={`/artists/${this.state.artist.id}`}>
              <Image centered="centered" fluid="fluid">
                <img src={this.state.artist.photo_url} alt=""/>
              </Image>
            </Link>
            <Card.Header>{this.state.artist.name}</Card.Header>
            <Card.Content>{this.state.artist.nationality}</Card.Content>
            <Button negative="negative" onClick={this.deleteArtist}>
              Delete {this.state.artist.name}
            </Button>
            <Button primary="primary" onClick={this.toggleShowEdit}>
              Edit Artist
            </Button>
          </Card>)
      }

      <Divider/>

      <List>
        {
          this.state.songs.map(song => {
            return (<List.Item key={song.id}>
              {song.title}
              <audio controls="controls" src={song.preview_url}/>
            </List.Item>);
          })
        }
      </List>
    </Grid>);
  }
}

export default SingleArtistView;
