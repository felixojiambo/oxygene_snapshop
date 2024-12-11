'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${category}&page=1`);
  };

  return (
    <aside className="w-full md:w-1/4 pl-8 border-l border-[#e5e5e5]">
      <div className="flex items-center mb-6 relative">
        <h3 className="font-bold text-xs uppercase tracking-wider text-[#333]">Category</h3>
        <div className="ml-2 text-xs text-[#f26b1d] rotate-90">▸</div>
      </div>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="block text-left w-full text-[#333] hover:text-[#f26b1d] capitalize transition-colors"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
