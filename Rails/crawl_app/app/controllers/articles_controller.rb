class ArticlesController < ApplicationController
  def new
  end

  def create
  end

  def index
    @article = Article.all
  end
end
