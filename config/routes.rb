Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :expansions, only: [:index, :show]
    resources :cards, only: [:show]
    resources :comments, only: [:index, :create, :destroy]
    post 'rating' => 'users#rate'
  end
end
