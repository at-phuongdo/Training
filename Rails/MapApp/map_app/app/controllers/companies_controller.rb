require 'rubygems'
require 'geokit'
# #
class CompaniesController < ApplicationController
  def index
    @addresses = []
    company = Company.all
    company.each  do |company|
      @addresses.push(company.addresses)
    end

    if request.xhr?
      render json: {
        addresses: @addresses
      }
    end
  end
  def show
    @company = Company.find(params[:id])
    # Address.create_add(@company)
    if request.xhr?
      render json: {
        addresses: @company.addresses
      }
    end
  end
end
