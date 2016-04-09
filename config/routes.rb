Rails.application.routes.draw do
  get 'salesmen/index'

  root 'home#index'
end
