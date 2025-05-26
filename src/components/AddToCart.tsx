"use client"
import React, { useState } from "react";

function AddToCart() {

    

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
   
    console.log(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="flex items-center space-x-4">
  
      <div className="flex items-center border rounded-full px-3 py-2">
        <button
          onClick={decrement}
          className="text-xl font-bold px-2 text-gray-700 hover:text-red-500"
        >
          −
        </button>
        <span className="px-3 font-medium">{quantity}</span>
        <button
          onClick={increment}
          className="text-xl font-bold px-2 text-gray-700 hover:text-green-600"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCart;
