const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB (your local database)
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch(err => console.log("❌ Error:", err));

// Routes
app.use('/api/products', productRoutes);

// Home route
app.get('/', (req, res) => {
  res.send("Ecommerce Backend is Running!");
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});