import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { formatPrice } from "../../utils/utils";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  updateCartItem,
} from "../../feature/cart/CartSlice";
import { FaHome } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import OrderButton from "../../components/Button/OrderButton";
import CartGrid from "./layout/CartGrid";
import CartTable from "./layout/CartTable";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState<{
    img: string;
    proId: string;
  }>();

  const subtotal = cartItems?.reduce((total, item) => {
    let discountedPrice = item.price;

    if (item.discount?.type === "percentage") {
      const discountAmount = (item.price * item.discount?.value) / 100;
      discountedPrice = item.price - discountAmount;
    } else {
      discountedPrice = item.price - (item.discount?.value || 0);
    }

    return total + discountedPrice * item.quantity;
  }, 0);

  const shippingFee = 0; // Replace with the shipping fee
  const total = subtotal + shippingFee;

  const handleCurrentImage = (img: string, proId: string) => {
    setCurrentImage({ img: img, proId: proId });
    console.log(img, proId);
  };
  const handleRemoveProduct = (id: string) => {
    dispatch(removeFromCart(id));
  };
  const handleSelectChange = (value: string, id: string) => {
    const itemToUpdate = cartItems.find((item) => item.id === id);
    if (itemToUpdate) {
      const updatedItem = { ...itemToUpdate, selectedSize: value };
      dispatch(updateCartItem(updatedItem));
    }
  };
  const handleClearallitems = () => {
    dispatch(clearCart());
  };
  const handleAddQuantity = (id: string, action: string | "incr") => {
    if (id) {
      action === "incr"
        ? dispatch(incrementQuantity(id))
        : dispatch(decrementQuantity(id));
    }
  };

  return (
    <div>
      <div className="rounded-div space-y-5 py-5">
        <div className="flex items-center gap-x-2 text-lg text-gray-600 md:text-xl">
          <div className="flex items-center gap-x-1 text-[#024E82]">
            <FaHome />
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </div>
          <span className=""> / </span>
          <div className="flex items-center gap-x-1 text-[#024E82]">
            <Link to="/all-products/all" className="hover:underline">
              All
            </Link>
          </div>
          <span className=""> / </span>
          <span>Shopping Cart</span>
        </div>
        <Link
          to="/all-products/all"
          className="sticky top-[4.6rem] z-40 flex w-fit items-center gap-1 rounded-sm bg-cyan-700 px-2 py-1 font-notosanslao text-white hover:bg-cyan-800 hover:no-underline"
        >
          <RiShoppingCartFill className="text-2xl" />

          {cartItems && cartItems.length > 0 ? "ຊອບຕໍ່!" : "ຊອບເລີຍ!"}
        </Link>
        {cartItems.length > 0 && cartItems ? (
          <>
            {/* //* DATA TABLE */}
            <div className="hidden w-full lg:flex">
              <CartTable
                handleRemoveProduct={handleRemoveProduct}
                handleSelectChange={handleSelectChange}
                handleAddQuantity={handleAddQuantity}
                cartItems={cartItems}
              />
            </div>

            {/* // * DATA GRID */}
            <div className="w-full lg:hidden lg:overflow-x-hidden">
              <CartGrid
                handleRemoveProduct={handleRemoveProduct}
                handleSelectChange={handleSelectChange}
                handleAddQuantity={handleAddQuantity}
                cartItems={cartItems}
              />
            </div>
          </>
        ) : (
          <h3 className="font-notosanslao">ບໍ່ມີເຄື່ອງໃນກະຕ່າ</h3>
        )}

        {/* //* CART SUMMARY */}
        <div className="max-w-[30rem]  rounded-lg bg-white p-4 font-notosanslao">
          {cartItems.length > 0 && cartItems && (
            <button
              onClick={handleClearallitems}
              className="mb-5 flex items-center gap-1 rounded-md bg-red-600 p-1 text-white hover:bg-red-700"
            >
              <BsTrash />
              ລົບທັງໝົດ
            </button>
          )}
          <div className="mb-4 text-xl font-semibold text-gray-800 md:text-2xl">
            ລວມລາຄາສິນຄ້າ
          </div>
          <div className="mb-2 flex justify-between text-lg">
            <span className="text-gray-600">ລວມ:</span>
            <span className="text-gray-800">{formatPrice(subtotal)}</span>
          </div>
          {/* <div className="mb-2 flex justify-between">
            <span className="text-gray-600">Shipping Fee:</span>
            <span className="text-gray-800">{formatPrice(0)}</span>
          </div> */}
          <hr className="my-2 border-t border-gray-300" />
          <div className="mt-2 flex justify-between">
            <span className="text-xl font-semibold">ລວມທັງໝົດ:</span>
            <span className="text-xl text-cyan-700">{formatPrice(total)}</span>
          </div>
          <OrderButton productData={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
