import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-60 text-gray-500">
          <p className="text-lg">🛒 Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
