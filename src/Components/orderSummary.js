import React from 'react';
import './orderSummary.css';

const OrderSummary = ({ location }) => {
  // Check if location or location.state is undefined
  if (!location || !location.state || !location.state.cart || !location.state.totalPrice) {
    return <div>Loading...</div>; // Or some other fallback UI
  }

  // Destructure cart and totalPrice from location.state
  const { cart, totalPrice } = location.state;

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default OrderSummary;
