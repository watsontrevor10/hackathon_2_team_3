Rails.application.routes.draw do
  namespace :api do
    get 'comments/index'
  end

  namespace :api do
    get 'comments/show'
  end

  namespace :api do
    get 'comments/create'
  end

  namespace :api do
    get 'comments/update'
  end

  namespace :api do
    get 'comments/destroy'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
end
