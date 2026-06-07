const express = require('express');
const app = express();

// Home route
app.get('/home', (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>🏠 Home Page</h1>
        <p>Welcome Home! You are on the Home Page.</p>
        <a href="/about">Go to About</a> | 
        <a href="/contact">Go to Contact</a>
      </body>
    </html>
  `);
});

// About route
app.get('/about', (req, res) => {
  res.send(`
    <html>
      <head><title>About</title></head>
      <body>
        <h1>ℹ️ About Page</h1>
        <p>This is the About Page. We build amazing web apps!</p>
        <a href="/home">Go to Home</a> | 
        <a href="/contact">Go to Contact</a>
      </body>
    </html>
  `);
});

// Contact route
app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head><title>Contact</title></head>
      <body>
        <h1>📞 Contact Page</h1>
        <p>Reach us at: info@example.com</p>
        <a href="/home">Go to Home</a> | 
        <a href="/about">Go to About</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(3000, () => {
  console.log('✅ Task 2 Server Running!');
  console.log('👉 Open: http://localhost:3000/home');
  console.log('👉 Open: http://localhost:3000/about');
  console.log('👉 Open: http://localhost:3000/contact');
});