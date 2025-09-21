const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    // Sample orders
    { orderId: 1, userId: 1, items: [{ productId: 1, quantity: 2 }], status: 'Delivered' }
  ]);
});

module.exports = router;