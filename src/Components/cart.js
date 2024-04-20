import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './cart.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Cart = () => {
  // Retrieve cart items from local storage
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(storedCart || []);

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Check if cart is empty or undefined
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="mt-5">Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  // Function to handle checkout
  const handleCheckout = async () => {
    if (cart.length === 0) {
      // Display an error message or prevent checkout if the cart is empty
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }
  
    // Calculate total price and prepare order data
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
    const orderData = {
      items: cart,
      totalPrice: totalPrice.toFixed(2),
      // userId: loggedInUserId,
    };
  
    try {
      // Placeholder logic for payment processing
      const paymentResponse = await axios.post('https://api.paymentservice.com/charge', {
        amount: totalPrice,
        currency: 'USD',
      });
  
      // If payment is successful, process the order
      if (paymentResponse.data.success) {
        // Call the backend to save the order in the database
        await axios.post('/api/orders', orderData);
  
        // Clear the cart after successful checkout
        setCart([]);
        localStorage.removeItem('cart');
  
        // Redirect to a success page or display a success message
        console.log('Order placed successfully!');
      } else {
        // If payment fails, display an error message or handle accordingly
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      // If an error occurs during payment processing or order saving
      // Handle the error appropriately (e.g., display an error message)
      console.error('Checkout error:', error.message);
      alert('An error occurred during checkout. Please try again later.');
    }
  };
  

  return (
    <div className="cart-container">
      <h2 className="mt-5">Your Cart</h2>
      {/* Display each item in the cart */}
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
          </div>
          <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      {/* Display total price */}
      <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
      {/* Checkout button */}
      <div className="checkout-button-container">
  <Button className="checkout-button">
  <Link to={{ pathname: '/cart/checkout', state: { cart: cart, totalPrice: totalPrice } }} style={{ color: 'inherit', textDecoration: 'none' }}>Checkout</Link>
  </Button>
</div>

    </div>
  );
};

export default Cart;
