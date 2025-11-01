const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Remote Work Platform! We are excited to have everyone join us.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});