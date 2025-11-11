export type WeightKey = "250g" | "500g" | "1000g";

export interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  prices: Record<WeightKey, number>;
  description?: string;
}

export const categories = ["All", "Veg", "Non-Veg"];

export const products: Product[] = [
  // Existing sample items
  {
    id: "mix-001",
    name: "Magaya Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762845580/magaya_dmjzra.jpg",
    prices: { "250g": 115, "500g": 230, "1000g": 460 },
    description: "Spicy crunchy mixture with peanuts and curry leaves.",
  },
/*   {
    id: "mix-002",
    name: "Spicy Tomato Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680333/Spicy_Tomato_Pickle_zmvlal.jpg",
    prices: { "250g": 90, "500g": 170, "1000g": 320 },
    description: "Tangy tomato-flavored mixture.",
  }, */

  // 🥦 VEG PICKLES (20 ITEMS)
  {
    id: "veg-001",
    name: "Mango Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680335/Mango_Avakaya_Pickle_lmpaxv.webp",
    prices: { "250g": 125, "500g": 250, "1000g": 500 },
    description: "Authentic Andhra-style spicy mango pickle with mustard and garlic.",
  },
  {
    id: "veg-002",
    name: "Gongura Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680333/Gongura_Pickle_w7ljx9.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Tangy and spicy gongura (sorrel leaves) pickle from Andhra.",
  },
  {
    id: "veg-003",
    name: "Lemon Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680332/Lemon_Pickle_fq0jy4.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Zesty lemon pickle with a blend of traditional spices.",
  },
  {
    id: "veg-004",
    name: "Tomato Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680332/Tomato_Pickle_jr287r.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Homemade-style spicy tomato pickle with garlic flavor.",
  },
  {
    id: "veg-005",
    name: "Amla (Usirikaya) Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680333/Amla_Usirikaya_Pickle_mihcmy.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Tangy gooseberry pickle rich in vitamin C and flavor.",
  },
  {
    id: "veg-006",
    name: "Garlic Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680332/Garlic_Pickle_kpzmti.avif",
    prices: { "250g": 125, "500g": 250, "1000g": 500 },
    description: "Spicy and aromatic garlic pickle soaked in gingelly oil.",
  },
 /*  {
    id: "veg-007",
    name: "Green Chilli Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680332/Green_Chilli_Pickle_ffva5b.jpg",
    prices: { "250g": 100, "500g": 180, "1000g": 330 },
    description: "Fiery green chili pickle with mustard and lemon juice.",
  }, */
  {
    id: "veg-008",
    name: "Red Chilli Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Red_Chilli_Pickle_zrg9nf.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Traditional Andhra-style red chili pickle with sesame oil.",
  },
 /*  {
    id: "veg-009",
    name: "Curry Leaf Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Curry_Leaf_Pickle_t7opau.webp",
    prices: { "250g": 120, "500g": 220, "1000g": 400 },
    description: "Nutritious curry leaf pickle with tangy tamarind touch.",
  }, */
  {
    id: "veg-010",
    name: "Ridge Gourd (Beerakaya) Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762769921/Ridge_Gourd_Beerakaya_Pickle_ly072c.jpg",
    prices: { "250g": 100, "500g": 190, "1000g": 340 },
    description: "Unique ridge gourd pickle blended with red chili and tamarind.",
  },
/*   {
    id: "veg-011",
    name: "Brinjal (Vankaya) Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680330/Brinjal_Vankaya_Pickle_iohpux.jpg",
    prices: { "250g": 120, "500g": 220, "1000g": 400 },
    description: "Rich brinjal pickle with tamarind and mustard seeds.",
  }, */
  {
    id: "veg-012",
    name: "Bitter Gourd (Kakarakaya) Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680330/Bitter_Gourd_Kakarakaya_Pickle_t8ivyk.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "A perfect blend of bitter gourd and spicy masala flavors.",
  },
  {
    id: "veg-013",
    name: "Drumstick (Munagakaya) Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680327/Drumstick_Munagakaya_Pickle_k8al6n.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Delicious pickle made from tender drumsticks.",
  },
  {
    id: "veg-014",
    name: "Carrot Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680327/Carrot_Pickle_axt6qi.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Freshly grated carrots pickled with tangy spices.",
  },
  {
    id: "veg-015",
    name: "Coriander (Kothimeera) Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680328/Coriander_Kothimeera_Pickle_sdup3w.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Fragrant coriander leaves blended with tamarind and chili.",
  },
 /*  {
    id: "veg-016",
    name: "Onion Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Egg_Pickle_rnstlm.jpg",
    prices: { "250g": 100, "500g": 190, "1000g": 340 },
    description: "Sweet and spicy onion pickle cooked in mustard oil.",
  }, */
  {
    id: "veg-017",
    name: "Cashew Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762845470/Cashew_pzhddn.webp",
    prices: { "250g": 200, "500g": 400, "1000g": 800 },
    description: "Vibrant beetroot pickle with a mild spicy kick.",
  },
  {
    id: "veg-018",
    name: "Tamarind Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Tamarind_Pickle_ldqll3.jpg",
    prices: { "250g": 125, "500g": 250, "1000g": 500 },
    description: "Sweet and tangy tamarind pickle perfect with rice.",
  },
  {
    id: "veg-019",
    name: "Cauliflower Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762845470/cauilflower_jwy0kb.webp",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Crunchy cabbage pickle with chili and mustard seasoning.",
  },
  {
    id: "veg-020",
    name: "Ginger Pickle",
    category: "Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Ginger_Pickle_t2puei.jpg",
    prices: { "250g": 120, "500g": 230, "1000g": 460 },
    description: "Zesty ginger pickle with a perfect spicy and tangy balance.",
  },

  // 🍗 NON-VEG PICKLES (15 ITEMS)
 
 /*  {
    id: "nv-002",
    name: "Mutton Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Mutton_Pickle_zeodk6.webp",
    prices: { "250g": 200, "500g": 380, "1000g": 700 },
    description: "Tender mutton cubes marinated with Andhra spices.",
  }, */
  {
    id: "nv-003",
    name: "Prawn(Medium) Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680330/Prawn_Pickle_ujhsfs.jpg",
    prices: { "250g": 315, "500g": 625, "1000g": 1250 },
    description: "Juicy prawns cooked with spicy tamarind gravy and oil.",
  },
 {
    id: "nv-004",
    name: "Gongura Prawn(Medium) Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680330/Prawn_Pickle_ujhsfs.jpg",
    prices: { "250g": 325, "500g": 650, "1000g": 1300 },
    description: "Juicy prawns cooked with spicy tamarind gravy and oil.",
  },
 {
    id: "nv-005",
    name: "Prawn(Big) Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680330/Prawn_Pickle_ujhsfs.jpg",
    prices: { "250g": 365, "500g": 725, "1000g": 1450 },
    description: "Juicy prawns cooked with spicy tamarind gravy and oil.",
  },
  {
    id: "nv-006",
    name: "Korrameenu",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762846366/korrameenu_xa7xgx.jpg",
    prices: { "250g": 320, "500g": 650, "1000g": 1300 },
    description: "Boiled eggs soaked in spicy gingelly oil seasoning.",
  },
  /* {
    id: "nv-007",
    name: "Dry Fish Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Dry_Fish_Pickle_nkq4ca.jpg",
    prices: { "250g": 190, "500g": 360, "1000g": 660 },
    description: "Traditional dry fish pickle with garlic and chili masala.",
  }, */
  {
    id: "nv-008",
    name: "Boneless Chicken Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Boneless_Chicken_Garlic_Pickle_u5ffpq.jpg",
    prices: { "250g": 230, "500g": 480, "1000g": 950 },
    description: "Boneless chicken pickle with garlic and gingelly oil blend.",
  },
    {
    id: "nv-009",
    name: "Boneless Gonggura Chicken Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Boneless_Chicken_Garlic_Pickle_u5ffpq.jpg",
    prices: { "250g": 230, "500g": 480, "1000g": 950 },
    description: "Boneless chicken pickle with garlic and gingelly oil blend.",
  },
 /*  {
    id: "nv-009",
    name: "Spicy Chicken Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680328/Spicy_Chicken_Pickle_ytihon.jpg",
    prices: { "250g": 190, "500g": 350, "1000g": 630 },
    description: "Fiery chicken pickle for true spice lovers.",
  }, */
  {
    id: "nv-010",
    name: "Gongura Chicken(Bone)Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680327/Gongura_Mutton_Pickle_xestco.jpg",
    prices: { "250g": 220, "500g": 425, "1000g": 850 },
    description: "Sour gongura leaves blended with spicy chicken chunks.",
  },
   {
    id: "nv-001",
    name: "Chicken(Bone)Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680331/Chicken_Pickle_icpsvl.webp",
    prices: { "250g": 200, "500g": 400, "1000g": 800 },
    description: "Andhra-style boneless chicken pickle cooked with gingelly oil.",
  },
 /*  {
    id: "nv-011",
    name: "Gongura Mutton Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Gongura_Chicken_Pickle_tkavyu.jpg",
    prices: { "250g": 230, "500g": 430, "1000g": 800 },
    description: "Perfect mix of tangy gongura and spicy mutton masala.",
  }, */
  {
    id: "nv-012",
    name: "Natu Kodi Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Natu_Kodi_Pickle_bifu0h.jpg",
    prices: { "250g": 325, "500g": 650, "1000g": 1300 },
    description: "Country chicken pickle in traditional Andhra style.",
  },
   {
    id: "nv-013",
    name: "Natu Kodi(B/L) Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Natu_Kodi_Pickle_bifu0h.jpg",
    prices: { "250g": 425, "500g": 850, "1000g": 1700 },
    description: "Country chicken pickle in traditional Andhra style.",
  },
  {
    id: "nv-014",
    name: "Boneless Mutton Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680329/Boneless_Mutton_Pickle_uvxrqn.webp",
    prices: { "250g": 365, "500g": 725, "1000g": 1450 },
    description: "Soft boneless mutton pieces pickled in spicy masala.",
  },
/*   {
    id: "nv-015",
    name: "Squid (Kalamari) Pickle",
    category: "Non-Veg",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762680328/Squid_Kalamari_Pickle_jd5wm1.jpg",
    prices: { "250g": 220, "500g": 410, "1000g": 760 },
    description: "Coastal-style squid pickle with pepper and tamarind.",
  }, */
];

export default products;
