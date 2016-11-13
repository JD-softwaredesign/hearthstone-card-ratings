class Api::RatingsController < ApplicationController
  def rate
    @rating = Rating.find_or_create_by(user_id: params[:user_id], card_id: params[:card_id])
    @rating.rating = params[:rating]
    @rating.save
    render json: { params[:card_id] => @rating[:rating] }
  end
end
