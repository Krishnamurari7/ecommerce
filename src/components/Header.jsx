import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-bold hover:text-gray-200 transition duration-200">
          🛍️ ShoppyGlobe
        </Link>
        <div className="space-x-4 text-sm sm:text-base">
          <Link
            to="/"
            className="hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-200 transition duration-200"
          >
            Cart ({cart.length})
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
