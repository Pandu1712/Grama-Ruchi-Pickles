export default function About() {
  return (
    <main className="bg-gradient-to-b from-orange-50 to-white text-slate-700">
      {/* --- Hero Section --- */}

      {/* --- Intro Story --- */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed">
            Born from a small family kitchen in Andhra Pradesh,{" "}
            <span className="font-semibold text-orange-600">
              Grama Ruchii Pickle
            </span>{" "}
            started with a simple dream — to bring the authentic taste of
            traditional Indian snacks to every household. What began as handmade
            batches for friends and family has grown into a proud brand loved
            across India.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Every bite reflects our values — <strong>purity, freshness, and
            craftsmanship</strong>. We still roast, fry, and spice our snacks
            the same way our grandparents did — with care, patience, and heart.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_34_41_PM_ogerni.jpg"
            alt="Traditional Snacks"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- Mission & Values --- */}
      <section className="bg-gradient-to-r from-orange-100 via-orange-50 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Quality"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-orange-700">Quality</h4>
            <p className="text-sm mt-2 text-slate-600">
              Only premium ingredients sourced locally, ensuring authentic
              flavors and freshness in every batch.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
              alt="Tradition"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-orange-700">Tradition</h4>
            <p className="text-sm mt-2 text-slate-600">
              Every recipe is a story — preserved through generations, still
              prepared with traditional methods.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1791/1791333.png"
              alt="Innovation"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-orange-700">Innovation</h4>
            <p className="text-sm mt-2 text-slate-600">
              We blend traditional tastes with modern packaging — ensuring
              hygiene, convenience, and long shelf life.
            </p>
          </div>
        </div>
      </section>

      {/* --- Image Gallery Section --- */}
      <section className="max-w-6xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">
          From Our Kitchen to Yours
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_34_41_PM_ogerni.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_30_05_PM_ojtpre.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680335/Mango_Avakaya_Pickle_lmpaxv.webp",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682995/CurryLeaf_oqy5uw.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682999/Lemon_oaa2rh.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Crab_Pickle_nssmqd.avif"
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform bg-white"
            >
              <img
                src={img}
                alt={`Snack ${i}`}
                className="w-full h-64 sm:h-56 object-cover rounded-none"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Founders Section --- */}
      <section className="bg-orange-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-10">
          Meet Our Founders
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {/* Founder */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Founder"
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-orange-200 object-cover"
            />
            <h4 className="text-xl font-semibold text-orange-700">
              B.S.R.N. Teja
            </h4>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Founder
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Visionary behind Grama Ruchii Pickle, leading innovation while
              preserving the authenticity of Indian flavors.
            </p>
          </div>

          {/* Co-Founder */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
              alt="Co-Founder"
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-orange-200 object-cover"
            />
            <h4 className="text-xl font-semibold text-orange-700">
              Subbarao Nimmagadda
            </h4>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Co-Founder
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Dedicated to maintaining quality and community values that define
              the true spirit of Grama Ruchii.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
