import { Product, Slide, MenuItem, Category, Brand } from "../types";

import {
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
  pro6,
  pro7,
  pro8,
  pro9,
  pro10,
  pro11,
  pro12,
  slide3img,
  jimabanner,
  jimbbanner,
} from "../assets/images";

export const slides: Slide[] = [
  {
    id: 1,
    image: jimabanner,
    // "https://cdn.shopify.com/s/files/1/0434/1740/3558/files/slider3_2000x.jpg?v=1596460491",
    caption: "Slide 1",
  },
  {
    id: 2,
    image: jimbbanner,
    // "https://cdn.shopify.com/s/files/1/0434/1740/3558/files/slider1_2000x.jpg?v=1596456323",
    caption: "Slide 2",
  },
  // {
  //   id: 3,
  //   image: slide3img,
  //   caption: "Slide 3",
  // },
];

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
// }

export const menuItems: MenuItem[] = [
  { id: 2, text: "Sale", toPath: "/all-products/sale" },
  { id: 3, text: "ເຄື່ອງມາໃໝ່", toPath: "/all-products/arrival" },
  { id: 4, text: "ກ່ຽວກັບພໍ່ຄ້າ", toPath: "/404" },
  { id: 5, text: "ຕິດຕໍ່", toPath: "/404" },
];

export const newArrivalProducts: Product[] = [
  // {
  //   id: 1,
  //   title: "ເສື້ອເຊິດຂາວ",
  //   price: 15.99,
  //   images: pro1,
  // },
  // {
  //   id: 2,
  //   title: "Denim Jacket",
  //   price: 29.99,
  //   images: pro2,
  // },
  // {
  //   id: 3,
  //   title: "Black Polo Shirt",
  //   price: 24.99,
  //   images: pro3,
  // },
  // {
  //   id: 4,
  //   title: "Blue Sweatshirt",
  //   price: 18.99,
  //   images: pro4,
  // },
  // {
  //   id: 5,
  //   title: "Blue Plain Shirt",
  //   price: 22.99,
  //   images: pro5,
  // },
  // {
  //   id: 6,
  //   title: "Dark Blue Shirt",
  //   price: 27.99,
  //   images: pro6,
  // },
  // {
  //   id: 7,
  //   title: "Outcast T Shirt",
  //   price: 14.99,
  //   images: pro7,
  // },
  // {
  //   id: 8,
  //   title: "Polo Plain Shirt",
  //   price: 19.99,
  //   images: pro8,
  // },
];

export const topSellers: Product[] = [
  // {
  //   id: 9,
  //   title: "Gray Polo Shirt",
  //   price: 49.0,
  //   images: pro9,
  // },
  // {
  //   id: 10,
  //   title: "Red Shirt",
  //   price: 69.0,
  //   images: pro10,
  // },
  // {
  //   id: 11,
  //   title: "Polo White Shirt",
  //   price: 29.0,
  //   images: pro11,
  // },
  // {
  //   id: 12,
  //   title: "Pink Casual Shirt",
  //   price: 29.0,
  //   images: pro12,
  // },
];

