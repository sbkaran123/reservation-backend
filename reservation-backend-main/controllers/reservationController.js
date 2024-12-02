const Reservation = require('../models/Reservation');

// Create a new reservation
const createReservation = async (req, res) => {
  const { restaurant, date, time, partySize } = req.body;

  try {
    const reservation = await Reservation.create({
      user: req.user.id,
      restaurant,
      date,
      time,
      partySize,
    });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get reservations for a user
const getUserReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).populate('restaurant', 'name location');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createReservation, getUserReservations };
