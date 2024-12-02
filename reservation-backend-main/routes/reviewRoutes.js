const express = require('express');
const router = express.Router();
const { createReview, getRestaurantReviews } = require('../controllers/reviewController');

router.post('/', createReview);
router.get('/:restaurantId', getRestaurantReviews);

module.exports = router;
