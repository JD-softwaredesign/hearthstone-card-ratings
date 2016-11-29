class Api::RatingsController < ApplicationController
  def rate
    @rating = Rating.find_or_create_by(user_id: params[:user_id], card_id: params[:card_id])
    if @rating.card.released
      render json: 'This card is already released', status: 403
    else
      @rating.rating = params[:rating]
      @rating.save
      render json: { params[:card_id] => @rating[:rating] }
    end
  end
end
