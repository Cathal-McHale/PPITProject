import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
  const location = useLocation();
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
    window.location.href = '/'; // Redirect to home page
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
        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
        <div className="card-details">
          <input type="text" name="expiration" placeholder="Expiration (MM/YY)" value={formData.expiration} onChange={handleChange} required />
          <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
        </div>

        {/* Display products in the cart */}
        <h3>Products in Cart</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>

        {/* Display total price */}
        <p>Total Price: ${totalPrice.toFixed(2)}</p>

        {/* Fake payment button */}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
