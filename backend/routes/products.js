const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    // Sample products
    { id: 1, name: 'Kurti', price: 499 },
    { id: 2, name: 'Saree', price: 999 }
  ]);
});

module.exports = router;