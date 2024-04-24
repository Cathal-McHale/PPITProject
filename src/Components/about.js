// src/About.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from './footer';




function About() {
  return (
    <Container fluid className="p-5">
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <h1 className="text-center mb-4">About Us</h1>
          <p className="text-justify">
            Welcome to MockCommerce, your ultimate destination for all things trendy and stylish! At MockCommerce, we're passionate about providing you with an unparalleled shopping experience where you can discover the latest and most popular products in the market.

            Our platform offers a diverse range of products curated to suit every style and preference. Whether you're searching for fashion-forward clothing, cutting-edge electronics, or trendy home decor, we've got you covered.          </p>
          <p className="text-justify">
            With our user-friendly interface, you can easily browse through our extensive collection, add items to your cart, and securely checkout with just a few clicks. Our seamless shopping experience ensures that you can shop with confidence and convenience.          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={4} className="mb-4">
          <Image src="https://static.vecteezy.com/system/resources/thumbnails/012/731/827/small/mc-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg" roundedCircle fluid />
        </Col>
        <Col md={4} className="mb-4">
          <h2>Our Mission</h2>
          <p>
            At MockCommerce, our mission is to revolutionize the online shopping experience by providing a platform that inspires, delights, and empowers our customers.

            1. Curate Unparalleled Selections: We are committed to offering a carefully curated selection of products that reflect the latest trends and innovations in fashion, technology, and lifestyle. From trendy apparel to cutting-edge gadgets, we strive to cater to every style and preference.<br></br><br></br>

            2. Foster Community Engagement: We believe in the power of community and aim to foster meaningful connections between our customers. Through engaging content, interactive features, and user-generated reviews, we create a vibrant community where shoppers can share their passion for style and discovery.

            <br></br><br></br>3. Deliver Exceptional Service: Customer satisfaction is at the heart of everything we do. We are dedicated to providing an exceptional shopping experience characterized by seamless navigation, secure transactions, and prompt customer support. Our goal is to exceed your expectations at every step of your shopping journey.          </p>
        </Col>
        <Col md={4}>
          <h2>Our Vision</h2>
          <p>
          At MockCommerce, we envision a future where shopping transcends boundaries and becomes a seamless and enriching experience for all. Our vision is to be the foremost destination for trendsetters, innovators, and style enthusiasts seeking inspiration, discovery, and connection in the digital age.

          <br></br><br></br>1. Empower Personal Expression: We believe in the power of style as a form of self-expression and empowerment. Our vision is to empower individuals to express their unique identities and creativity through curated collections of fashion-forward products that reflect their personal tastes and preferences.

          <br></br><br></br>2. Cultivate Innovation: Innovation is at the core of everything we do. We envision a platform that fosters creativity, celebrates diversity, and nurtures innovation by providing a space for emerging brands, independent designers, and aspiring entrepreneurs to thrive and connect with a global audience.          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
