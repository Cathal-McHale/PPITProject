const express = require('express');
const axios = require('axios');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Simulated user database
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' }
];

// POST request handler for signing in or signing up
app.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Log the received data in the server console
    console.log('Received data:', { email, password });

    // Simulated authentication logic
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // If authentication is successful, send a success response
      res.status(200).json({ message: 'Authentication successful', user });
    } else {
      // If authentication fails, send an error response
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    // If an error occurs during authentication, send a server error response
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/add-to-cart', (req, res) => {
  const itemData = req.body;
  console.log('Item added to cart:', itemData);
  // Process the item data as needed
  // Respond to the client
  res.send('Item added to cart successfully');
});

// POST request handler for receiving user data
app.post('/signin', (req, res) => {
  // Do something with the received user data
  console.log('Received login details:', req.body);
  res.send('Login details received successfully');
});

// POST request handler for receiving user data
app.post('/', (req, res) => {
  // Do something with the received user data
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
