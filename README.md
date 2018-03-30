# README

added to package json
{
    "name": "tunr_react_rails",
    "engines": {
      "node": "9.9.0"
    },
    "version": "0.0.1",
    "scripts": {
      "build": "cd client && npm install && npm run build && cd ..",
      "deploy": "cp -a client/build/. public/",
      "postinstall": "npm run build && npm run deploy && echo 'Client built!'"
    }
  }
  REACT/RAILS SETUP


  rails new your_app_name --api -d postgresql


  cd your_app_name/

  **Create git repository**

  git remote add origin https://your URL
  git add -A
  git commit -m 'Initial commit'
  git push -u origin master


  ****inside your project folder****


  create-react-app client

  ***Creact package.json on root level in rails project***
  {
      "name": "your_app_name",
      "engines": {
        "node": "9.9.0"
      },
      "version": "0.0.1",
      "scripts": {
        "build": "cd client && npm install && npm run build && cd ..",
        "deploy": "cp -a client/build/. public/",
        "postinstall": "npm run build && npm run deploy && echo 'Client built!'"
      }
    }




  *****add and commit*****
  git add -A
  git commit -m 'Initialized rails and react client with json'
  git push


  ***In your terminal*****

  gem install foreman


  ***In root of folder***

  Make a file called     Procfile.dev


  put this inside:

  web: sh -c 'cd client && PORT=3000 npm start'
  api: rails s -p 3001

  **In terminal***

  foreman start -f Procfile.dev

  !!! React on local 3000 and Rails on 3001 - should be up and running - if you get an error, make sure you didn’t have something else running already!!!

  COMMIT


  BACK-END RUBY ON RAILS

rails g model Model1 name photo_url nationality


 rails g model Model2 name album preview_url artist:references

(insert your own column names as opposed to the ones in the examples above)

————————————————————————
** This link goes to the seed data example from the rails/react exercise**

https://gist.github.com/king0120/a465fe25558c63bcb6d2a8091da1cea4
————————————————————————
rails db:create

rails db:migrate

rails db:seed


Add has_many relationships to the appropriate models

EXAMPLE
# app/model/artist.rb

class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end

——————————————————————————
rails c

check for data —— EX.          Model1.all

COMMIT

—————————————————————————

CREATE API ROUTES

EXAMPLE
# config/routes.rb

Rails.application.routes.draw do
  namespace :api do
    resources :artists do
      resources :songs
    end
  end
end
——————
rails routes

Check your routes!

COMMIT

——————————————————————————
GENERATE CONTROLLERS

rails g controller api::model1


EXAMPLE

class Api::ArtistsController < ApplicationController
    def index
      @artists = Artist.all
      render json: @artists
    end
  end
**notice that you must use the render json:

EXAMPLE

class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render json: @artists
  end

  def create
    @artist = Artist.create!(artist_params)

    render json: @artist
  end

  def show
    @artist = Artist.find(params[:id])

    render json: @artist
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update!(artist_params)

    render json: @artist
  end

  def destroy
    @artist = Artist.find(params[:id]).delete

    render status: :ok
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :photo_url, :nationality)
  end
end

POSTMAN!!!!!!!!

localhost:3001/api/artists

…try it out….

HEROKU!!!!!!!!! 💩

heroku create YOUR_APP_NAME 

heroku buildpacks:add --index 1 heroku/ruby
heroku buildpacks:add --index 2 heroku/nodejs

#Procfile

web: rails s
———————————————————————

git push heroku master

heroku run rails db:migrate db:seed


*****No database error?
Run this:
heroku addons:create heroku-postgresql:hobby-dev
**********************

Moving on to REACT……..


EDIT Examples

import React, { Component } from "react";
import { Input, Form } from 'semantic-ui-react'

class EditArtistForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Input
            placeholder={this.props.artist.name}
            name="name"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.artist.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Nationality</label>
          <Input
            placeholder={this.props.artist.nationality}
            name="nationality"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.artist.nationality}
          />
        </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <Input
            placeholder={this.props.artist.photo_url}
            name="photo_url"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.artist.photo_url}
          />
        </Form.Field>
        <Form.Button color="green" type="submit">Edit Artist</Form.Button>
      </Form>
    );
  }
}

export default EditArtistForm;


1 CommentCollapse 
