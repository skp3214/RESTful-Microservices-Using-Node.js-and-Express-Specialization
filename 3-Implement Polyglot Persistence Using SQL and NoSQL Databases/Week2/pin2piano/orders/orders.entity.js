const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  orderName: {
    type: String,
    required: true,
    default: ''
  },
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  unitsPlaced: {
    type: Number,
    required: true,
    default: 0
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
