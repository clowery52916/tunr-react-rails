mport React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArtistList extends Component {
    state = {

            artists: [
            ]
        }
    // we need state here because we are calling to our database to get the list of artist from api

    componentWillMount(){
        // initiate API call to rails
        this.fetchArtists();
        //when successful, update the state
    }
    getAllArtists = async () => {
    const res = await axios.get('/api/artists')
    this.setState({artists: response.data.artists})
    }
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
    fetchArtists = async () => {
        try {
            const res = await axios.get('/api/artists');
            await this.setState({artists: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }

    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Artists</h1>
                {this.state.artists.map(artist => (
                  //we are now calling on the state array and asking it to map through this,
                  //the first time it renders on mount, it will return a blank screen, but then
                  //once we set this state here, and use an asyncronis call to update this state
                  //to render this return of all the artists
                    <div key={artist.id}>
                      {/* this is how  */}
                        <Link to={`/artist/${artist.id}`} >{artist.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArtistList;
