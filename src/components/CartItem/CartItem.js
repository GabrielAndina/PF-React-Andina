import React from 'react';
import './CartItem.css'
const CartItem = ({ id, name, quantity, price, onRemove }) => {
  return (
    <div className="cart-item">
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
      <button onClick={() => onRemove(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
