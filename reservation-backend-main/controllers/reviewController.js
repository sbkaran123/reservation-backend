const Review = require('../models/Review');

// Create a review for a restaurant
const createReview = async (req, res) => {
  const { restaurant, rating, comment, images } = req.body;

  try {
    const review = await Review.create({
      user: req.user.id,
      restaurant,
      rating,
      comment,
      images,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get reviews for a restaurant
const getRestaurantReviews = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const reviews = await Review.find({ restaurant: restaurantId }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createReview, getRestaurantReviews };
