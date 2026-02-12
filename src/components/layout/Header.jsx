import { useState } from "react";
import { Link} from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);


const cartItems = useSelector((state) => state.cart.items);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between "  onMouseLeave={() => setShopOpen(false)}>
        <div
          
          className="text-xl font-bold tracking-[0.25em] uppercase"
        >
          SHOPLUXE
        </div>
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] relative">

          <Link to="/" className="relative group">
            HOME
            <span className="nav-underline" />
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
          >
            <span className="flex items-center gap-1 cursor-pointer group">
              SHOP
              <ChevronDown size={12} />
              <span className="nav-underline" />
            </span>

            {shopOpen && (
              <ul className="absolute top-6 left-0 bg-white shadow-xl border border-black/10 w-48 py-3 text-xs tracking-widest">
                {["Men", "Women", "Garments"].map((item) => (
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

          <div to="/journal" className="relative group">
            JOURNAL
            <span className="nav-underline" />
          </div>
        </nav>

        <div className="flex items-center gap-6">
          {[Search, User].map((Icon, i) => (
            <Icon
              key={i}
              size={18}
              className="cursor-pointer hover:opacity-60 transition"
            />
          ))}

          <Link to="/cart" className="relative">
            <ShoppingCart size={18} />
           <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
  {cartItems.reduce((total, item) => total + item.quantity, 0)}
</span>

          </Link>


          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-6 text-xs tracking-[0.2em] space-y-4">

          <div  className="block">HOME</div>

          <button
            onClick={() => setMobileShopOpen(!mobileShopOpen)}
            className="flex items-center justify-between w-full"
          >
            SHOP
            <ChevronDown
              size={14}
              className={`${mobileShopOpen ? "rotate-180" : ""} transition`}
            />
          </button>

          {mobileShopOpen && (
            <div className="pl-4 space-y-3 text-[11px]">
              {["Men", "Women", "Garments"].map((item) => (
                <Link
                  key={item}
                  to={`/shop/${item.toLowerCase()}`}
                  className="block opacity-80 hover:opacity-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          <div to="/journal" className="block">JOURNAL</div>
          <div to="/cart" className="block">CART</div>
        </div>
      )}

      <style>
        {`
          .nav-underline {
            position: absolute;
            left: 0;
            bottom: -4px;
            height: 1px;
            width: 0;
            background: black;
            transition: width 0.3s ease;
          }
          .group:hover .nav-underline {
            width: 100%;
          }
        `}
      </style>
    </header>
  );
}
