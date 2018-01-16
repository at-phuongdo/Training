class CompaniesController < ApplicationController
  def show
    @company = Company.find(params[:id])
    if request.xhr?
      render json: {
        addresses: @company.addresses
      }
    end
  end
end
