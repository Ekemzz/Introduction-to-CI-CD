// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


