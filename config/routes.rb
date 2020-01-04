Rails.application.routes.draw do
  namespace :api do
   resources :videos
  end

  namespace :api do
    resources :comments
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
end
