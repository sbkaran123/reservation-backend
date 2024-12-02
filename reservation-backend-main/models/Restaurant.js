const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    priceRange: { type: String, required: true },
    availability: [{ date: String, times: [String] }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Restaurant', restaurantSchema);
