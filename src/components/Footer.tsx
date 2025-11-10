import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/GRAMA RUCHI PICKLES Logo.jpeg.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] border-t border-[#D2B48C] pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-[#8B4513] flex-shrink-0">
            <img
              src={logo}
              alt="Grama Ruchii Pickle Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-2">
            <h2 className="text-xl font-extrabold text-white">Grama Ruchii Pickle</h2>
            <p className="text-white text-sm leading-relaxed mt-1 sm:mt-2">
              Premium handcrafted Indian snacks — made with love, heritage, and modern flavor.
            </p>
            <div className="flex items-center gap-4 mt-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-gradient-to-r from-[#8B4513] to-[#D2B48C] text-white hover:from-[#D2B48C] hover:to-[#8B4513] hover:text-white transition shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
  <Link
    to="/"
    className="block text-white text-sm mb-2 hover:text-yellow-300 hover:underline transition"
  >
    Home
  </Link>
  <Link
    to="/about"
    className="block text-white text-sm mb-2 hover:text-yellow-300 hover:underline transition"
  >
    About Us
  </Link>
  <Link
    to="/products"
    className="block text-white text-sm mb-2 hover:text-yellow-300 hover:underline transition"
  >
    Products
  </Link>
  <Link
    to="/contact"
    className="block text-white text-sm mb-2 hover:text-yellow-300 hover:underline transition"
  >
    Contact
  </Link>
</div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-white" /> Suryapeta, Telangana
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-white" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-white" /> hello@retrofoods.in
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
          <p className="text-white text-sm leading-relaxed">
            Neredcherla<br />
            Neredcherla<br />
            Suryapet, 508218<br />
            Telangana<br />
            India
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#D2B48C] mt-10 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Grama Ruchii Pickle</span> — Crafted with ❤️ in India.
      </div>

      {/* StaffArc Credit */}
      <div className="border-t border-[#D2B48C] mt-6 pt-4 text-center text-sm text-white">
        <div className="flex justify-center items-center gap-1 flex-wrap">
          Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline ml-1"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
}
