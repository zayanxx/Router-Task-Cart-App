import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
        <div>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
        <button 
          onClick={() => removeFromCart(item)} 
          className="bg-red-500 text-white py-1 px-2 rounded cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
