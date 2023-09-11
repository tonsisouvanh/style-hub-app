import React from "react";
import { TiDelete } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { removeFromCart, updateCartItem } from "../../feature/cart/CartSlice";
import { FaHome } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import OrderButton from "../../components/Button/OrderButton";
import Select from "../../components/CustomSelect/Select";

const tableHeaders = [
  {
    label: "",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "Product",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "Price",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "Quantity",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "Size",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "Total",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
];

// Render the table headers using the map function
<tr>
  {tableHeaders.map((header, index) => (
    <th key={index} scope="col" className={header.className}>
      {header.label}
    </th>
  ))}
</tr>;

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems?.reduce((total, item) => {
    let discountedPrice = item.price;

    if (item.discount?.type === "percentage") {
      const discountAmount = (item.price * item.discount?.value) / 100;
      discountedPrice = item.price - discountAmount;
    }

    return total + discountedPrice * item.quantity;
  }, 0);

  const shippingFee = 0; // Replace with the shipping fee
  const total = subtotal + shippingFee;

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
          className="sticky top-[4.6rem] flex w-fit items-center gap-1 rounded-sm bg-cyan-700 px-2 py-1 font-notosanslao text-white hover:bg-cyan-800 hover:no-underline"
        >
          <RiShoppingCartFill className="text-2xl" />

          {cartItems && cartItems.length > 0 ? "ຊອບຕໍ່!" : "ຊອບເລີຍ!"}
        </Link>
        {cartItems.length > 0 && cartItems ? (
          <>
            <div className="hidden w-full lg:flex">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th key={index} scope="col" className={header.className}>
                        {header.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {cartItems.map((product) => (
                    <tr className="text-md" key={product.id}>
                      <td className="whitespace-nowrap py-4 pl-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-[5rem] w-[5rem] rounded object-cover"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" text-gray-900">{product.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center justify-start gap-x-5  text-gray-900 ">
                          <span
                            className={`text-gray-500  ${
                              product?.discount && "line-through"
                            }`}
                          >
                            {formatPrice(product?.price || 0)}
                          </span>

                          {product?.discount && (
                            <span className="text-[#024E82]">
                              {formatPrice(
                                calculateDiscountedPrice(
                                  product?.price,
                                  product.discount,
                                ),
                              )}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <Select
                          options={
                            product &&
                            product.sizes.map((size) => ({
                              value: size,
                              label: size,
                            }))
                          }
                          currOption={product.selectedSize}
                          onChange={(value) =>
                            handleSelectChange(value, product.id)
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" text-gray-900">{product.quantity}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" text-gray-900">
                          {formatPrice(
                            (product.discount
                              ? calculateDiscountedPrice(
                                  product?.price,
                                  product.discount,
                                )
                              : product.price) * product.quantity,
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap">
                        <div className=" text-gray-900">
                          <TiDelete
                            onClick={() => handleRemoveProduct(product.id)}
                            className="cursor-pointer text-lg"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* // * DATA GRID */}
            <div className="w-full lg:hidden lg:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cartItems.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border bg-white p-4"
                  >
                    <div className="h-50 mb-4 w-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full rounded object-cover"
                      />
                    </div>
                    <div className="mb-2 text-lg font-semibold text-gray-800">
                      {product.name}
                    </div>
                    <div className="mb-2 font-notosanslao text-sm text-gray-600">
                      <div className="flex items-center justify-start gap-x-5  text-gray-900 ">
                        <span className="text-lg">ລາຄາ:</span>
                        <span
                          className={`text-lg  text-gray-500 ${
                            product?.discount && "line-through"
                          }`}
                        >
                          {formatPrice(product?.price || 0)}
                        </span>

                        {product?.discount && (
                          <span className="text-lg text-[#024E82]">
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
                    <div className="mb-2 flex items-center gap-12 font-notosanslao">
                      {/* <span>Size: {product.selectedSize}</span> */}
                      <span>ຈຳນວນ: {product.quantity} ໂຕ</span>
                    </div>
                    <div className="mb-2">
                      <Select
                        options={product.sizes.map((size) => ({
                          value: size,
                          label: size,
                        }))}
                        currOption={product.selectedSize}
                        onChange={(value) =>
                          handleSelectChange(value, product.id)
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between font-notosanslao text-lg font-semibold text-cyan-700">
                      <span>
                        ລວມ: {formatPrice(product.price * product.quantity)}
                      </span>
                      <span
                        onClick={() => handleRemoveProduct(product.id)}
                        className="group relative"
                      >
                        <BsTrash className="cursor-pointer text-3xl text-red-600 transition duration-300 hover:scale-110" />
                        <p className="absolute -left-[0.8rem] -top-[2rem] whitespace-nowrap px-1 text-[0.7rem] text-black opacity-0 group-hover:opacity-100">
                          ລົບສິນຄ້າ
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <h3 className="font-notosanslao">ບໍ່ມີເຄື່ອງໃນກະຕ່າ</h3>
        )}

        {/* //? Total section */}
        <div className="max-w-[30rem] rounded-lg bg-white p-4 font-notosanslao">
          <div className="mb-4 text-2xl font-semibold text-gray-800">
            ລວມລາຄາສິນຄ້າ
          </div>
          {/* <div className="mb-2 flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-gray-800">{formatPrice(20000)}</span>
          </div> */}
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
