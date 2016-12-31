class Api::ExpansionsController < ApplicationController
  def index
    @expansions = Expansion.all
    @current = @expansions.last
    render :index
  end

  def show
    @expansion = Expansion.find_by(id: params[:id])
    @cards = @expansion.cards.order(average: :desc)
    render :show
  end
end
