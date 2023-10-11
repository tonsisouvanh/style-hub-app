import State from "./components/State";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import StockItems from "./components/StockItems";
import AddProductModal from "../../../components/Modal/AddProductModal";
import { useState } from "react";
import EditProductModal from "../../../components/Modal/EditProductModal";
import { Inventory, Product } from "../../../types";

const initialProduct: Product = {
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
  ratings: 1,
  stock: 1,
  inventory: [],
};

const Stock = () => {
  const { data: products } = useSelector((state: RootState) => state.products);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product>(initialProduct);

  const [addedImages, setAddedImages] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [addedInventory, setAddedInventory] = useState<Inventory[]>([]);
  const [selectedNumber, setSelectedNumber] = useState<number>(10); // Default to 5

  // // Function to handle adding an image URL
  const handleAddImagesUrl = (
    url: string,
    index: number,
    handleType: string,
  ) => {
    let updatedImages: string[] = [...addedImages];
    switch (handleType) {
      case "add":
        updatedImages[index] = url;
        break;
      case "del":
        updatedImages = updatedImages.filter((_, i) => i !== index);
        break;
      default:
        updatedImages = [];
        break;
    }
    setAddedImages(updatedImages);
  };

  // Function to handle adding  inventory
  const handleAddInventory = (
    newInventory: Inventory,
    index: number,
    handleType: string,
  ) => {
    let updateInventory: Inventory[] = [...addedInventory];
    const foundInventoryIndex = updateInventory.findIndex(
      (i) => i.size === newInventory.size,
    );
    switch (handleType) {
      case "add":
        if (foundInventoryIndex >= 0) {
          updateInventory[foundInventoryIndex] = newInventory;
        } else updateInventory[index] = newInventory;
        break;
      case "del":
        updateInventory = updateInventory.filter((_, i) => i !== index);
        break;
      default:
        updateInventory = [];
        break;
    }
    setAddedInventory(updateInventory);
  };
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])
  const renderedItems = products && products.slice(0, selectedNumber);

  return (
    <>
      <AddProductModal
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleAddImagesUrl={handleAddImagesUrl}
        addedImages={addedImages}
        setAddedImages={setAddedImages}
        handleAddInventory={handleAddInventory}
        addedInventory={addedInventory}
        setAddedInventory={setAddedInventory}
        openModal={openModal}
        setOpenModal={setOpenModal}
        initialProduct={initialProduct}
      />
      <EditProductModal
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleAddImagesUrl={handleAddImagesUrl}
        addedImages={addedImages}
        setAddedImages={setAddedImages}
        handleAddInventory={handleAddInventory}
        addedInventory={addedInventory}
        setAddedInventory={setAddedInventory}
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        editingProduct={editingProduct}
      />
      <div className="space-y-4">
        {/* State */}
        <State products={products} />
        {/* State end */}

        {/* <p className="font-notosanslao">{products.length} ລາຍການ</p> */}
        <div className="container rounded-md border bg-base-100 p-4 shadow-sm">
          {/* Filter  & search bar*/}
          <Filter openModal={openModal} setOpenModal={setOpenModal} />
          {/* Filter  & search bar end*/}

          <div className="divider"></div>

          {/* Pagination */}
          <Pagination
            selectedNumber={selectedNumber}
            setSelectedNumner={setSelectedNumber}
            itemNo={products.length}
          />
          {/* Pagination end*/}

          <div className="divider"></div>

          {/*Stock Table */}
          <StockItems
            openModal={openEditModal}
            setOpenModal={setOpenEditModal}
            products={renderedItems}
            setEditingProduct={setEditingProduct}
          />
          {/*Stock Table end*/}
        </div>
      </div>
    </>
  );
};

export default Stock;
