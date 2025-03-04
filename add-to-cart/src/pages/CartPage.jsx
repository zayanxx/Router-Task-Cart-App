import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { MdHome } from "react-icons/md";


const CartPage = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div>
          <p className='mt-10 font-semibold'>Your cart is empty.</p>
          <Link to="/" className="flex items-center text-center text-white mt-4 bg-gray-600 p-2 rounded w-55 text-xl">
            
          <MdHome className='text-2xl mr-2'/> Go to Homepage

          </Link>
        </div>
      ) : (
        cart.map(item => <CartItem key={item.id} item={item} />)
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <p className="text-lg">Total Price: <span className="font-medium">${totalPrice.toFixed(2)}</span></p>
          <p className="text-lg font-semibold">Discounted Price: <span className="text-green-600 font-medium">${discountedPrice.toFixed(2)}</span></p>
          <Link to="/" className="flex items-center text-center text-white mt-4 bg-gray-600 p-2 rounded w-35">
            Go to Homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
