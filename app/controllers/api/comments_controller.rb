class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [:update, :edit, :destroy]

  def index
    render json: Comment.all
  end

  def create
    comment = Comment.new(comment_params)
    
    if comment.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if current_user.comments.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    current_user.comments.destroy
  end

  private 

  def set_comment
      @comment = Comment.find(params[:id])
    end

  def comment_params
    params.require(:comment).permit(:body, :user_id)
  end
end
