import CartItem from "@/src/components/CartItem";
import Container from "@/src/components/Container";
import React from "react";

function cart() {
  return (
    <Container> 
        <div className="flex justify-between m-20 gap-5">
      <div className=' justify-center flex-col  w-full'>
        <h1 className='flex justify-center text-6xl mb-5'> YOUR CART </h1>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className='w-full max-w-sm bg-white border rounded-lg p-6 shadow-sm'>
            <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>

            <div className='space-y-2 text-sm text-gray-700'>
              <div className='flex justify-between'>
                <span>Items</span>
                <span>"itemCount"</span>
              </div>
              <div className='flex justify-between'>
                <span>Sub Total</span>
                <span></span>
              </div>
              <div className='flex justify-between'>
                <span>Shipping</span>
                <span></span>
              </div>
              <div className='flex justify-between'>
                <span>Taxes</span>
                <span></span>
              </div>
              <div className='flex justify-between text-red-500'>
                <span>Coupon Discount</span>
                <span></span>
              </div>
              <hr className='my-2' />
              <div className='flex justify-between font-bold text-base'>
                <span>Total</span>
                <span> </span>
              </div>
            </div>

            <button className='mt-6 w-full bg-[#3B1F0B] hover:bg-[#4f2a12] text-white py-2 rounded-lg text-sm font-medium transition'>
              Proceed to Checkout
            </button>
          </div>
          </div>
    </Container>
  );
}

export default cart;
