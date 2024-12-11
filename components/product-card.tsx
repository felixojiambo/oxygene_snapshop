'use client';

import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  // Add other fields if needed: category, description, etc.
}

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    }));
  };

  // For demonstration, suppose products with even IDs are on sale
  const isOnSale = product.id % 2 === 0;
  const salePercentage = isOnSale ? 10 : 0; 

  return (
    <div className="border border-gray-200 p-4 relative hover:shadow transition-shadow bg-white">
      <div className="relative w-full h-40 flex items-center justify-center mb-4">
        {isOnSale && (
          <span className="absolute top-2 left-2 bg-[#f26b1d] text-white text-xs font-semibold px-2 py-1 rounded">
            Sale -{salePercentage}%
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <h2 className="text-sm font-semibold text-[#333] mb-2 line-clamp-2">{product.title}</h2>
      <p className="text-[#f26b1d] font-bold">KSh {product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart} 
        className="absolute bottom-4 right-4 text-[#333] hover:text-[#f26b1d]"
        aria-label="Add to Cart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1-5H8l-1 5zM7 13l-1 5h10l1-5H7z"/>
        </svg>
      </button>
    </div>
  );
}
