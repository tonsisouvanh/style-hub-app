import React from "react";
import { Link } from "react-router-dom";
import { noimage } from "../../assets/images";
import { Product } from "../../types";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
// interface Discount {
//   type: string;
//   value: number;
// }

// interface Review {
//   id: string;
//   username: string;
//   rating: number;
//   comment: string;
// }

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   discount: Discount | null;
//   images: string[];
//   colors: string[];
//   sizes: string[];
//   categories: string[];
//   brand: string;
//   isNewArrival: boolean;
//   isFeatured: boolean;
//   ratings: number;
//   reviews: Review[];
// }

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
        <div className="flex flex-col items-center gap-2 transition duration-300 hover:scale-105">
          <div className="">
            <img
              src={product.images[0] || noimage}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 font-notosanslao text-[0.8rem]  sm:text-[1rem] lg:text-[1.2rem]">
            <p className="mt-2 font-bold  leading-none transition hover:text-gray-600">
              {product.title}
            </p>
            <div className="flex flex-col items-center justify-center ">
              <span
                className={`text-[1rem] text-gray-500  lg:text-[1.1rem] ${
                  product?.discount && "line-through"
                }`}
              >
                {formatPrice(product?.price || 0)}
              </span>

              {product?.discount && (
                <span className="text-[1rem] text-[#024E82] lg:text-[1.1rem]">
                  {formatPrice(
                    calculateDiscountedPrice(product?.price, product.discount),
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
