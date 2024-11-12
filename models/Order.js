const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
  deliveryDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
