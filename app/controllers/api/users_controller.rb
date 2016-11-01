class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      @errors = @user.errors
      render '/api/errors', status: 400
    end
  end
end
