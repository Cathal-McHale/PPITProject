import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './cart.css';
import { Button } from 'react-bootstrap';

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
  const handleCheckout = () => {
    // Implement checkout logic if needed
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
