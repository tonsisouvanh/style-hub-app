import React from "react";
import { CartItem } from "../../../types";
import { calculateDiscountedPrice, formatPrice } from "../../../utils/utils";
import Select from "../../../components/CustomSelect/Select";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { noimage } from "../../../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fadeFromTopAnimate } from "../../../animation";

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
// Render the table headers using the map function
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
  handleAddQuantity: (id: string, action: string | "incr") => void;
  handleSelectImage: (image: string, proId: string) => void;
}

const CartTable: React.FC<CartTableProps> = ({
  cartItems,
  handleRemoveProduct,
  handleSelectChange,
  handleAddQuantity,
  handleSelectImage,
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
          <tr className="text-md" key={product.id}>
            <td className="whitespace-nowrap py-4 pl-2">
              <LazyLoadImage
                className="h-[5rem] w-[5rem] rounded object-cover"
                src={product.selectedImg}
                alt={product.name}
                effect="blur"
                width="100%"
                height="100%"
                placeholderSrc={noimage} // Set your placeholder image
              />
              <div className="flex w-full flex-wrap items-center justify-start gap-1">
                {product?.images.map((image, index) => (
                  <LazyLoadImage
                    key={index}
                    className={`h-[1.8rem] w-full cursor-pointer object-cover hover:border-[0.2rem] hover:border-sky-700
                ${
                  image === product.selectedImg &&
                  "border-[0.2rem] border-sky-700"
                }`}
                    src={image}
                    effect="blur"
                    alt=""
                    onClick={() => handleSelectImage(image, product.id)}
                  />
                ))}
              </div>
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
                onChange={(value) => handleSelectChange(value, product.id)}
                textSize=""
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <div className="flex items-center gap-2">
                <div className=" border px-2 py-0 text-gray-900">
                  {product.quantity}
                </div>

                <div className="flex items-center gap-5">
                  <AiOutlinePlus
                    className="cursor-pointer hover:text-cyan-700"
                    onClick={() => handleAddQuantity(product.id, "incr")}
                  />
                  <AiOutlineMinus
                    className="cursor-pointer hover:text-cyan-700"
                    onClick={() => handleAddQuantity(product.id, "decr")}
                  />
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <div className=" text-gray-900">
                {formatPrice(
                  (product.discount
                    ? calculateDiscountedPrice(product?.price, product.discount)
                    : product.price) * product.quantity,
                )}
              </div>
            </td>
            <td className="whitespace-nowrap">
              <div className=" text-gray-900">
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
