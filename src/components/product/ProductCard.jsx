import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/10 p-4 sm:p-5 flex flex-col transition hover:shadow-lg mt-4">
      
      {/* IMAGE */}
      <div className="w-full flex justify-center items-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-32 sm:h-40 md:h-44 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* INFO */}
      <h3 className="text-xs sm:text-sm font-medium line-clamp-2">
        {product.title}
      </h3>

      <p className="mt-1 text-sm sm:text-base font-semibold">
        ₹ {product.price}
      </p>

      {/* BUTTON */}
      <button
        disabled={isInCart}
        onClick={() => dispatch(addToCart(product))}
        className={`
          mt-4 w-full py-2.5 rounded-full text-xs sm:text-sm transition
          ${isInCart
            ? "bg-green-600 text-white cursor-not-allowed"
            : "bg-black text-white hover:bg-black/80 active:scale-95"}
        `}
      >
        {isInCart ? "Added To Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
