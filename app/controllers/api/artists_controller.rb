class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render json: {
      artists:  @artists
    }
  end
#writing it this way, this is making it an OBJECT of arrays
  def show
    @artist = Artist.find(params[:id])
    @songs = Artist.find(params[:id])
    # by doing this and calling the artist and the songs, we are able to call on both of them with res.data in
    # our component, instead of having to make multiple component pages
    render json: {
      artist: @artist
      song: @songs
      # this is where are are rendering the json objects from the API
    }
  end

  def create
    @artist = Artist.create(artist_params)
    render json: {
      artist: @artist
    }
  end
  #this will be our POST route! beacuse we are creating!!! POST CREATES!
  def update
    @artist = Artist.find(params[:id])
    @artist.update!(artist_params)

    render json: {
      artist: @artist
    }
  end

  def destroy
    Artist.find(params[:id]).destroy

    render json: {
      message: "Artist successfully destroyed"
    }
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :photo_url, :nationality)
  end
end
#this is needed to be able to create a new artist. All the info needs to match up,
#this makes a hard code of params that allow you to control what is going to be sent to the users
