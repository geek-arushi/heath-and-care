const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  delPrice: {
    type: Number
  },
  proImg: {
    type: String,
    required: [true, 'Please add an image']
  },
  brand: {
    type: String
  },
  size: {
    type: String
  },
  stock: {
    type: String,
    enum: ['Stock in', 'Stock out'],
    default: 'Stock in'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);