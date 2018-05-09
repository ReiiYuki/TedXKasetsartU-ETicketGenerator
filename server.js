const path = require("path");
const express = require("express");


const PORT = process.env.PORT || 1000;
const app = express();
app.use(express.static(path.join(__dirname, 'build'))); 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});