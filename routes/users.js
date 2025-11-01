const express = require('express');
const router = express.Router();

// Lấy thông tin người dùng
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  // Logic lấy thông tin người dùng từ cơ sở dữ liệu
  res.send(`Thông tin người dùng: ${userId}`);
});

module.exports = router;