import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import axios from 'axios'; // Import Axios

// Example static data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for Product 1.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for Product 2.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '#'
  },
  // Add more products as needed
];

function Trending() {
  const [results, setResults] = useState([]);

  // Function to handle eBay search
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=CathalMc-PPITProj-SBX-921dfce92-3dfa19c2&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${query}`);
      setResults(response.data.findItemsByKeywordsResponse[0].searchResult[0].item);
    } catch (error) {
      console.error('Error fetching eBay search results:', error);
    }
  };

  return (
    <Container>
      <div className="searchbar-container">
        {/* Pass setResults function to SearchBar component */}
        <SearchBar setResults={setResults} />
        {/* Pass results to SearchResultsList component */}
        <SearchResultsList results={results} />
      </div>
      <h1 className="mt-5">Trending Products</h1>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary" href={product.link}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Trending;
