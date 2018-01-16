class PostsController < ApplicationController
  before_action :set_post, only: %i[show destroy]
  def index
    @posts = Post.all
  end

  def show; end

  def edit; end

  def destroy
    @post.destroy
    redirect_to posts_path
  end

  def set_post
    @post = Post.find(params[:id])
  end
end
