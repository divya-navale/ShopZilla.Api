const express = require('express');
const { addProduct, getSellerProducts, removeProduct, manageInventory } = require('../controllers/sellerController');
const { protect, sellerProtect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/product', protect, sellerProtect, addProduct);

router.get('/products', protect, sellerProtect, getSellerProducts);

router.post('/product', protect, sellerProtect, removeProduct);

router.post('/manage', protect, sellerProtect, manageInventory);

module.exports = router;
