'use client';
import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(2);
  const price = 120;
  const total = price * quantity;

  return (
  <div className='flex items-center justify-between border-b py-4'>
  
    <div className='flex items-center gap-4'>
      <img
        
        alt='Analog Magazine Rack'
        width={60}
        height={60}
        className='rounded object-cover'
      />
      <div>
        <p className='font-medium'>Analog Magazine Rack</p>
        <p className='text-sm text-gray-500'>Red</p>
      </div>
    </div>

    <div className='text-gray-700'>${price}</div>

    <div className='flex items-center border rounded px-2 py-1'>
      <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
        <Minus size={16} className='text-gray-600' />
      </button>
      <span className='mx-2 w-6 text-center'>{quantity}</span>
      <button onClick={() => setQuantity((q) => q + 1)}>
        <Plus size={16} className='text-gray-600' />
      </button>
    </div>

    <div className='font-semibold text-gray-800'>${total}</div>

    <button className='text-gray-400 hover:text-red-500 transition'>
      <X size={18} />
    </button>
  </div>
  )
}

export default CartItem;
