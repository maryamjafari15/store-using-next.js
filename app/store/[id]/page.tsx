import AddToCart from "@/src/components/AddToCart";
import Container from "@/src/components/Container";
import { IProductCardProps } from "@/src/components/ProductCard";
import React from "react";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function product({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:4000/products/${id}`);
  const data = (await result.json()) as IProductCardProps;
  return (
    <Container>
      <div className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 bg-white text-gray-800'>
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <img
            src={data.image}
            alt='product'
            width={500}
            height={500}
            className='rounded-lg'
          />
        </div>
        <div className='md:w-1/2 max-w-md space-y-6'>
          <h2 className='text-sm uppercase text-gray-400'>New Collection</h2>
          <h1 className='text-3xl font-semibold'>{data.name}</h1>
          <p className='text-lg text-gray-500'>White</p>
          <div className='flex items-center space-x-2'>
            <a href='#' className='text-sm text-gray-500 underline'>
              8 Reviews
            </a>
          </div>
          <p className='text-2xl font-bold text-red-600'>{data.price}</p>
          <div className='flex items-center space-x-2'>
            {/* <label htmlFor='qty' className='text-sm'>
              Quantity:
            </label> */}
            {/* <input
              type='number'
              id='qty'
              value={quantity}
              className='w-16 border rounded px-2 py-1'
              readOnly
            /> */}
          </div>
          <div>
            <h3 className='font-semibold'>{data.description}</h3>
            <ul className='text-sm text-gray-600 list-disc pl-5 space-y-1'>
              <li>Size: 29.4" H x 35.8" W x 32.3" D</li>
              <li>Seat Height: 14.5"</li>
              <li>
                Materials: Plywood, Oak Veneer, Semi-Aniline Italian Leather
              </li>
              <li>Color: Cream Leather</li>
              <li>Weight: 40 lbs</li>
            </ul>
          </div>

          <p className='text-lg font-semibold'> Total Price: {data.price}</p>
          <AddToCart  id={id} />
        </div>
      </div>
    </Container>
  );
}

export default product;
