export interface Category {
  id: string;
  name: string;
}

export interface CartItem {
  id: string;
  images: string[];
  selectedImg: string;
  name: string;
  price: number;
  discount: Discount | null;
  quantity: number;
  selectedSize: string;
  sizes: string[] | [];
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
  value: number;
  type: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  importPrice: number;
  price: number;
  discount?: Discount;
  images: string[];
  // colors: string[];
  sizes: string[];
  categories: string[];
  brand: string;
  isNewArrival: boolean;
  isFeatured: boolean;
  ratings: number;
  stock: number;
  // inventory: [{ quantity: number; size: string; color: string }];
}

export type Option = {
  value: string | "";
  label: string | "";
};
