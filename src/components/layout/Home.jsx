import React from "react";
import homeImage from "../../assets/home.jpg";

export default function Home() {
  return (
   <>
     <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">

      {/* Image Section */}
      <div className="w-full h-[60vh] md:h-full">
        <img
          src={homeImage}
          alt="Fashion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="bg-black flex items-center justify-center px-6 sm:px-10 md:px-20 py-10 md:py-0">
        <div className="text-white max-w-md text-center md:text-left">

          <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
            Spring Edit
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-5 sm:mb-6">
            Elegance in <br className="hidden sm:block" /> Every Step
          </h1>

          <p className="text-gray-400 mb-6 sm:mb-8">
            Be two feet ahead of the rest
          </p>

          <button className="
            w-full sm:w-auto
            border border-white 
            px-8 py-3 
            text-sm tracking-widest
            hover:bg-white hover:text-black 
            transition
          ">
            SHOP NOW
          </button>

        </div>
      </div>

    </section>
   </>
  );
}
