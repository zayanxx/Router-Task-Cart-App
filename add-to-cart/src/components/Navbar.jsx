import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaShopify } from 'react-icons/fa';

const Navbar = ({ setSearchTerm, cartCount }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(search);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-10">
      <div className="text-xl font-mono flex">Shop <FaShopify className='ml-2 mt-1' /></div>
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          value={search} 
          onChange={handleSearchChange} 
          placeholder="Search products" 
          className="p-2 rounded" 
        />
        <FaSearch onClick={handleSearchClick} className="cursor-pointer" />
        <Link to="/cart" className="relative">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-md w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
