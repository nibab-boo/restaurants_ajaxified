if @review.persisted?
  json.form json.partial!('reviews/form.html.erb', restaurant: @restaurant, review: Review.new)
  json.inserted_item json.partial!('restaurants/review.html.erb', review: @review)
  json.number_of_reviews json.partial!('restaurants/review_counter.html.erb', counter: @restaurant.reviews.size)
  # json.number_of_reviews @restaurant.reviews.size
  # json.first_comment json.partial!('restaurants/first_comment.html.erb', restaurant: @restaurant)
else
  json.form json.partial!('reviews/form.html.erb', restaurant: @restaurant, review: @review)
end
