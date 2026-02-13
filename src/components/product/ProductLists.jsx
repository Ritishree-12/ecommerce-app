import React from "react";

const products = [
  {
    id: 1,
    name: "Winter Puffer Jacket",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 2,
    name: "Soft Knit Hoodie",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1",
  },
  {
    id: 3,
    name: "Casual Cotton Sweater",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 4,
    name: "Pastel Winter Coat",
    price: 4299,
    image:
      "https://images.unsplash.com/photo-1520975682031-a36d9b81b1b5",
  },
  {
    id: 5,
    name: "Minimal Denim Jacket",
    price: 2799,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 6,
    name: "Warm Casual Hoodie",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
];

const ProductPage = () => {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 bg-[#F3C6B8]">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2B2B2B] leading-tight">
            Embrace the chill,
            <br />
            let nature in
          </h1>

          <p className="mt-4 text-gray-700 max-w-md">
            Discover premium winter wear crafted with soft pastel tones
            for comfort and elegance.
          </p>

          <button className="mt-6 w-fit bg-[#C7DBF2] text-[#2B2B2B] px-6 py-3 rounded-lg hover:bg-[#BFE3D0] transition">
            Shop Now
          </button>
        </div>

        <div className="h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center text-[#2B2B2B] mb-12">
          Winter Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2B2B2B]">
                  {product.name}
                </h3>

                <p className="mt-1 text-gray-600">
                  ₹ {product.price}
                </p>

                <button className="mt-4 w-full bg-[#F3C6B8] text-white py-2 rounded-xl hover:bg-[#F6D0D8] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
