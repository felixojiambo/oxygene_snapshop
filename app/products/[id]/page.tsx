'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export default function ProductPage({ params }: { params: { id: string }}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    }
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      }));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl text-orange-500 my-2">KSh {product.price.toFixed(2)}</p>
        <p className="text-justify">{product.description}</p>
        <p className="mt-2">SKU: {product.id}</p>
        <p>Category: {product.category}</p>
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center border rounded dark:border-gray-700">
            <button className="px-3" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="px-3">{quantity}</span>
            <button className="px-3" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
