class Api::CardsController < ApplicationController
  def show
    @card = Card.find_by(id: params[:id])
    render :show
  end
end
