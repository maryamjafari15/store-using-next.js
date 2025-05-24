import Container from "@/src/components/Container";
import ProductCard, { IProductCardProps } from "@/src/components/ProductCard";
import Link from "next/link";
import React from "react";

async function store() {

  const result = await fetch("http://localhost:4000/products")
  const products = await result.json() as IProductCardProps[]
  
  return (
    <Container>
      <h1 className='py-4'> store</h1>
      <div className='grid grid-cols-4 gap-3'>
        {products.map((data) => (
          <Link  key={data.id} href={`store/${data.id}`}>
          <ProductCard  {...data}/>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default store;
