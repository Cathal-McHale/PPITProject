const express = require('express');
const axios = require('axios');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
const port = 4000;
// Enable CORS for all routes
app.use(cors()); 
app.use(bodyParser.json());

// Simulated user database
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' }
];

// POST request handler for signing in
app.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Simulated authentication logic
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Set cookie if authentication is successful
      res.cookie('user', user.email, { maxAge: 900000, httpOnly: true }); // Cookie expires in 15 minutes
      res.status(200).json({ message: 'Authentication successful', user });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/checkout-container', (req, res) => {
  const itemData = req.body;
  console.log('Item added to cart:', itemData);
  // Process the item data as needed
  // Respond to the client
  res.send('Item added to cart successfully');
});

app.post('/add-to-cart', (req, res) => {
  const itemData = req.body;
  console.log('Item added to cart:', itemData);

  res.send('Item added to cart successfully');
});

// POST request handler for receiving user data
app.post('/signin', (req, res) => {
  // Confirmation with the received user data
  console.log('Received login details:', req.body);
  res.send('Login details received successfully');
});

// POST request handler for receiving user data
app.post('/', (req, res) => {
  // store the received user data
  console.log('Received user data:', req.body);
  res.send('User data received successfully');
});
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
