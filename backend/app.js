const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example routes
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/coins', require('./routes/coins'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/offers', require('./routes/offers'));
app.use('/api/avatar', require('./routes/avatar'));

app.get('/', (req, res) => res.send('Meesho Backend Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));