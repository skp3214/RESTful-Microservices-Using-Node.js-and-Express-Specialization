const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  unitsAvailable: {
    type: Number,
    required: true,
    default: 0
  },
  tags: {
    type: [String],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  updatedOn: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
