const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {type: Int16Array, required: true},
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Product', productSchema);
