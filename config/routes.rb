Rails.application.routes.draw do
  root 'pins#index'

  get '/pins', to: 'pins#index'
  post '/pins', to: 'pins#create'
end
