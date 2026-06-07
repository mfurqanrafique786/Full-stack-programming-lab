const express = require('express');
const app = express();

// Student data stored in array
const students = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "Ahmed", age: 22 },
  { id: 3, name: "Sara", age: 21 },
  { id: 4, name: "Zara", age: 19 },
  { id: 5, name: "Usman", age: 23 }
];

// GET route - shows student list in browser
app.get('/students', (req, res) => {
  let html = `
    <html>
      <head><title>Student List</title></head>
      <body>
        <h1>📋 Student List</h1>
        <ul>
  `;

  students.forEach(student => {
    html += `<li>ID: ${student.id} — Name: ${student.name} — Age: ${student.age}</li>`;
  });

  html += `
        </ul>
      </body>
    </html>
  `;

  res.send(html);
});

// Start server
app.listen(3000, () => {
  console.log('✅ Task 1 Server Running!');
  console.log('👉 Open: http://localhost:3000/students');
});