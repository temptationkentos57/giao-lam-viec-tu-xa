const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Remote Work Platform! We are thrilled to have you here.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});