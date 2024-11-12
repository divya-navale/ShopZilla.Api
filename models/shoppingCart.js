const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }]
});

shoppingCartSchema.methods.calculateTotal = function() {
};

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
