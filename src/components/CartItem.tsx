"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { IProductCardProps } from "./ProductCard";
import { useShoppingCartContext } from "../context/ShoppingCartContext";



interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
  const {  handleIncreaseProductQyt , getProductQty, handleDecreaseProductQty, handleRemoveProduct} = useShoppingCartContext();
  const [data, setData] = useState({} as IProductCardProps);

  useEffect(() => {
    axios(`http://localhost:4000/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <div className='flex items-center justify-between border-b py-4'>
      <div className='flex items-center gap-4'>
        <img
          alt='Analog Magazine Rack'
          width={60}
          height={60}
          className='rounded object-cover'
          src={data.image}
        />
        <div>
          <p className='font-medium'>{data.name} </p>
          <p className='text-sm text-gray-500'>{data.description}</p>
        </div>
      </div>

      <div className='text-gray-700'>${data.price}</div>

      <div className='flex items-center border rounded-full px-3 py-2'>
        <button
          onClick={()=>handleDecreaseProductQty(id)}
          className='text-xl font-bold px-2 text-gray-700 hover:text-red-500'
        >
          −
        </button>
        <span className='px-3 font-medium'> {getProductQty(id)} </span>
        <button
          onClick={()=>handleIncreaseProductQyt(id)}
          className='text-xl font-bold px-2 text-gray-700 hover:text-green-600'
        >
          +
        </button>
      </div>

      <div className='font-semibold text-gray-800'> </div>

      <button
      onClick={()=>handleRemoveProduct(id)}
       className='text-gray-400 hover:text-red-500 transition'>
        <X size={18} />
      </button>
    </div>
  );
}

export default CartItem;
