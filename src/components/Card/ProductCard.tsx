import React from "react";
import { Link } from "react-router-dom";
import { noimage } from "../../assets/images";

interface Discount {
  type: string;
  value: number;
}

interface Review {
  id: string;
  username: string;
  rating: number;
  comment: string;
}

interface Product {
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

// interface Category {
//   id: string;
//   title: string;
// }

// interface Brand {
//   id: string;
//   name: string;
// }

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    // <div className="border p-4">
    //   <img src={product.images[0]} alt={product.title} className="w-full h-auto" />
    //   <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
    //   <p className="text-gray-600">${product.price.toFixed(2)}</p>
    //   {/* Add buttons or actions */}
    // </div>
    <>
      <Link to={`/single-product/${product.id}`} key={product.id}>
        <div className="transition duration-300 hover:scale-105 flex flex-col items-center gap-2">
          <div className="">
            <img
              src={product.images[0] || noimage}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-notosanslao flex flex-col items-center justify-center gap-1 text-[0.8rem]  sm:text-[1rem] lg:text-[1.2rem]">
            <p className="mt-2 leading-none  hover:text-gray-600 transition font-bold">
              {product.title}
            </p>
            <p className="text-[#024E82]">{product.price} LAK</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
