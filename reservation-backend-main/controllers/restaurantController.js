const Restaurant = require('../models/Restaurant');

// Get all restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new restaurant
const createRestaurant = async (req, res) => {
  const { name, location, cuisine, priceRange, availability } = req.body;

  try {
    const restaurant = await Restaurant.create({
      name,
      location,
      cuisine,
      priceRange,
      availability,
    });

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getRestaurants, createRestaurant };
