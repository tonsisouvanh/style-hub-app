import { useEffect } from "react";
import { CiCircleMore } from "react-icons/ci";
import { capitalizeFirstLetter } from "../../../../utils/utils";
import { Product } from "../../../../types";
import { noimage } from "../../../../assets/images";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import {
  deleteProduct,
  fetchProducts,
} from "../../../../feature/product/ProductSlice";
import { useAppDispatch } from "../../../../hook/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { toast } from "react-toastify";

type Props = {
  products: Product[];
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  setEditingProduct: (product: Product) => void;
};
const tableHeaders = [
  "ID",
  "name",
  "Image",
  "price",
  "quantity",
  "category",
  "new arraival",
  "featured",
  "rating",
];
const StockItems = ({ setOpenModal, setEditingProduct, products }: Props) => {
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.products);

  const handleDeleteProduct = async (productId: string) => {
    try {
      await dispatch(deleteProduct(productId));

      if (status === "succeeded") {
        toast.success("Product deleted successfully");
      } else {
        toast.error("Something went wrong while deleting the product");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the product");
    }
  };
  const handleClickEditProduct = (product: Product) => {
    setOpenModal(true);
    setEditingProduct(product);
  };

  console.log(products);
  return (
    <div>
      {status === "loading" && (
        <dialog id="my_modal_1" className="modal modal-open z-[9999]">
          <span className="loading loading-spinner loading-lg bg-white"></span>
        </dialog>
      )}
      <div className="min-h-[15rem] overflow-x-auto">
        <table className="table-pin-rows table-pin-cols table-xs table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              {tableHeaders.map((header) => (
                <th className="text-[1rem]" key={header}>
                  {capitalizeFirstLetter(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div
                    className={`dropdown-right dropdown`}
                    // className={`dropdown
                    // ${
                    //   index === products.length - 1 && products.length > 1
                    //     ? "dropdown-top"
                    //     : products.length === 1 && "dropdown-right"
                    // }
                    // `}
                  >
                    <label tabIndex={0} className="btn-ghost btn-xs btn m-1">
                      <CiCircleMore size={15} />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu rounded-box z-[1] w-32 bg-base-100 p-2 font-notosanslao shadow"
                    >
                      <li
                        onClick={() => handleDeleteProduct(product?.id ?? "")}
                      >
                        <span>
                          ລົບ
                          <AiFillDelete size={18} />
                        </span>
                      </li>
                      <li onClick={() => handleClickEditProduct(product)}>
                        <span>
                          ແກ້ໄຂ
                          <AiFillEdit size={18} />
                        </span>
                      </li>
                      <li>
                        <span>
                          ເບິ່ງສິນຄ້າ
                          <AiFillEye size={18} />
                        </span>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask h-12 w-12">
                        <img
                          src={product.images[0] || noimage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.categories}</td>
                <td>
                  <input
                    type="checkbox"
                    className="toggle toggle-xs"
                    checked={product?.isNewArrival}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="toggle toggle-xs"
                    checked={product?.isFeatured}
                  />
                </td>
                <td>{product.ratings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockItems;
