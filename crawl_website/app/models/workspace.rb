require 'open-uri'
class Workspace < ApplicationRecord
  def self.crawl_data
    doc = Nokogiri::HTML(open('https://www.coworker.com/search/vietnam/ho-chi-minh-city'))
    doc.css('div.search_title_text > a').each do |link|
      url = "https://www.coworker.com/vietnam/ho-chi-minh-city/" + link.text.parameterize
      page = Nokogiri::HTML(open(url))
      puts url
      ###### Description
      description =  page.at_css("p#p_description")
      ###### Address
      address =  page.css('.muchroom_mail').text
      ###### Avatar
      avatar = page.search('.banner_space_outr_mob').map { |n| n['style'][/url\((.+)\)/, 1].remove("'") }
      puts avatar
      ##### Images
      # puts page.search('.example-image').map { |n| n['style'][/url\((.+)\)/, 1].remove("'") }
      # puts page.search('.space-new-slider-pic-outer img').attr('src')
      Workspace.create(
        name: link.text,
        avatar: avatar,
        description: description,
        address: address,
        country: 'Viet Nam',
        city: 'Ho Chi Minh',
        friendly_url: link.text.parameterize
        )
    end
  end
end
