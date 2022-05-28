const express = require("express");
const { schools, terms, courses } = require("./data.js");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Madooei's Resume at JHU API!");
});

app.get("/api/schools", (req, res) => {
  res.json(schools);
});

app.get("/api/terms", (req, res) => {
  res.json(terms);
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});