
Rails.application.routes.draw do

  get '/consoles', to: 'consoles#index'
  get '/consoles/:id', to: 'consoles#show'
  post '/consoles', to: 'consoles#create'
  delete '/consoles/:id', to: 'consoles#delete'
  put '/consoles/:id', to: 'consoles#update'

  get '/games', to: 'games#index'
  get '/games/:id', to: 'games#show'
  post '/games', to: 'games#create'
  delete '/games/:id', to: 'games#delete'
  put '/games/:id', to: 'games#update'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'

end
