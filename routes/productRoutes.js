const express = require('express');
const { getProducts, addProduct, updateProduct } = require('../controllers/productController');
const { protect, sellerProtect } = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/', getProducts);
router.post('/add', protect, sellerProtect, addProduct); // Only sellers can add
router.post('/update', protect, sellerProtect, updateProduct); // Only sellers can add

module.exports = router;
