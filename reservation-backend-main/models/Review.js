const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
