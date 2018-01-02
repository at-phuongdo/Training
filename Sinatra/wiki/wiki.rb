require 'sinatra'

get('/') do
  erb :welcome
end

def page_content(title)
  File.read("pages/#{title}.txt")
rescue Errno::ENOENT
  return nil
end
