import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:shadow-lg">
      <div className="flex-1">
      
        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
        <p className="text-sm text-gray-600">Quantity: <span className="font-medium">{item.quantity}</span></p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
