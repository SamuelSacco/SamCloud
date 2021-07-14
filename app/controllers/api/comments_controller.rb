class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render json: {}
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :song_id, :body)
  end

end