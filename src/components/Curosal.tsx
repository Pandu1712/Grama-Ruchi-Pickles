import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682999/Lemon_oaa2rh.jpg",
    name: "Lemon Pickle",
    tagline: "Aromatic & spicy — pure homemade taste!",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682995/CurryLeaf_oqy5uw.jpg",
    name: "Curry Leaf Pickle",
    tagline: "Tangy, spicy & rich in Andhra tradition.",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680335/Mango_Avakaya_Pickle_lmpaxv.webp",
    name: "Mango Pickle",
    tagline: "Fresh, zesty, and full of flavor.",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_30_05_PM_ojtpre.jpg",
    name: "Chicken Pickle",
    tagline: "Juicy chicken bites in traditional spice mix.",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762682808/ChatGPT_Image_Nov_9_2025_03_34_41_PM_ogerni.jpg",
    name: "Mutton Pickle",
    tagline: "Rich, spicy, and deeply satisfying.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl mt-6">
      {/* Slides */}
      <div
        className="flex transition-transform duration-[900ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full h-[320px] sm:h-[460px] md:h-[550px] flex-shrink-0"
          >
            <img
              src={slide.img}
              alt={slide.name}
              className="w-full h-full object-cover scale-105 transition-transform duration-[1200ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-12 px-4">
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-orange-400 drop-shadow-md">
                  {slide.name}
                </h2>
                <p className="text-white mt-2 text-sm sm:text-lg font-light tracking-wide">
                  {slide.tagline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 bg-orange-500/70 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 bg-orange-500/70 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === i
                ? "bg-orange-500 scale-125 shadow-md"
                : "bg-white/60 hover:bg-orange-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
