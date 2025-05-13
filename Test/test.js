// test-gpa.js

const testData = [
  { credits: 3, grade: "A" },
  { credits: 4, grade: "B+" },
  { credits: 2, grade: "C" }
];

async function testGpaCalculator() {
  try {
    const response = await fetch("https://gpa-microservice.onrender.com/gpa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log("Test Result:", result);
  } catch (err) {
    console.error("Test failed:", err.message);
  }
}

testGpaCalculator();