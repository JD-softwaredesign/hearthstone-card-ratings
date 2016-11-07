class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id
    @rating.save
    render json: { rating: @rating[:rating] }
  end

  def update
    @rating = Rating.find_by(user_id: current_user.id, card_id: params[:id])
    @rating.rating = params[:rating]
    @rating.save
    render json: { rating: @rating[:rating] }
  end

  private

  def rating_params
    params.require(:rating).permit(:rating, :card_id)
  end
end
