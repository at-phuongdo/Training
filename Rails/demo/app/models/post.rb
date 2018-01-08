class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  scope :post, ->(user) { where(user_id: user.id) }
end
