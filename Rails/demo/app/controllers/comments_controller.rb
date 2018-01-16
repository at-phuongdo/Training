class CommentsController < ApplicationController
  before_action :set_post, only: %i[create edit destroy]
  before_action :set_comment, only: %i[edit update destroy]
  def create
    @post = Post.find(params[:post_id])
    # Create associated model, just like we did in the console before
    @comment = @post.comments.create(comment_params)
    # We want to show the comment in the context of the Post
    redirect_to @post
  end

  def edit; end

  def update
    @comment.update(comment_params)
    redirect_to @post
  end

  def destroy
    @comment.destroy
    redirect_to @post
  end

  private

  def comment_params
    params.require(:comment).permit(:name, :content)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end
end
