class Address < ApplicationRecord
  belongs_to :company
  geocoded_by :address
  # after_validation :geocode, if: :address_changed?
  include Geokit::Geocoders
  def self.create_add(company)
    res = MultiGeocoder.geocode(company.address)
    Address.create(latitude: res.lat, longitude: res.lng, company_id: company.id)
  end
end
