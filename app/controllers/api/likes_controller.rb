class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render :index
  end

  def show
    @like = Like.find_by(like_params)
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      # render "api/songs/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(like_params)
    @like.destroy
    render json: {}
  end

  private
  def like_params
    params.require(:like).permit(:song_id, :liker_id)
  end

end