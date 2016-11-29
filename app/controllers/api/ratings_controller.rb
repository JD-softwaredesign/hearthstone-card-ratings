class Api::RatingsController < ApplicationController
  before_action :redirect_home_if_not_logged_in

  def rate
    @rating = Rating.find_or_create_by(user_id: current_user.id, card_id: params[:card_id])
    if @rating.card.released
      render json: 'This card is already released', status: 403
    else
      @rating.rating = params[:rating]
      @rating.save
      render json: { params[:card_id] => @rating[:rating] }
    end
  end
end
