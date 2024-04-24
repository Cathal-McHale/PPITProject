import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Cart = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(storedCart || []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (isLoggedIn) {
      // Clear the cart if the user is logged in
      setCart([]);
      localStorage.removeItem('cart');
      // Redirect to checkout page using navigate
      navigate('/cart/checkout');
    } else {
      // Redirect to login page if the user is not logged in
      alert('Please login to proceed with checkout.');
      // Redirect to login page
      navigate('/signin');
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="mt-5">Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h2 className="mt-5">Your Cart</h2>
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
      <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
      <div className="checkout-button-container">
        {/*  render the checkout button based on login status */}
        <Button className="checkout-button" onClick={handleCheckout} disabled={!isLoggedIn}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;