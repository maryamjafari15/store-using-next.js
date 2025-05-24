import React from 'react'

 export interface IProductCardProps {
    id: number,
      name: string,
      price: number,
      image: string,
      isOutOfStock: boolean,
      description :string,
}

function ProductCard({image , name , price , isOutOfStock}: IProductCardProps) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition-all">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-md mb-4">${price}</p>

      {isOutOfStock ? (
        <button
          className="w-full bg-gray-400 text-white py-2 rounded-xl cursor-not-allowed"
          disabled
        >
          Out of Stock
        </button>
      ) : (
        <button
          className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductCard