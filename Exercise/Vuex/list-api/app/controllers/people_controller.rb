class PeopleController < ApplicationController
  before_action :set_person, only: %i[update destroy]
  before_action :update_params, only: :update
  def index
    @people = Person.all.order(id: :desc)
    render json: @people
  end

  def create
    Person.create(people_params)
  end

  def update
    @person.update(update_params)
  end

  def destroy
    @person.destroy
  end

  def set_person
    @person = Person.find(params[:id])
  end

  private

  def people_params
    params.require(:person).permit(:name, :birthday, :score)
  end

  def update_params
    params.require(:person).permit(:id, :name, :birthday, :score)
  end
end
