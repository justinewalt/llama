Rails.application.routes.draw do
  get 'dashboard/index'

  devise_for :users
  root 'dashboard#index'

  resources :sales
  resources :inventories
  resources :tasks

end
