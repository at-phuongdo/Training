class PeopleController < ApplicationController
  before_action :set_person, only: %i[update destroy]
  before_action :find_person_by_name, only: %i[show]
  before_action :update_params, only: :update
  def index
    @people = Person.all.order(id: :desc)
    render json: @people
  end

  def create
    new_person = Person.create(people_params)
    Person.create_people_url(new_person)
  end

  def show
    render json: @person
  end

  def update
    @person.update(update_params)
    Person.create_people_url(@person)
  end

  def destroy
    @person.destroy
  end

  private

  def set_person
    @person = Person.find(params[:id])
  end

  def find_person_by_name
    @person = Person.find_by(url: params[:id])
  end

  def people_params
    params.require(:person).permit(:name, :birthday, :score)
  end

  def update_params
    params.require(:person).permit(:id, :name, :birthday, :score)
  end
end
