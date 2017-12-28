# lib/helloword/rails.rb
require "helloword/rails/version"
require "helloword/rails/helloword_helper"

module ActionView
  module Helpers
    module AssetTagHelper
      include HellowordHelper
    end
  end
end