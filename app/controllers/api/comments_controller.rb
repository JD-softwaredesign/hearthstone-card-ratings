class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      @errors = @comment.errors
      render './errors', status: 400
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render :show
    else
      @errors = { comment: ['not found'] }
      render './errors', status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :card_id, :comment)
  end
end
