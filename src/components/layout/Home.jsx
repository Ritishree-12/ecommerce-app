import React from "react";
import homeImage from "../../assets/home.jpg";
import ProductLists from "../product/ProductLists";

export default function Home() {
  return (
    <>
      <div className="bg-[#FAF9F7]">
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 md:px-16 bg-[#F3C6B8]">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#2B2B2B] leading-tight">
              Embrace the chill,
              <br />
              let nature in
            </h1>

            <p className="mt-4 text-gray-700 max-w-md">
              Discover premium winter wear crafted with soft pastel tones for
              comfort and elegance.
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
      </div>

      <ProductLists />
    </>
  );
}
