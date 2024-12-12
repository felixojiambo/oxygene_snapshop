'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {Product} from "@/types/index.ts";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-md p-4 bg-white shadow-sm flex flex-col items-center space-y-3 w-full max-w-[250px]">
      <Link href={`/products/${product.id}`} className="flex flex-col items-center w-full">
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mb-2"
        />

        {/* Title */}
        <h3 className="text-center text-sm font-medium text-gray-800 leading-5">
          {product.title}
        </h3>

        {/* Price */}
        <p className="text-orange-500 font-bold text-base mt-2">
          KSh {product.price.toFixed(2)}
        </p>
      </Link>

      {/* Button */}
      <Button className="w-full text-sm py-2">View Product</Button>
    </div>
  );
}
