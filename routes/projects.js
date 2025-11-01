const express = require('express');
const router = express.Router();

// Lấy danh sách dự án
router.get('/', (req, res) => {
  res.send('Danh sách dự án');
});

// Thêm dự án mới
router.post('/', (req, res) => {
  const project = req.body;
  // Logic thêm dự án vào cơ sở dữ liệu
  res.send('Dự án đã được thêm');
});

module.exports = router;