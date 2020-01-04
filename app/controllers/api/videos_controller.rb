class Api::VideosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_video, only: [:update, :destroy, :show]

  def index
    render json: Video.all
  end

  def show
    render json: @video
  end

  def create
    video = current_user.videos.new(video_params)
    if video.save
      render json: video
    else
      render json: video.errors, status: 422
    end
  end

  def update
    
    if current_user.videos.update(video_params)
      render json: @video
    else
      render json: video.errors, status: 422
    end
  end

  def destroy
    current_user.videos.destroy
  end

  private 

  def video_params
    params.require(:video).permit(:title, :duration, :genre, :description, :trailer)
  end

  def set_video
    @video = Video.find(params[:id])
  end
end
