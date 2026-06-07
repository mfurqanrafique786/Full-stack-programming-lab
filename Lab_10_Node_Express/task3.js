const express = require('express');
const app = express();

// Dynamic route - :name changes based on URL
app.get('/user/:name', (req, res) => {
  const name = req.params.name;

  res.send(`
    <html>
      <head><title>User Page</title></head>
      <body>
        <h1>👋 Hello, ${name}!</h1>
        <p>Welcome to your personal profile page.</p>
        <p>Your username is: <strong>${name}</strong></p>
        <br>
        <p>Try changing the name in the URL!</p>
        <p>Example: <a href="/user/Ahmed">/user/Ahmed</a></p>
        <p>Example: <a href="/user/Sara">/user/Sara</a></p>
      </body>
    </html>
  `);
});

// Start server
app.listen(3000, () => {
  console.log('✅ Task 3 Server Running!');
  console.log('👉 Open: http://localhost:3000/user/Ali');
  console.log('👉 Try:  http://localhost:3000/user/YourName');
});