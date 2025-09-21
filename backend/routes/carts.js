const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    // Sample cart
    { userId: 1, items: [{ productId: 1, quantity: 2 }] }
  ]);
});

module.exports = router;