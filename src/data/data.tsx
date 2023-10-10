import { Slide, MenuItem } from "../types";

import { jimabanner, jimbbanner } from "../assets/images";

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const slides: Slide[] = [
  {
    id: 1,
    image: jimabanner,
    caption: "Slide 1",
  },
  {
    id: 2,
    image: jimbbanner,
    caption: "Slide 2",
  },
];

export const menuItems: MenuItem[] = [
  { id: 2, text: "Sale", toPath: "/all-products/sale" },
  { id: 3, text: "ເຄື່ອງມາໃໝ່", toPath: "/all-products/arrival" },
  { id: 4, text: "ກ່ຽວກັບພໍ່ຄ້າ", toPath: "/404" },
  { id: 5, text: "ຕິດຕໍ່", toPath: "/404" },
];

//Json data
[
  {
    id: "product-1",
    title: "ເສື້ອຍືດຜູ້ຍິງ",
    description: "A comfortable and stylish women's t-shirt.",
    price: 129000, // Price in LAK
    discount: {
      type: "percentage",
      value: 20,
    },
    images: [],
    colors: ["White", "Black", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
    categories: ["tops", "T-Shirts"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: true,
    isFeatured: false,
    ratings: 4.8,
    reviews: [
      {
        id: "review-1",
        username: "customer123",
        rating: 5,
        comment: "Love this t-shirt!",
      },
    ],
  },
  {
    id: "product-2",
    title: "Men's Hoodie",
    description: "A cozy and warm men's hoodie for colder days.",
    price: 249000, // Price in LAK
    discount: null,
    images: ["pro2", "pro3"], // Replace with actual image URLs or paths
    colors: ["Gray", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    categories: ["tops", "Hoodies"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: false,
    isFeatured: true,
    ratings: 4.5,
    reviews: [],
  },
  {
    id: "product-3",
    title: "Classic Denim Jeans",
    description: "Timeless and durable denim jeans for everyday wear.",
    price: 149000, // Price in LAK
    discount: {
      type: "fixed",
      value: 30000,
    },
    images: ["pro10", "pro11", "pro12"], // Replace with actual image URLs or paths
    colors: ["Gray", "Black", "Navy"],
    sizes: ["28", "30", "32", "34"],
    categories: ["bottoms", "Jeans"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: false,
    isFeatured: false,
    ratings: 4.2,
    reviews: [],
  },
  {
    id: "product-4",
    title: "Casual Sneakers",
    description: "Stylish and comfortable sneakers for casual outings.",
    price: 89000, // Price in LAK
    discount: null,
    images: ["pro5", "pro6"], // Replace with actual image URLs or paths
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10"],
    categories: ["Footwear"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: false,
    isFeatured: true,
    ratings: 4.6,
    reviews: [],
  },
  {
    id: "product-5",
    title: "Fitted Blouse",
    description: "Elegant and fitted blouse for formal occasions.",
    price: 189000,
    discount: {
      type: "percentage",
      value: 15,
    },
    images: ["pro7", "pro8"], // Replace with actual image URLs or paths
    colors: ["White", "Black", "Pink"],
    sizes: ["S", "M", "L"],
    categories: ["tops", "T-Shirts", "Blouses"], // Replaced with category titles
    brand: "Your Brand",
    isNewArrival: true,
    isFeatured: false,
    ratings: 4.9,
    reviews: [],
  },
  {
    id: "product-6",
    title: "Leather Backpack",
    description: "Stylish and durable leather backpack for daily use.",
    price: 269000, // Price in LAK
    discount: null,
    images: ["pro9", "pro10"], // Replace with actual image URLs or paths
    colors: ["Brown", "Black"],
    sizes: ["M", "L"],
    categories: ["Bags"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: false,
    isFeatured: false,
    ratings: 4.7,
    reviews: [],
  },
  {
    id: "product-7",
    title: "Cotton Polo Shirt",
    description: "Classic cotton polo shirt for a timeless look.",
    price: 99000, // Price in LAK
    discount: null,
    images: ["pro11", "pro12"], // Replace with actual image URLs or paths
    colors: ["White", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL"],
    categories: ["Polos"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: true,
    isFeatured: true,
    ratings: 4.3,
    reviews: [],
  },
  {
    id: "product-8",
    title: "Formal Dress Shoes",
    description: "Elegant formal dress shoes for special occasions.",
    price: 199000, // Price in LAK
    discount: {
      type: "fixed",
      value: 50000,
    },
    images: ["pro11", "pro12"], // Replace with actual image URLs or paths
    colors: ["Black", "Brown"],
    sizes: ["7", "8", "9", "10"],
    categories: ["Footwear", "Formal Shoes"], // Replaced with category titles
    brand: "Your Brand",
    isNewArrival: false,
    isFeatured: true,
    ratings: 4.6,
    reviews: [],
  },
  {
    id: "product-9",
    title: "Knit Sweater",
    description: "Warm and cozy knit sweater for colder seasons.",
    price: 179000, // Price in LAK
    discount: null,
    images: ["pro11", "pro12"], // Replace with actual image URLs or paths

    colors: ["Gray", "Beige", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    categories: ["tops", "Sweaters"], // Replaced with category title
    brand: "Your Brand",
    isNewArrival: true,
    isFeatured: false,
    ratings: 4.4,
    reviews: [],
  },
  {
    id: "product-10",
    title: "Denim Jacket",
    description: "Stylish denim jacket for a versatile look.",
    price: 219000,
    discount: {
      type: "percentage",
      value: 10,
    },
    images: ["pro11", "pro12"],
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
    categories: ["tops", "Jackets"],
    brand: "Your Brand",
    isNewArrival: true,
    isFeatured: false,
    ratings: 4.7,
    reviews: [],
  },
];

export const themes = [
  "winter",
  // "light",
  "black",
  // "dracula",
  "night"
  // "cupcake",
  // "bumblebee",
  // "emerald",
  // "corporate",
  // "synthwave",
  // "retro",
  // "cyberpunk",
  // "valentine",
  // "halloween",
  // "garden",
  // "forest",
  // "aqua",
  // "lofi",
  // "pastel",
  // "fantasy",
  // "wireframe",
  // "luxury",
  // "dracula",
  // "cmyk",
  // "autumn",
  // "business",
  // "acid",
  // "lemonade",
  // "night",
  // "coffee",
];
