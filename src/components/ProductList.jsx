import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

function ProductList() {
  const { products, error } = useFetchProducts();

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg">
        {error}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center text-gray-600 mt-10 text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Explore Products
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
