import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { noimage } from "../../assets/images";
import { Product } from "../../types";
import { BsFillBagPlusFill, BsBagCheckFill } from "react-icons/bs";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { RootState } from "../../store/store";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../feature/cart/CartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const handleAddToCart = () => {
    const { id, title, price, discount } = product;
    dispatch(
      addToCart({
        id: id,
        image: product.images[0],
        name: title,
        price,
        quantity: 1,
        discount: discount,
        selectedSize: product.sizes[0],
        sizes: product.sizes,
      }),
    );
  };
  return (
    <>
      <div className="flex h-full flex-col justify-between gap-1 border hover:border-2">
        <Link to={`/single-product/${product.id}`} key={product.id}>
          <div className="flex flex-col items-center gap-2 ">
            <div className="group relative overflow-hidden">
              <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-100/50 opacity-0 transition duration-300 group-hover:opacity-100">
                <BsSearch className="text-4xl text-cyan-700" />
              </div>
              <img
                src={product.images[0] || noimage}
                alt={product.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>
            <div className="flex-col items-center justify-center gap-1 px-1 font-notosanslao text-[0.7rem]  sm:text-[0.9rem] lg:text-[1rem]">
              <p className="mb-2 mt-2 font-bold leading-none transition hover:text-gray-600">
                {product.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 ">
                <span
                  className={`text-[0.8rem] text-gray-500  lg:text-[0.9rem] ${
                    product?.discount && "line-through"
                  }`}
                >
                  {formatPrice(product?.price || 0)}
                </span>

                {product?.discount && (
                  <span className="text-[0.8rem] text-[#024E82] lg:text-[0.9rem]">
                    {formatPrice(
                      calculateDiscountedPrice(
                        product?.price,
                        product.discount,
                      ),
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>

        {cartItems.find((item) => item.id === product.id) ? (
          <div className="group flex w-full cursor-pointer items-center justify-center gap-1 bg-cyan-700 py-2 font-notosanslao text-white lg:py-3">
            <span>ເພີ່ມແລ້ວ</span>
            <BsBagCheckFill className="text-lg transition group-hover:scale-110 lg:text-2xl" />
          </div>
        ) : (
          <div
            onClick={handleAddToCart}
            className="group flex w-full cursor-pointer items-center justify-center gap-1 bg-black py-2 font-notosanslao text-white lg:py-3"
          >
            <span>ເພີ່ມ</span>
            <BsFillBagPlusFill className="text-lg text-white transition group-hover:scale-110 lg:text-2xl" />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
