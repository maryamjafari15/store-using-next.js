"use client";

import { useShoppingCartContext } from "../context/ShoppingCartContext";

interface IAddToCartProps {
  id : string
}

function AddToCart( {id} : IAddToCartProps) {
  const { cartItem, handleIncreaseProductQyt , getProductQty, handleDecreaseProductQty} = useShoppingCartContext();

  return (
    <div className='flex items-center space-x-4'>
      <div className='flex items-center border rounded-full px-3 py-2'>
        <button
          onClick={()=>handleDecreaseProductQty(parseInt(id))}
          className='text-xl font-bold px-2 text-gray-700 hover:text-red-500'
        >
          −
        </button>
        <span className='px-3 font-medium'> {getProductQty(parseInt(id))} </span>
        <button
          onClick={()=>handleIncreaseProductQyt(parseInt(id))}
          className='text-xl font-bold px-2 text-gray-700 hover:text-green-600'
        >
          +
        </button>
      </div>
      <button
        
        className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition'
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCart;
