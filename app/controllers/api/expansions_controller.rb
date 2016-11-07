class Api::ExpansionsController < ApplicationController
  def index
    @expansions = Expansion.all
    @current = @expansions[@expansions.length - 1]
    render :index
  end

  def show
    @expansion = Expansion.find_by(id: params[:id])
    @cards = @expansion.cards
    render :show
  end
end
