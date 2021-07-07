class Api::SongsController < ApplicationController
  before_action :set_song, only: [:show, :destroy]

  def index
    @songs = Song.all
  end

  def show
  end
  
  def create
    @song = Song.new(song_params)

    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song.destroy
  end

  private
  def set_song
    @song = Song.find(params[:id])
  rescue
    render json: ['Song not found'], status: :not_found
  end

  def song_params
    params.require(:song).permit(:title, :artist_id, :description)
  end
end