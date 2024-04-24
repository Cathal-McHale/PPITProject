import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const { cart = [], totalPrice = 0 } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your order has been placed successfully!');
    // Store cart and totalPrice data in state
    const orderData = { cart, totalPrice };
    // Pass orderData as props to OrderSummary component
   // navigate('/orderSummary', { state: orderData });
    navigate('/', { state: orderData });

  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Billing address section */}
        <h3>Billing Address</h3>
        {/* Input fields for billing address */}
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />

        {/* Payment section */}
        <h3>Payment</h3>
        {/* Input fields for payment details */}
        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} minLength={16} maxLength={16} required />
        <div className="card-details">
          <input type="text" name="expiration" placeholder="Expiration (MM/YYYY)" value={formData.expiration} onChange={handleChange} pattern="\d{2}/\d{4}" required />
          <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} minLength={3} maxLength={3} required />
        </div>

        {/* Display products in the cart */}
        <h3>Products in Cart</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title} - ${product.price}
            </li>
          ))}

        </ul>

        {/* Display total price */}
        <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>

        {/* Fake payment button */}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;