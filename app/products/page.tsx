'use client';

import { useEffect, useState } from 'react';
import ProductCard from "@/components/shared/product-card";
import axios from "axios";
import Pagination from "@/components/shared/pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 9; // 3 rows of 3 items per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products${selectedCategory ? `/category/${selectedCategory}` : ''}`
        );
        setProducts(response.data);
        setTotalItems(response.data.length);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when a new category is selected
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto flex gap-8 px-16 py-8">
      {/* Product Grid */}
      <div className="flex-grow">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="col-span-3 mt-6 flex justify-center">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* Categories Sidebar */}
      <aside className="w-[250px] hidden lg:block">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Category</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`text-sm font-medium ${
                selectedCategory === null
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
              onClick={() => handleCategoryChange(null)}
            >
              All Categories
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`text-sm font-medium ${
                  selectedCategory === category
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
