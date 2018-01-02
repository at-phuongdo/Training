require 'sinatra'

set :bind, '0.0.0.0'
# co the ping va chay tren may khac
get '/apple' do
  'Here is a juice applec!'
end
