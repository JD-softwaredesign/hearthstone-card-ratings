class Api::ExpansionsController < ApplicationController
  def index
    @expansions = Expansion.all
    render :index
  end

  def show
    @expansion = Expansion.find_by(id: params[:id])
    @cards = @expansion.cards
    render :show
  end
end
