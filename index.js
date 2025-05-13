const express = require('express');
const app = express();

app.use(express.json());

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

app.post('/gpa', (req, res) => {
    let totalPoints = 0;
    let totalCredits = 0;


  if (!Array.isArray(req.body)) {
    return res.status(400).send({ error: 'Expected an array of courses' });
  }
  for (const { credits, grade } of req.body) {
    if (!credits || !grade) {
      return res.status(400).send({ error: 'Missing credits or grade' });
    }

    if (typeof credits !== 'number' || !gradePoints[grade]) {
      return res.status(400).send({ error: `Invalid entry: ${grade} or ${credits}` });    }

    totalPoints += credits * gradePoints[grade];
    totalCredits += credits;
  }

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  res.send({ gpa });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`GPA microservice running on port ${PORT}`);
});
