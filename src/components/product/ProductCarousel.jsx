import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  { id: 1, img: "https://via.placeholder.com/300", name: "Leather Bag" },
  { id: 2, img: "https://via.placeholder.com/300", name: "Sneakers" },
  { id: 3, img: "https://via.placeholder.com/300", name: "Watch" },
];

export default function ProductCarousel() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-semibold mb-8">Trending Now</h2>

      <Swiper spaceBetween={20} slidesPerView={3}>
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-white shadow rounded-xl p-4">
              <img src={p.img} />
              <p className="mt-3 font-medium">{p.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
