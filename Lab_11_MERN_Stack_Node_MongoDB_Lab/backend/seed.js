const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
  .then(async () => {
    console.log("Connected! Adding products...");

    await Product.deleteMany(); // Clear old data

    await Product.insertMany([
      { name: "Nike Shoes", price: 5999, description: "Comfortable running shoes", image: "https://via.placeholder.com/150" },
      { name: "Samsung Phone", price: 49999, description: "Latest Android phone", image: "https://via.placeholder.com/150" },
      { name: "HP Laptop", price: 89999, description: "Fast and reliable laptop", image: "https://via.placeholder.com/150" },
      { name: "Cotton T-Shirt", price: 1200, description: "Soft summer wear", image: "https://via.placeholder.com/150" },
    ]);

    console.log("✅ Products added!");
    process.exit();
  });