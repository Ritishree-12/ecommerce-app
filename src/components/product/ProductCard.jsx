export default function ProductCard({ product }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        border
        border-black/10
        p-4
        sm:p-5
        flex
        flex-col
        transition
        hover:shadow-lg
        mt-4
      "
    >
      {/* PRODUCT IMAGE */}
      <div className="w-full flex justify-center items-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="
            h-32
            sm:h-40
            md:h-44
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* PRODUCT INFO */}
      <h3 className="text-xs sm:text-sm font-medium line-clamp-2">
        {product.title}
      </h3>

      <p className="mt-1 text-sm sm:text-base font-semibold">
        ₹ {product.price}
      </p>

      {/* BUTTON */}
      <button
        className="
          mt-4
          w-full
          bg-black
          text-white
          text-xs
          sm:text-sm
          py-2.5
          rounded-full
          hover:bg-black/80
          transition
          active:scale-95
        "
      >
        Add to Cart
      </button>
    </div>
  );
}
