class Api::VideosController < ApplicationController

  def index
    
  end

  def show
    
  end

  def create

  end

  def update
    
  end

  def destroy
    
  end

  private 

  def video_params
    params.require(:video).permit(:title, :duration, :genre, :description, :trailer)
  end
end
