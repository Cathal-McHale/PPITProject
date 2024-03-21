const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(express.json());

// Simulated user database
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' }
];

// POST request handler for signing in
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Simulated authentication logic
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // If authentication is successful, send a success response
      res.status(200).json({ message: 'Sign in successful', user });
    } else {
      // If authentication fails, send an error response
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    // If an error occurs during authentication, send a server error response
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET request handler for eBay search
app.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get(`https://svcs.ebay.com/services/search/FindingService/v1`, {
      params: {
        'OPERATION-NAME': 'findItemsByKeywords',
        'SERVICE-VERSION': '1.0.0',
        'SECURITY-APPNAME': 'CathalMc-PPITProj-SBX-921dfce92-3dfa19c2',
        'GLOBAL-ID': 'EBAY-US',
        'RESPONSE-DATA-FORMAT': 'JSON',
        'REST-PAYLOAD': true,
        keywords: query, // Ensure that the query parameter is passed correctly
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching eBay search results:', error);
    res.status(500).json({ error: 'Failed to fetch eBay search results' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
