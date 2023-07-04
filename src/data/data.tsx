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
    image:
      "https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=1380&t=st=1688232268~exp=1688232868~hmac=365921958b36c79a4687b01febcb066dad460557ef86550fde8fc95b72fb77ac",
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
    title: "Plain White Shirt",
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
    id: 1,
    title: "Gray Polo Shirt",
    price: 49.00,
    image: pro9,
  },
  {
    id: 2,
    title: "Red Shirt",
    price: 69.00,
    image: pro10,
  },
  {
    id: 3,
    title: "Polo White Shirt",
    price: 29.00,
    image: pro11,
  },
  {
    id: 4,
    title: "Pink Casual Shirt",
    price: 29.00,
    image: pro12,
  },
];
