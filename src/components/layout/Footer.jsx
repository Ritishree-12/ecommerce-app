import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold tracking-[0.3em] uppercase mb-4">
            ShopLuxe
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Premium fashion curated for modern lifestyles.  
            Timeless design. Elevated essentials.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-xs font-bold tracking-widest mb-4 uppercase">
            Shop
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/shop/men" className="hover:text-white transition">Men</Link></li>
            <li><Link to="/shop/women" className="hover:text-white transition">Women</Link></li>
            <li><Link to="/shop/garments" className="hover:text-white transition">Garments</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-xs font-bold tracking-widest mb-4 uppercase">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/" className="hover:text-white transition">Journal</Link></li>
            <li><Link to="/" className="hover:text-white transition">Careers</Link></li>
            <li><Link to="/" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-xs font-bold tracking-widest mb-4 uppercase">
            Newsletter
          </h3>
          <p className="text-sm text-white/70 mb-4">
            Subscribe for exclusive drops & offers.
          </p>

          <div className="flex border border-white/30 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 text-sm w-full focus:outline-none"
            />
            <button className="bg-white text-black px-5 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} ShopLuxe. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Instagram className="hover:text-white cursor-pointer transition" size={18} />
          <Facebook className="hover:text-white cursor-pointer transition" size={18} />
          <Twitter className="hover:text-white cursor-pointer transition" size={18} />
        </div>
      </div>
    </footer>
  );
}
