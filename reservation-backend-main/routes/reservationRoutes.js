const express = require('express');
const router = express.Router();
const { createReservation, getUserReservations } = require('../controllers/reservationController');

router.post('/', createReservation);
router.get('/', getUserReservations);

module.exports = router;
