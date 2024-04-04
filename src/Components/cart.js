import React from 'react';

const Cart = ({ cart }) => {
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

  return (
    <div className="cart-container">
      <h2 className="mt-5">Your Cart</h2>
      {/* Display each item in the cart */}
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.title} />
          <p>{item.title} - ${item.price}</p>
        </div>
      ))}
      {/* Display total price */}
      <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
