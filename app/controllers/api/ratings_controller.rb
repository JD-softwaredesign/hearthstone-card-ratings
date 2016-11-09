class Api::RatingsController < ApplicationController
  def rate
    @rating = Rating.find_or_create_by(user_id: current_user.id, card_id: params[:card_id])
    @rating.rating = params[:rating]
    @rating.save
    render json: { rating: @rating[:rating] }
  end
end
