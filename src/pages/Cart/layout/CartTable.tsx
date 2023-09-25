import React from "react";
import { CartItem } from "../../../types";
import { calculateDiscountedPrice, formatPrice } from "../../../utils/utils";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { noimage } from "../../../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    label: "Size",
    className:
      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
  },
  {
    label: "Quantity",
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
<tr>
  {tableHeaders.map((header, index) => (
    <th key={index} scope="col" className={header.className}>
      {header.label}
    </th>
  ))}
</tr>;

interface CartTableProps {
  cartItems: CartItem[];
  handleRemoveProduct: (id: string) => void;
  handleSelectChange: (value: string, id: string) => void;
  handleAddQuantity: (
    id: string,
    size: string,
    img: string,
    action: string | "incr",
  ) => void;
  handleSelectImage: (image: string, proId: string) => void;
}

const CartTable: React.FC<CartTableProps> = ({
  cartItems,
  handleRemoveProduct,
  // handleSelectChange,
  handleAddQuantity,
  // handleSelectImage,
}) => {
  return (
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
          <tr className="text-sm" key={product.id}>
            <td className="whitespace-nowrap py-4 pl-2">
              <LazyLoadImage
                className="h-[5rem] w-[5rem] rounded object-cover"
                src={product.selectedImg}
                alt={product.name}
                effect="blur"
                width="100%"
                height="100%"
                placeholderSrc={noimage}
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-notosanslao text-base text-gray-900">
              {product.name}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <div className="flex items-center justify-start gap-x-5 text-base text-gray-900">
                <span
                  className={`text-gray-500 ${
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
            <td className="text-base uppercase">
              {product.selectedSize.toUpperCase()}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full border text-base text-gray-500 hover:bg-sky-200 hover:text-cyan-700 focus:outline-none"
                    onClick={() =>
                      handleAddQuantity(
                        product.id,
                        product.selectedSize,
                        product.selectedImg,
                        "decr",
                      )
                    }
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="rounded border border-gray-300 px-2 py-0 text-sm">
                    {product.quantity}
                  </span>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full border text-base text-gray-500 hover:bg-sky-200 hover:text-cyan-700 focus:outline-none"
                    onClick={() =>
                      handleAddQuantity(
                        product.id,
                        product.selectedSize,
                        product.selectedImg,
                        "incr",
                      )
                    }
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-base text-gray-900">
              {formatPrice(
                (product.discount
                  ? calculateDiscountedPrice(product?.price, product.discount)
                  : product.price) * product.quantity,
              )}
            </td>
            <td className="whitespace-nowrap">
              <div className="text-base text-gray-900">
                <BsTrash
                  onClick={() => handleRemoveProduct(product.id)}
                  className="cursor-pointer text-lg text-red-600"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
