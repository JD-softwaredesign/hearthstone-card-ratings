class Api::RatingsController < ApplicationController
  # we can make this better with
  # store rating_id in session store
  # when user sends existing one,
  # use PUT, when user sends non-existing one,
  # user POST
  # to reduce User, Card querying
  # we can do that in the future : )
  def rate
    @rating = Rating.find_or_create_by(user_id: params[:user_id], card_id: params[:card_id])
    @rating.rating = params[:rating]
    @rating.save
    render json: { params[:card_id] => @rating[:rating] }
  end
end
