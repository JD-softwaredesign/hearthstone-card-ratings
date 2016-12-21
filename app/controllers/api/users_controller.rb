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

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: 'User not found', status: 404
    end
  end

  def rate
    @user = User.find_by(id: current_user.id)
    @card = Card.find_by(id: params[:card_id])
    idx = params[:card_id].to_i - 1
    if @card.released
      render json: 'This card is already released', status: 403
    else
      if params[:rate_type] != 'rating'
        @user.arena_rating[idx] = params[:rating]
      else
        @user.rating[idx] = params[:rating]
      end
      @user.save!
      render json: { type: params[:rate_type], rating: params[:rating], card_id: params[:card_id] }
    end
  end
end
