const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    // Sample users
    { id: 1, name: 'Ayush', coins: 100 }
  ]);
});

module.exports = router;