import axios from 'axios';
import ProductCard from '../../components/product-card';
import Sidebar from '../../components/sidebar';
import Pagination from '../../components/pagination';

export default async function ProductsPage({ searchParams }: { searchParams: { [key: string]: string | undefined }}) {
  const category = searchParams.category;
  const page = Number(searchParams.page) || 1;
  const productsPerPage = 8;

  let products = [];
  if (category) {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    products = res.data;
  } else {
    const res = await axios.get('https://fakestoreapi.com/products');
    products = res.data;
  }

  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination 
          totalItems={products.length} 
          itemsPerPage={productsPerPage} 
          currentPage={page} 
          category={category}
        />
      </div>
      <Sidebar />
    </div>
  );
}
