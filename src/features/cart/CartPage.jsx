import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  // increaseQty,
  // decreaseQty,
  clearCart
} from "./cartSlice"; // adjust path if needed

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven’t added anything yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* CART ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 border rounded-xl p-4"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />

            {/* INFO */}
            <div className="flex-1">
              <h3 className="text-sm font-medium line-clamp-2">
                {item.title}
              </h3>

              <p className="mt-1 font-semibold">₹ {item.price}</p>

              {/* QUANTITY */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="w-8 h-8 border rounded-full hover:bg-gray-100"
                >
                  −
                </button>

                <span className="font-medium">{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="w-8 h-8 border rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* REMOVE */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border rounded-xl p-6 h-fit">
        <h2 className="text-lg font-bold mb-6">Order Summary</h2>

        <div className="flex justify-between text-sm mb-3">
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>

        <div className="flex justify-between text-sm mb-3">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="border-t my-4" />

        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span>₹ {subtotal}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full hover:bg-black/80 transition">
          Proceed to Checkout
        </button>

        <button
          onClick={() => dispatch(clearCart())}
          className="w-full mt-4 text-xs text-gray-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
