#📡 GPA Calculator Microservice
Hosted on Render free tier so response may take 30 seconds for server to load.
#📝 Communication Contract

#✅ How to Programmatically REQUEST Data
Method
POST
#Endpoint
https://gpa-microservice.onrender.com/gpa"
#Header:
Content-Type: application/json
#Body Format
JSON array of course objects each with: credits (number), grade (string, eg "A", "B+", "C-")

#Example Request (JavaScript)

<pre>
```js
fetch("http://gpa-microservice.onrender.com/gpa", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify([
    { credits: 3, grade: "A" },
    { credits: 4, grade: "B+" },
    { credits: 2, grade: "C" }
  ])
});
```
</pre>

#✅ How to Programmatically Receive Data
The microservice responds with a JSON object containing the calculated GPA as a string rounded to two decimal places.

##Example Responses

<pre>
```js
{
  "gpa": "3.24"
}
```
</pre>

##Example Response Handling (JavaScript)

<pre>
```js
const response = await fetch("http://gpa-microservice.onrender.com/gpa", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify([
    { credits: 3, grade: "A" },
    { credits: 4, grade: "B+" },
    { credits: 2, grade: "C" }
  ])
});

const result = await response.json();
console.log("GPA:", result.gpa); // Outputs: "3.24"
```
</pre>
