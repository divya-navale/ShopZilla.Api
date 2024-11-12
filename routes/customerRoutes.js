const express = require('express');
const { viewProducts, searchProducts, filterProducts, trackOrder } = require('../controllers/customerController');
const { protect, customerProtect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/products/search', protect, customerProtect, searchProducts);
router.get('/products/filter', protect, customerProtect, filterProducts);
router.get('/orders/:orderId/track', protect, customerProtect, trackOrder);
router.get('/products/view', protect, customerProtect, viewProducts);

module.exports = router;
