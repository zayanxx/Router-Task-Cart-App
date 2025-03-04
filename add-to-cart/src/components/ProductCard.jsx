import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="border p-4 rounded-lg shadow-xl">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      {isInCart ? (
        <button 
          onClick={() => removeFromCart(product)} 
          className="bg-red-500 text-white py-2 px-4 rounded mt-2 cursor-pointer"
        >
          Remove from Cart
        </button>
      ) : (
        <button 
          onClick={() => addToCart(product)} 
          className="bg-green-500 text-white py-2 px-4 rounded mt-2 cursor-pointer"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
