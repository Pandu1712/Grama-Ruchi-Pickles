import { useMemo, useState } from "react";
import { products as catalog, categories } from "../data/products";
import { useCart } from "../context/CartContext";
import type { WeightKey } from "../data/products";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  img: string;
  category: string;
  prices: Record<WeightKey, number>;
  tag?: string;
  isVeg?: boolean;
}

const weightOptions: WeightKey[] = ["250g", "500g", "1000g"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [q, setQ] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const { dispatch } = useCart();
  const [weightMap, setWeightMap] = useState<Record<string, WeightKey>>({});
  const [qtyMap, setQtyMap] = useState<Record<string, number>>({});
  const [showCategories, setShowCategories] = useState(false);

  const filtered = useMemo(() => {
    return catalog.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (q.trim() && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (minPrice !== "" || maxPrice !== "") {
        const min = minPrice === "" ? 0 : Number(minPrice);
        const max = maxPrice === "" ? Infinity : Number(maxPrice);
        const any = Object.values(p.prices).some((price) => price >= min && price <= max);
        if (!any) return false;
      }
      return true;
    });
  }, [activeCategory, q, minPrice, maxPrice]);

  const handleAdd = (productId: string) => {
    const product = catalog.find((p) => p.id === productId);
    if (!product) return;
    const weight = weightMap[productId] || "250g";
    const unitPrice = product.prices[weight];
    const qty = qtyMap[productId] || 1;

    dispatch({
      type: "ADD",
      payload: { productId, name: product.name, weight, qty, unitPrice, img: product.img, variant: undefined },
    });
  };

  return (
    <main className="min-h-screen py-12 text-[#8B4513] bg-[#f5f2ef]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Gourmet Snacks & Pickles
          </h1>
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="md:hidden bg-yellow-500 text-[#8B4513] px-4 py-2 rounded-full font-semibold shadow hover:bg-yellow-400 transition"
          >
            {showCategories ? "Hide Categories" : "Categories"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside
            className={`bg-[#5C4033] rounded-2xl p-4 md:p-6 shadow-lg h-fit md:sticky md:top-28 transition-all duration-300 ${
              showCategories ? "block" : "hidden md:block"
            } w-full md:w-1/4`}
          >
            <h2 className="text-lg font-semibold mb-4 text-yellow-300">Categories</h2>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowCategories(false);
                  }}
                  className={`text-left px-4 py-2 rounded-xl text-white transition-all duration-300 font-medium ${
                    activeCategory === cat
                      ? "bg-yellow-500 shadow-md"
                      : "hover:bg-yellow-600/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-yellow-300 mb-2">
                Filter by Price
              </h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice as any}
                  onChange={(e) =>
                    setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  className="w-1/2 px-3 py-2 rounded-lg text-[#8B4513]"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice as any}
                  onChange={(e) =>
                    setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  className="w-1/2 px-3 py-2 rounded-lg text-[#8B4513]"
                />
              </div>
              <button
                onClick={() => {
                  setMinPrice("");
                  setMaxPrice("");
                }}
                className="mt-3 text-sm text-yellow-400 hover:underline"
              >
                Reset
              </button>
            </div>

            <Link
              to="/cart"
              className="mt-6 block text-center bg-yellow-500 text-[#8B4513] rounded-full py-2 font-semibold shadow hover:bg-yellow-400 transition"
            >
              View Cart
            </Link>
          </aside>

          {/* Products Grid */}
          <section className="flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search for snacks..."
                className="flex-1 w-full px-4 py-3 rounded-2xl text-[#8B4513] border border-yellow-300 focus:ring-2 focus:ring-yellow-400"
              />
              <select
                className="w-full sm:w-44 px-3 py-3 rounded-2xl border border-yellow-300 text-[#8B4513]"
                onChange={(e) => setActiveCategory(e.target.value)}
                value={activeCategory}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filtered.map((p: Product) => (
                <div
                  key={p.id}
                  className="bg-[#5C4033] rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
                >
                  {/* Image + Tag */}
                  <div className="relative w-full h-64 sm:h-56 md:h-64 lg:h-72">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    {p.tag && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded shadow">
                        {p.tag}
                      </span>
                    )}
                    {p.isVeg !== undefined && (
                      <span
                        className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded shadow ${
                          p.isVeg
                            ? "bg-green-600 text-white"
                            : "bg-gray-800 text-red-400"
                        }`}
                      >
                        {p.isVeg ? "Veg" : "Non-Veg"}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between relative">
                    {/* Product Name */}
                    <h3 className="text-white font-bold text-lg mb-2 truncate">{p.name}</h3>

                    {/* Mobile Cart Icon (bottom-left) */}
                    <button
                      onClick={() => handleAdd(p.id)}
                      className="sm:hidden absolute top-8 left-64 bg-yellow-400 hover:bg-yellow-300 text-[#8B4513] p-2 rounded-full shadow transition"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={20} />
                    </button>

                    <p className="text-yellow-300 text-sm mb-3">
                      From Rs. {p.prices["250g"]}
                    </p>

                    {/* Weight Selector */}
                    <select
                      className="w-full mt-2 px-3 py-2 rounded bg-[#8B4513] text-white border border-yellow-300"
                      value={weightMap[p.id] || "250g"}
                      onChange={(e) =>
                        setWeightMap((s) => ({
                          ...s,
                          [p.id]: e.target.value as WeightKey,
                        }))
                      }
                    >
                      {weightOptions.map((w) => (
                        <option key={w} value={w}>
                          {w} - Rs. {p.prices[w]}
                        </option>
                      ))}
                    </select>

                    {/* Quantity Selector */}
                    {/* Mobile center-aligned version */}
                    <div className="flex justify-center sm:hidden mt-4">
                      <div className="flex items-center gap-3 bg-[#704833] px-4 py-2 rounded-full">
                        <button
                          onClick={() =>
                            setQtyMap((s) => ({
                              ...s,
                              [p.id]: Math.max(1, (s[p.id] || 1) - 1),
                            }))
                          }
                          className="bg-yellow-500 text-[#8B4513] px-3 py-1 rounded-full font-bold"
                        >
                          -
                        </button>
                        <span className="text-white font-semibold">
                          {qtyMap[p.id] || 1}
                        </span>
                        <button
                          onClick={() =>
                            setQtyMap((s) => ({
                              ...s,
                              [p.id]: (s[p.id] || 1) + 1,
                            }))
                          }
                          className="bg-yellow-500 text-[#8B4513] px-3 py-1 rounded-full font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Desktop layout for quantity + Add to Cart */}
                    <div className="hidden sm:flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-[#704833] px-3 py-2 rounded-full">
                        <button
                          onClick={() =>
                            setQtyMap((s) => ({
                              ...s,
                              [p.id]: Math.max(1, (s[p.id] || 1) - 1),
                            }))
                          }
                          className="bg-yellow-500 text-[#8B4513] px-3 py-1 rounded-full font-bold"
                        >
                          -
                        </button>
                        <span className="text-white font-semibold">
                          {qtyMap[p.id] || 1}
                        </span>
                        <button
                          onClick={() =>
                            setQtyMap((s) => ({
                              ...s,
                              [p.id]: (s[p.id] || 1) + 1,
                            }))
                          }
                          className="bg-yellow-500 text-[#8B4513] px-3 py-1 rounded-full font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleAdd(p.id)}
                        className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-full transition"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full text-center text-yellow-100 py-20">
                  No products found.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
