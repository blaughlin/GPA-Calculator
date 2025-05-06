const express = require('express');
const app = express();

app.use(express.json());



app.post('/gpa', (req, res) => {
    let totalPoints = 0;
    let totalCredits = 0;
    const gradePoints = {
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D": 1.0,
  "F": 0.0
}
  for (const { credits, grade } of req.body) {
    if (!credits || !grade) {
      return res.status(400).send({ error: 'Missing credits or grade' });
    }

    if (typeof credits !== 'number' || !gradePoints[grade]) {
      return res.status(400).send({ error: 'Invalid credits or grade' });
    }

    totalPoints += credits * gradePoints[grade];
    totalCredits += credits;
  }

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  res.send({ gpa });
})

app.listen(3000);

// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });