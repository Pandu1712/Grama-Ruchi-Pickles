import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Send, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const cartItems = state.items;
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({ name: "", phone: "", address: "" });
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.qty,
    0
  );

  const handleQtyChange = (id: string, qty: number) => {
    if (qty < 1) return;
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const handleWhatsAppSend = () => {
    if (!user.name || !user.phone || !user.address) {
      setError("Please fill all details.");
      return;
    }

    if (!/^[0-9]{10}$/.test(user.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");

    const itemsText = cartItems
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ${item.weight} (${item.qty}x) ₹${
            item.unitPrice * item.qty
          }`
      )
      .join("\n");

    const msg = `🧾 *Grama Ruchii Pickle Order*\n\n👤 Name: ${user.name}\n📞 Phone: ${
      user.phone
    }\n🏠 Address: ${user.address}\n\n🛍️ *Items:*\n${itemsText}\n\n💰 Total: ₹${total}`;

    const encoded = encodeURIComponent(msg);
    const fixedNumber = "916303130025"; // 91 + 6303130025

    window.open(`https://wa.me/${fixedNumber}?text=${encoded}`, "_blank");
    setShowPopup(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-[#8B4513] flex flex-col items-center gap-4 bg-[#F3E5D5] min-h-screen">
        <p className="text-lg font-semibold">🛒 Your cart is empty.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#D97706] text-white px-4 py-2 rounded-lg shadow hover:bg-[#b35c00] transition-all"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6  min-h-screen">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-[#D97706] text-white px-4 py-2 rounded-lg shadow hover:bg-[#b35c00] transition-all"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6 text-[#78350F]">🛍️ Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b border-[#D9A066] py-3"
        >
          <div className="flex items-center gap-3">
            {item.img && (
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover border border-[#D97706]"
              />
            )}
            <div>
              <div className="font-semibold text-[#78350F]">{item.name}</div>
              <div className="text-sm text-[#8B4513]">{item.weight}</div>
              <div className="text-[#D97706] font-medium">
                ₹{item.unitPrice * item.qty}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQtyChange(item.id, item.qty - 1)}
              className="p-1 border border-[#D9A066] rounded hover:bg-[#E6C68B]"
            >
              <Minus size={14} />
            </button>
            <span className="w-6 text-center text-[#78350F]">{item.qty}</span>
            <button
              onClick={() => handleQtyChange(item.id, item.qty + 1)}
              className="p-1 border border-[#D9A066] rounded hover:bg-[#E6C68B]"
            >
              <Plus size={14} />
            </button>
            <button
              onClick={() => handleRemove(item.id)}
              className="ml-3 text-red-600 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Total and Book Now */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-lg font-bold text-[#78350F]">
          Total: ₹{total.toFixed(2)}
        </div>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-5 py-2 rounded-md text-white font-semibold shadow hover:opacity-90"
        >
          Book Now
        </button>
      </div>

      {/* ✅ Popup for details */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#FFF8F0] p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-lg font-bold mb-3 text-[#78350F]">
              🧾 Complete Your Order
            </h2>

            {error && (
              <p className="text-red-500 text-sm mb-2 font-medium">{error}</p>
            )}

            <input
              type="text"
              placeholder="Your Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full mb-2 border border-[#D9A066] rounded-md p-2"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={user.phone}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setUser({ ...user, phone: value });
                }
              }}
              className="w-full mb-2 border border-[#D9A066] rounded-md p-2"
            />

            <textarea
              placeholder="Full Address with Pin Code"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className="w-full mb-3 border border-[#D9A066] rounded-md p-2"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-md border border-[#D9A066] hover:bg-[#FFF0E0]"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2 rounded-md bg-[#16A34A] text-white flex items-center gap-2"
              >
                <Send size={16} /> Send WhatsApps
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
