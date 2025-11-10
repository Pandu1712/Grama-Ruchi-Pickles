import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Restrict phone input to digits only and max 10 digits
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters
      setForm({ ...form, [name]: digitsOnly.slice(0, 10) }); // Limit to 10 digits
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleWhatsAppSend = () => {
    const phoneNumber = "916303130025";
    const text = `*New Inquiry from Grama Ruchii Pickle Website*\n\n👤 Name: ${form.name || "N/A"}\n📧 Email: ${form.email || "N/A"
      }\n📞 Phone: ${form.phone || "N/A"}\n💬 Message: ${form.message || "No message provided"}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Charminar,+Hyderabad,+Telangana,+India";

  return (
    <main className="min-h-screen py-12 px-6">
      <section className="max-w-6xl mx-auto bg-white/20 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image & Map */}
          <div className="relative flex flex-col justify-between">
            <img
              src="https://c8.alamy.com/comp/KA8KAA/stock-photo-of-diwali-food-or-diwali-snacks-or-diwali-sweets-like-KA8KAA.jpg"
              alt="Grama Ruchii Pickle Store"
              className="h-[25vh] md:h-[55vh] w-full object-cover rounded-t-3xl md:rounded-tr-none"
            />

            <div className="relative">
              <iframe
                title="Grama Ruchii Pickle Location"
                src="https://maps.apple/r/JB3cg6eKHoZmrA"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="hidden md:block rounded-b-3xl"
              ></iframe>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block absolute bottom-3 right-3 bg-gradient-to-r from-[#5D4037] to-[#3E2723] text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gradient-to-r from-[#8B4513] to-[#D2B48C] p-8 md:p-12  rounded-tr-3xl rounded-br-3xl">
            <h2 className="text-4xl font-extrabold text-white mb-2">
              Contact Us
            </h2>
            <p className="text-[#D7CCC8] mb-6">
              Have a query, feedback, or bulk order? We’d love to hear from you!
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#D7CCC8] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-[#D7CCC8] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3E2723] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#D7CCC8] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-[#D7CCC8] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3E2723] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#D7CCC8] mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  className="w-full border border-[#D7CCC8] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3E2723] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#D7CCC8] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full border border-[#D7CCC8] rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-[#3E2723] outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleWhatsAppSend}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.03] transition-transform duration-200 shadow-lg"
            >
              💬 Send Message on WhatsApp
            </button>

            <div className="mt-8 border-t border-[#D7CCC8] pt-5 text-center">
              <p className="text-[#D7CCC8] text-sm">
                📍Neredcherla
                Suryapet, 508218
                Telangana
                India
              </p>
              <p className="text-[#D7CCC8] text-sm mt-1">
                📞 +91 99999 99999 &nbsp; • &nbsp; 📧 info@crunchybites.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Map + Directions */}
      <div className="mt-10 md:hidden">
        <iframe
          title="Grama Ruchii Pickle Mobile Map"
          src="https://maps.apple/r/JB3cg6eKHoZmrA"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-lg"
        ></iframe>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 w-full bg-gradient-to-r from-[#5D4037] to-[#3E2723] text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
        >
          📍 Get Directions
        </a>
      </div>
    </main>
  );
}
