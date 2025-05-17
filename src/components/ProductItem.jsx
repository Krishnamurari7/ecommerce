import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 sm:h-60 object-cover"
        />
        <div className="p-4 space-y-1">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
          <p className="text-lg font-bold text-green-600">${product.price}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
