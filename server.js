const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my server spike for Elastic Beanstalk!");
});

app.listen(port, () => console.log(`Server listening on ${port}`));