// export const mockProducts:Product[] = [
//   {
//     id: "product-1",
//     title: "ເສື້ອຍືດຜູ້ຍິງ",
//     description: "A comfortable and stylish women's t-shirt.",
//     price: 129000, // Price in LAK
//     discount: {
//       type: "percentage",
//       value: 20,
//     },
//     images: [],
//     colors: ["White", "Black", "Blue", "Red"],
//     sizes: ["S", "M", "L", "XL"],
//     categories: ["category-1"],
//     brand: "Your Brand",
//     isNewArrival: true,
//     isFeatured: false,
//     ratings: 4.8,
//     reviews: [
//       {
//         id: "review-1",
//         username: "customer123",
//         rating: 5,
//         comment: "Love this t-shirt!",
//       },
//     ],
//   },
//   {
//     id: "product-2",
//     title: "Men's Hoodie",
//     description: "A cozy and warm men's hoodie for colder days.",
//     price: 249000, // Price in LAK
//     discount: null,
//     images: [pro2, pro3],
//     colors: ["Gray", "Black", "Navy"],
//     sizes: ["S", "M", "L", "XL"],
//     categories: ["category-2"],
//     brand: "Your Brand",
//     isNewArrival: false,
//     isFeatured: true,
//     ratings: 4.5,
//     reviews: [],
//   },
//   {
//     id: "product-3",
//     title: "Classic Denim Jeans",
//     description: "Timeless and durable denim jeans for everyday wear.",
//     price: 149000, // Price in LAK
//     discount: {
//       type: "fixed",
//       value: 30000,
//     },
//     images: [pro10,pro11,pro12],
//     colors: ["Gray", "Black", "Navy"],
//     sizes: ["28", "30", "32", "34"],
//     categories: ["category-3"],
//     brand: "Your Brand",
//     isNewArrival: false,
//     isFeatured: false,
//     ratings: 4.2,
//     reviews: [],
//   },
//   {
//     id: "product-4",
//     title: "Casual Sneakers",
//     description: "Stylish and comfortable sneakers for casual outings.",
//     price: 89000, // Price in LAK
//     discount: null,
//     images: [pro5, pro6],
//     colors: ["White", "Black", "Gray"],
//     sizes: ["7", "8", "9", "10"],
//     categories: ["category-4"],
//     brand: "Your Brand",
//     isNewArrival: false,
//     isFeatured: true,
//     ratings: 4.6,
//     reviews: [],
//   },
//   {
//     id: "product-5",
//     title: "Fitted Blouse",
//     description: "Elegant and fitted blouse for formal occasions.",
//     price: 189000, // Price in LAK
//     discount: {
//       type: "percentage",
//       value: 15,
//     },
//     images: [pro7, pro8],
//     colors: ["White", "Black", "Pink"],
//     sizes: ["S", "M", "L"],
//     categories: ["category-1", "category-5"],
//     brand: "Your Brand",
//     isNewArrival: true,
//     isFeatured: false,
//     ratings: 4.9,
//     reviews: [],
//   },
//   {
//     id: "product-6",
//     title: "Leather Backpack",
//     description: "Stylish and durable leather backpack for daily use.",
//     price: 269000, // Price in LAK
//     discount: null,
//     images: [pro8, pro9],
//     colors: ["Brown", "Black"],
//     sizes: ["One Size"],
//     categories: ["category-6"],
//     brand: "Your Brand",
//     isNewArrival: false,
//     isFeatured: false,
//     ratings: 4.7,
//     reviews: [],
//   },
//   {
//     id: "product-7",
//     title: "Cotton Polo Shirt",
//     description: "Classic cotton polo shirt for a timeless look.",
//     price: 99000, // Price in LAK
//     discount: null,
//     images: [pro8, pro9],
//     colors: ["White", "Navy", "Red"],
//     sizes: ["S", "M", "L", "XL"],
//     categories: ["category-7"],
//     brand: "Your Brand",
//     isNewArrival: true,
//     isFeatured: true,
//     ratings: 4.3,
//     reviews: [],
//   },
//   {
//     id: "product-8",
//     title: "Formal Dress Shoes",
//     description: "Elegant formal dress shoes for special occasions.",
//     price: 199000, // Price in LAK
//     discount: {
//       type: "fixed",
//       value: 50000,
//     },
//     images: [pro8, pro9],
//     colors: ["Black", "Brown"],
//     sizes: ["7", "8", "9", "10"],
//     categories: ["category-4", "category-8"],
//     brand: "Your Brand",
//     isNewArrival: false,
//     isFeatured: true,
//     ratings: 4.6,
//     reviews: [],
//   },
//   {
//     id: "product-9",
//     title: "Knit Sweater",
//     description: "Warm and cozy knit sweater for colder seasons.",
//     price: 179000, // Price in LAK
//     discount: null,
//     images: [pro8, pro9],
//     colors: ["Gray", "Beige", "Navy"],
//     sizes: ["S", "M", "L", "XL"],
//     categories: ["category-9"],
//     brand: "Your Brand",
//     isNewArrival: true,
//     isFeatured: false,
//     ratings: 4.4,
//     reviews: [],
//   },
//   {
//     id: "product-10",
//     title: "Denim Jacket",
//     description: "Stylish denim jacket for a versatile look.",
//     price: 219000, // Price in LAK
//     discount: {
//       type: "percentage",
//       value: 10,
//     },
//     images: [pro8, pro9],
//     colors: ["Blue"],
//     sizes: ["S", "M", "L", "XL"],
//     categories: ["category-10"],
//     brand: "Your Brand",
//     isNewArrival: true,
//     isFeatured: false,
//     ratings: 4.7,
//     reviews: [],
//   },
// ];

export const mockProducts = [
  {
    id: "product-1",
    title: "ເສື້ອຍືດຜູ້ຍິງ",
    description: "A comfortable and stylish women's t-shirt.",
    price: 129000, // Price in LAK
    discount: {
      type: "percentage",
      value: 20,
    },
    images: [pro3],
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
    images: [pro2, pro3], // Replace with actual image URLs or paths
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
    images: [pro10, pro11, pro12], // Replace with actual image URLs or paths
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
    images: [pro5, pro6], // Replace with actual image URLs or paths
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
    price: 189000, // Price in LAK
    discount: {
      type: "percentage",
      value: 15,
    },
    images: [pro7, pro8], // Replace with actual image URLs or paths
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
    images: [pro9, pro10], // Replace with actual image URLs or paths
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
    images: [pro11, pro12], // Replace with actual image URLs or paths
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
    images: [pro11, pro12], // Replace with actual image URLs or paths
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
    images: [pro11, pro12], // Replace with actual image URLs or paths

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
    images: [pro11, pro12],
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

export const mockCategories: Category[] = [
  {
    id: "category-1",
    title: "T-Shirts",
  },
  {
    id: "category-2",
    title: "Hoodies",
  },
  {
    id: "category-3",
    title: "Jeans",
  },
  {
    id: "category-4",
    title: "Footwear",
  },
  {
    id: "category-5",
    title: "Blouses",
  },
  {
    id: "category-6",
    title: "Bags",
  },
  {
    id: "category-7",
    title: "Polos",
  },
  {
    id: "category-8",
    title: "Formal Shoes",
  },
  {
    id: "category-9",
    title: "Sweaters",
  },
  {
    id: "category-10",
    title: "Jackets",
  },
];

export const mockBrands: Brand[] = [
  {
    id: "brand-1",
    name: "Your Brand",
  },
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
    price: 189000, // Price in LAK
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
