import State from "./components/State";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import StockItems from "./components/StockItems";
import AddProductModal from "../../../components/Modal/AddProductModal";
import { useState } from "react";


const Stock = () => {
  const { data: products } = useSelector((state: RootState) => state.products);
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log(products);
  return (
    <>
    
      <AddProductModal openModal={openModal} setOpenModal={setOpenModal} />
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
          <StockItems products={products} />
          {/*Stock Table end*/}
        </div>
      </div>
    </>
  );
};

export default Stock;
