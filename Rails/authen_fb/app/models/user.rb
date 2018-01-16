class User < ApplicationRecord
  def self.from_omniauth(auth)
    binding.pry
    where(auth.slice(:provider, :uid).to_h).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end
end
