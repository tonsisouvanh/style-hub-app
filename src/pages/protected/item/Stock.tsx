import State from "./components/State";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import StockItems from "./components/StockItems";
import AddProductModal from "../../../components/Modal/AddProductModal";
import { useState } from "react";
import EditProductModal from "../../../components/Modal/EditProductModal";
import { Product } from "../../../types";

const Stock = () => {
  const { data: products } = useSelector((state: RootState) => state.products);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    importPrice: 0,
    price: 0,
    discount: {
      type: "percentage",
      value: 0,
    },
    images: [],
    sizes: [],
    categories: [],
    brand: "",
    isNewArrival: false,
    isFeatured: false,
    ratings: 0,
    stock: 0,
  });
  console.log(products);
  return (
    <>
      <AddProductModal openModal={openModal} setOpenModal={setOpenModal} />
      <EditProductModal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        editingProduct={editingProduct}
      />
      <div className="space-y-4">
        {/* State */}
        <State />
        {/* State end */}

        <p className="font-notosanslao">{products.length} ລາຍການ</p>
        <div className="container rounded-md border bg-white p-4 shadow-sm">
          {/* Filter  & search bar*/}
          <Filter openModal={openModal} setOpenModal={setOpenModal} />
          {/* Filter  & search bar end*/}

          <div className="divider"></div>

          {/* Pagination */}
          <Pagination />
          {/* Pagination end*/}

          <div className="divider"></div>

          {/*Stock Table */}
          <StockItems
            openModal={openEditModal}
            setOpenModal={setOpenEditModal}
            products={products}
            setEditingProduct={setEditingProduct}
          />
          {/*Stock Table end*/}
        </div>
      </div>
    </>
  );
};

export default Stock;
