class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render json: {
      artists:  @artists
    }  #writing it this way, this is making it an OBJECT of arrays
  end


  #this will be our POST route! beacuse we are creating!!! POST CREATES!

  def show
    @artist = Artist.find(params[:id])

    render json: {
    artist:  @artist
      }
  end

  def create
    @artist = Artist.create(artist_params)
      render json: {
      artists: @artist
      }
  end

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
      message: 'Artist destroyed!'
    }
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :photo_url, :nationality)
  end
  #this is needed to be able to create a new artist. All the info needs to match up,
  #this makes a hard code of params that allow you to control what is going to be sent to the users
end
