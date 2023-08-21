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
} from "../assets/images";

interface Slide {
  id: number;
  image: string;
  caption: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0434/1740/3558/files/slider3_2000x.jpg?v=1596460491",
    caption: "Slide 1",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0434/1740/3558/files/slider1_2000x.jpg?v=1596456323",
    caption: "Slide 2",
  },
  {
    id: 3,
    image: slide3img,
    caption: "Slide 3",
  },
];

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

export const newArrivalProducts: Product[] = [
  {
    id: 1,
    title: "ເສື້ອເຊິດຂາວ",
    price: 15.99,
    image: pro1,
  },
  {
    id: 2,
    title: "Denim Jacket",
    price: 29.99,
    image: pro2,
  },
  {
    id: 3,
    title: "Black Polo Shirt",
    price: 24.99,
    image: pro3,
  },
  {
    id: 4,
    title: "Blue Sweatshirt",
    price: 18.99,
    image: pro4,
  },
  {
    id: 5,
    title: "Blue Plain Shirt",
    price: 22.99,
    image: pro5,
  },
  {
    id: 6,
    title: "Dark Blue Shirt",
    price: 27.99,
    image: pro6,
  },
  {
    id: 7,
    title: "Outcast T Shirt",
    price: 14.99,
    image: pro7,
  },
  {
    id: 8,
    title: "Polo Plain Shirt",
    price: 19.99,
    image: pro8,
  },
];

export const topSellers: Product[] = [
  {
    id: 9,
    title: "Gray Polo Shirt",
    price: 49.0,
    image: pro9,
  },
  {
    id: 10,
    title: "Red Shirt",
    price: 69.0,
    image: pro10,
  },
  {
    id: 11,
    title: "Polo White Shirt",
    price: 29.0,
    image: pro11,
  },
  {
    id: 12,
    title: "Pink Casual Shirt",
    price: 29.0,
    image: pro12,
  },
];

interface menuItem {
  id: number;
  text: string;
  toPath: string;
}
export const menuItems: menuItem[] = [
  { id: 2, text: "Sale", toPath: "/sale/:${status}" },
  { id: 3, text: "ເຄື່ອງມາໃໝ່", toPath: "/arrival/:${status}" },
  { id: 4, text: "ກ່ຽວກັບເຮົາ", toPath: "/about" },
  { id: 5, text: "ຕິດຕໍ່", toPath: "/contact" },
];
