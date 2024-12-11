'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  category?: string;
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, category }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    if (category) params.set('category', category);
    router.push(`/products?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 border rounded ${currentPage === page ? 'bg-[#f26b1d] text-white' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
