import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10 text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-[0.25em] uppercase"
        >
          SHOPLUXE
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] relative">

          {["HOME", "SHOP", "JOURNAL"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-opacity group-hover:opacity-70 font-bold ">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* SHOP DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            {shopOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-xl border border-black/10 w-44 py-3 text-xs tracking-widest">
                {["Men", "Women", "Accessories"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/shop/${item.toLowerCase()}`}
                      className="block px-5 py-2 hover:bg-black hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 text-black">
          {[Search, User].map((Icon, i) => (
            <Icon
              key={i}
              size={18}
              className="cursor-pointer hover:opacity-60 transition"
            />
          ))}

          <Link to="/cart" className="relative">
            <ShoppingCart size={18} className="hover:opacity-60 transition" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-6 space-y-4 text-xs tracking-[0.2em]">
          {["HOME", "SHOP", "JOURNAL", "CART"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block hover:opacity-60 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
