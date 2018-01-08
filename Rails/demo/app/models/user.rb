class User < ApplicationRecord
  has_many :posts
  has_and_belongs_to_many :forums
  has_one :profile
  scope :activated, -> { where activated: true }
end
