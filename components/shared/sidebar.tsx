'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Sidebar() {
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <aside className="w-full md:w-1/4 p-4 border-l dark:border-gray-700">
      <h3 className="font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="text-left w-full hover:text-orange-500 capitalize"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
