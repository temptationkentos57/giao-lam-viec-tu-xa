const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Các route sẽ được định nghĩa ở đây

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đã chạy trên cổng ${PORT}`);
});