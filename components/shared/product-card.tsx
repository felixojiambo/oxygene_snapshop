'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Product } from "@/types/index.ts";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice'; // Adjust the import path as needed

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
  dispatch(addToCart(product)); 
};

  return (
    <div className="border rounded-md p-4 bg-white shadow-sm flex flex-col items-center space-y-3 max-w-[300px]">
      <Link href={`/products/${product.id}`} className="flex flex-col items-center w-full">
        {/* Using Next.js Image for optimized loading */}
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="h-40 object-contain mb-2 w-full"
          priority
        />
        <h3 className="text-center text-sm font-medium text-gray-800 leading-5">
          {product.title}
        </h3>
        <p className="text-orange-500 font-bold text-base mt-2">
          KSh {product.price.toFixed(2)}
        </p>
      </Link>
      <div className="w-full flex justify-between">
        <Button onClick={handleAddToCart} className="text-sm py-2 w-1/2 mr-2">
          Add to Cart
        </Button>
        <Link href={`/products/${product.id}`} className="w-1/2">
          <Button className="text-sm py-2 w-full">View Product</Button>
        </Link>
      </div>
    </div>
  );
}
