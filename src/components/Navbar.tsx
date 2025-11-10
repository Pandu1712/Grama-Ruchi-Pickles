import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Send } from "lucide-react";
import { useCart } from "../context/CartContext";
import logo from "../assets/GRAMA RUCHI PICKLES Logo.jpeg.jpg";

export default function Navbar() {
  const loc = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState({ name: "", phone: "", address: "" });

  const { state } = useCart();
  const cartItems = state.items;

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleWhatsAppSend = () => {
    if (!user.name || !user.phone || !user.address) {
      alert("Please fill all details before sending.");
      return;
    }

    const cartText = cartItems
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ${item.weight} (${item.qty}x) ₹${
            item.unitPrice * item.qty
          }`
      )
      .join("\n");

    const total = cartItems.reduce((t, i) => t + i.unitPrice * i.qty, 0);

    const message = `🧾 *Grama Ruchii Pickle Order*\n\n👤 Name: ${user.name}\n📞 Phone: ${user.phone}\n🏠 Address: ${user.address}\n\n🛍️ *Items:*\n${cartText}\n\n💰 Total: ₹${total}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${user.phone}?text=${encoded}`, "_blank");
    setShowPopup(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#8B4513] to-[#D2B48C] backdrop-blur-sm shadow-lg border-b border-[#6B3E26]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-[#6B3E26]">
            <img
              src={logo}
              alt="Grama Ruchii Pickle Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-white text-xl tracking-wide">
              Grama Ruchii Pickle
            </h1>
          {/*   <p className="text-sm text-[#FFF5E1]">Handcrafted Snacks, Modern Taste</p> */}
          </div>
        </Link>

        {/* Desktop Links + Cart */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                loc.pathname === link.path
                  ? "bg-gradient-to-r from-[#6B3E26] to-[#D2B48C] text-white shadow-md"
                  : "text-white hover:bg-white hover:text-[#6B3E26]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative p-2 text-white hover:text-yellow-100 transition ml-4"
          >
            <ShoppingCart size={26} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white hover:text-yellow-100 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#8B4513] to-[#D2B48C] border-t border-[#6B3E26] shadow-lg animate-slideDown">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-5 py-3 text-sm font-medium transition-colors ${
                loc.pathname === link.path
                  ? "bg-[#6B3E26] text-white"
                  : "text-white hover:bg-[#D2B48C] hover:text-[#6B3E26]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Cart */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-5 py-3 text-white hover:text-yellow-100"
          >
            <ShoppingCart size={22} />
            Cart ({cartItems.length})
          </Link>
        </div>
      )}

      {/* WhatsApp Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-lg font-bold mb-3 text-[#6B3E26]">
              🧾 Complete Your Order
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full mb-2 border border-[#D2B48C] rounded-md p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full mb-2 border border-[#D2B48C] rounded-md p-2"
            />
            <textarea
              placeholder="Full Address with Pin Code"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className="w-full mb-3 border border-[#D2B48C] rounded-md p-2"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-md border border-[#D2B48C] hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[#6B3E26] to-[#D2B48C] text-white flex items-center gap-2"
              >
                <Send size={16} /> Send WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
