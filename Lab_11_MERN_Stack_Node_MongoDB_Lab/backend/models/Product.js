const mongoose = require('mongoose');

// This defines what a "product" looks like in the database
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;