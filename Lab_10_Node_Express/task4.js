const express = require('express');
const app = express();

// Root route - returns full HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Express Website</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            background-color: #f4f4f4;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
          ul {
            background: white;
            padding: 20px;
            border-radius: 8px;
          }
          li {
            margin: 8px 0;
          }
        </style>
      </head>
      <body>
        <h1>🌐 Welcome to My Express Website</h1>

        <p>
          This is a simple HTML page built using 
          <strong>Node.js</strong> and <strong>Express.js</strong>.
          No database was used!
        </p>

        <h2>📌 Features of this App:</h2>
        <ul>
          <li>✅ Built with Express.js</li>
          <li>✅ Fast and lightweight</li>
          <li>✅ No database needed</li>
          <li>✅ Runs on Node.js</li>
          <li>✅ Output shown directly in browser</li>
        </ul>

        <h2>🔗 Other Pages:</h2>
        <ul>
          <li><a href="/">Home Page (Task 4)</a></li>
        </ul>
      </body>
    </html>
  `);
});

// Start server
app.listen(3000, () => {
  console.log('✅ Task 4 Server Running!');
  console.log('👉 Open: http://localhost:3000');
});