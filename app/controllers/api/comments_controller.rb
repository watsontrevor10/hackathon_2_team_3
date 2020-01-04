class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_controller, only: [:show, :update, :edit, :destroy]

  def index
    @comments = Comment.all
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
    if current_user.@comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    current_user.@comment.destroy
  end

  private 

  def set_comment
      @comment = comment.find(params[:id])
    end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
