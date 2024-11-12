const express = require('express');
const {trackDelivery, deliveryUpdate } = require('../controllers/orderController');
const { protect, customerProtect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id/track', protect, customerProtect, trackDelivery);
router.patch('/:id/update', protect, customerProtect, deliveryUpdate);

module.exports = router;
