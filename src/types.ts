export interface Category {
  id: string;
  title: string;
}

export interface CartItem {
  id: string;
  // image: string;
  name: string;
  price: number;
  discount: Discount | null;
  quantity: number;
  size: string;
}

export interface Slide {
  id: number;
  image: string;
  caption: string;
}
export interface Brand {
  id: string;
  name: string;
}

export interface MenuItem {
  id: number;
  text: string;
  toPath: string;
}

export interface Discount {
  type: string;
  value: number | 0;
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: Discount | null;
  images: string[];
  colors: string[];
  sizes: string[];
  categories: string[];
  brand: string;
  isNewArrival: boolean;
  isFeatured: boolean;
  ratings: number;
  reviews: Review[];
}

export type Option = {
  value: string | "";
  label: string | "";
};
