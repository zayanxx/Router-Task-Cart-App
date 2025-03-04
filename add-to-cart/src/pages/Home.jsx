// src/pages/Home.js

import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="pt-20">
        <h2 className="text-xl font-semibold text-center">Available Products</h2>
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Home;
