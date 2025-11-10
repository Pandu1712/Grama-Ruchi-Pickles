import React from "react";

export default function About() {
  return (
    <main className="bg-gradient-to-b from-[#FFF3E0] to-[#FBE9E7] text-slate-700">
      {/* --- Hero Section --- */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 items-center gap-10">
  {/* Left Side - Text */}
  <div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#5D4037] mb-4">
      The Story of Grama Ruchii Pickle
    </h1>
    <p className="text-lg md:text-xl text-[#6D4C41] leading-relaxed">
      From a humble family kitchen in Andhra Pradesh,{" "}
      <span className="font-semibold text-[#4E342E]">Grama Ruchii Pickle</span>{" "}
      has been crafting authentic, hand-prepared pickles that capture the rich flavors and heritage of India. Every jar tells a story
      of care, tradition, and passion.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="flex justify-center md:justify-end">
    <img
      src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_34_41_PM_ogerni.jpg"
      alt="Traditional Pickles"
      className="w-full md:w-4/5 rounded-3xl shadow-xl object-cover"
    />
  </div>
</section>


      {/* --- Values Section --- */}
      <section className="py-16 px-6 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
              title: "Authenticity",
              desc: "Every pickle is made using traditional recipes and authentic spices, preserving the original taste of Andhra Pradesh."
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
              title: "Freshness",
              desc: "We use only fresh, locally-sourced ingredients, ensuring vibrant flavors and high-quality pickles."
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1791/1791333.png",
              title: "Innovation",
              desc: "Blending traditional pickling methods with modern hygiene and packaging for long-lasting freshness."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md p-6 text-center hover:-translate-y-2 hover:shadow-lg transition"
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-[#5D4037]">{item.title}</h4>
              <p className="text-sm mt-2 text-[#6D4C41]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Pickle Gallery Section --- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#5D4037] mb-10">
          Our Pickle Varieties
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680335/Mango_Avakaya_Pickle_lmpaxv.webp",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682995/CurryLeaf_oqy5uw.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682999/Lemon_oaa2rh.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Crab_Pickle_nssmqd.avif",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_34_41_PM_ogerni.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_30_05_PM_ojtpre.jpg"
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <img src={img} alt={`Pickle ${i}`} className="w-full h-64 sm:h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* --- Founders Section --- */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#5D4037] mb-10">
          Meet Our Founders
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {[
            {
              name: "B.S.R.N. Teja",
              role: "Founder",
              desc: "Visionary behind Grama Ruchii Pickle, leading innovation while preserving authentic Indian pickle flavors.",
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            },
            {
              name: "Subbarao Nimmagadda",
              role: "Co-Founder",
              desc: "Maintains quality and community values that define the true spirit of Grama Ruchii Pickle.",
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
          ].map((founder, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center"
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-[#D7CCC8] object-cover"
              />
              <h4 className="text-xl font-semibold text-[#5D4037]">{founder.name}</h4>
              <p className="text-sm text-[#6D4C41] mt-1 font-medium">{founder.role}</p>
              <p className="text-sm text-[#6D4C41] mt-3">{founder.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
