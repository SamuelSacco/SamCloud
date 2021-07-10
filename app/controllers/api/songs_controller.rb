class Api::SongsController < ApplicationController
  before_action :set_song, only: [:show, :destroy]

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end
  
  def create
    puts "Creating Song"
    @song = Song.new(song_params)
    puts "After create"

    if @song.save
      puts "success save"
      render :show
    else
      puts "error"
      render json: @song.errors.full_messages, status: 422
    end
  end

  # def create
  #   debugger
  #   @song = Song.new(song_params)
  #   if @song.save
  #     render :json {message: "New song created"}
  #   else
  #     render json: @song.errors.full_messages, status: 422
  #   end
  # end

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
    params.require(:song).permit(:title, :artist_id, :description, :audio)
  end
end