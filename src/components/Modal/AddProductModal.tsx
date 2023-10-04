import React, { useState } from "react";
import { Product } from "../../types";
import AddImages from "./AddImages";
import DropdownSelect from "../../pages/protected/item/components/DropdownSelect";
import InputText from "../Admin/Input/InputText";
import InputNumber from "../Admin/Input/InputNumber";
import { LuImport } from "react-icons/lu";
type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const categories = ["Tops", "Bottoms", "Bounce"];
const globalLabelStyle = "label-text font-bold";

const initialProduct: Product = {
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
  stock: 1,
};
const AddProductModal = (props: Props) => {
  const [productFormData, setProductFormData] =
    useState<Product>(initialProduct);

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  // const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [addedImages, setAddedImages] = useState<string[]>([]);
  const [isNewArrivalChecked, setIsNewArrivalChecked] = useState<boolean>(
    initialProduct.isNewArrival,
  );
  const [isFeaturedChecked, setIsFeaturedChecked] = useState<boolean>(
    initialProduct.isFeatured,
  );

  const now = new Date();
  const currentDate = now.toLocaleDateString();

  // Function to handle adding an image URL
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
        console.log(index);
        updatedImages = updatedImages.filter((_, i) => i !== index);
        break;
      default:
        updatedImages = [];
        break;
    }
    setAddedImages(updatedImages);
  };
  // Handle form field changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setProductFormData({
      ...productFormData,
      [name]: value,
    });
  };

  // Handle discount change
  const handleDiscountChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setProductFormData(
      (prevState) =>
        ({
          ...prevState,
          discount: {
            ...prevState.discount,
            [name]: name === "value" ? parseInt(value) : value,
          },
        }) as Product,
    );
  };

  // Handle multi-select checkbox change
  const handleMultiSelectChange = (
    name: string,
    selectedOptions: string[],
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (selectedOptions.includes(name)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== name));
    } else {
      setSelectedOptions([...selectedOptions, name]);
    }
  };

  // Handle checkbox change for sizes, colors, and categories
  const handleCheckboxChange = (name: string, type: string) => {
    switch (type) {
      case "sizes":
        handleMultiSelectChange(name, selectedSizes, setSelectedSizes);
        break;
      case "categories":
        handleMultiSelectChange(
          name,
          selectedCategories,
          setSelectedCategories,
        );
        break;
      default:
        break;
    }
  };

  // Handle "New Arrival" checkbox change
  const handleNewArrivalChange = () => {
    setIsNewArrivalChecked(!isNewArrivalChecked);
    setProductFormData({
      ...productFormData,
      isNewArrival: !isNewArrivalChecked,
    });
  };

  // Handle "Featured" checkbox change
  const handleFeaturedChange = () => {
    setIsFeaturedChecked(!isFeaturedChecked);
    setProductFormData({
      ...productFormData,
      isFeatured: !isFeaturedChecked,
    });
  };

  const handleCloseModal = () => {
    props.setOpenModal(false);
    setAddedImages([]);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct: Product = {
      ...productFormData,
      sizes: selectedSizes,
      // colors: selectedColors,
      images: addedImages,
      categories: selectedCategories,
    };

    // Add your logic to save or update the product data
    console.log(updatedProduct);

    setProductFormData(initialProduct);
  };

  return (
    <dialog
      id="my_modal_1"
      className={`modal ${props.openModal && "modal-open"}`}
    >
      <div className="modal-box font-notosanslao">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="flex items-center gap-1 text-lg font-bold">
            ເພີ່ມສິນຄ້າເຂົ້າສຕ໋ອກ
          </h3>
          <span className="text-sm text-neutral-content">{currentDate}</span>
        </div>
        <div className="divider">
          <LuImport
            size={60}
            className="mask mask-squircle rounded-full bg-primary p-2 text-white"
          />
        </div>
        <form onSubmit={handleSubmit} action="">
          {/* Input */}
          <div className="flex items-center gap-2">
            {/* Product Name */}
            <InputText
              inputValue={productFormData.name}
              inputName="name"
              inputPlaceholder="Abc..."
              inputLabel="ຊື່"
              handleInputChange={handleInputChange}
            />
            {/* Brand Name */}
            <InputText
              inputValue={productFormData.brand}
              inputName="brand"
              inputPlaceholder="Abc..."
              inputLabel="ແບຣນເສື້ອ"
              handleInputChange={handleInputChange}
            />
          </div>
          {/* Description */}
          <div>
            <label className="label">
              <span className={globalLabelStyle}>ອະທິບາຍ</span>
            </label>
            <textarea
              name="description"
              value={productFormData.description}
              onChange={handleInputChange}
              className="textarea-bordered textarea max-h-24 w-full transition duration-300 hover:shadow-md focus:outline-none"
              placeholder="Description about the product"
            ></textarea>
          </div>
          {/* Price */}
          <div className="flex w-full items-center gap-2">
            {/* Import Price */}
            <InputNumber
              inputLabel="ລາຄານຳເຂົ້າ"
              inputName="importPrice"
              inputPlaceholder="25000, 30000..."
              inputMin={0}
              inputValue={productFormData.importPrice}
              handleInputChange={handleInputChange}
            />
            {/* Price */}
            <InputNumber
              inputLabel="ລາຄາຂາຍ"
              inputName="price"
              inputPlaceholder="25000, 30000..."
              inputMin={0}
              inputValue={productFormData.price}
              handleInputChange={handleInputChange}
            />
          </div>
          {/* Price end */}
          {/* Discount */}
          <div className="flex items-center gap-2">
            <div className="">
              <label className="label">
                <span className={globalLabelStyle}>ປະເພດ Sale</span>
              </label>
              <select
                name="type"
                value={productFormData.discount?.type}
                onChange={handleDiscountChange}
                className="select-bordered select select-sm w-fit max-w-xs"
              >
                <option value="percentage">%</option>
                <option value="fixed">ຈຳນວນ</option>
              </select>
            </div>
            <InputNumber
              inputLabel="% / ລາຄາ"
              inputName="value"
              inputPlaceholder="20000, 25000, 10, 5,20, ..."
              inputMin={0}
              inputValue={productFormData.discount?.value ?? 0}
              handleInputChange={handleDiscountChange}
            />

            <InputNumber
              inputLabel="Rating"
              inputName="ratings"
              inputPlaceholder="1 - 5"
              inputMin={0}
              inputMax={5}
              inputValue={productFormData.ratings}
              handleInputChange={handleInputChange}
            />
          </div>
          {/* Discount end*/}

          {/* multiple checkbox input */}
          <div className="my-4 space-y-2">
            {/* Size selection */}
            <DropdownSelect
              title={"ຂະໜາດ"}
              options={sizes}
              selectedOptions={selectedSizes}
              handleCheckboxChange={handleCheckboxChange}
              onChangeType="sizes"
            />
            {/* Category selection */}
            <DropdownSelect
              title={"ໝວດໝູ່"}
              options={categories}
              selectedOptions={selectedCategories}
              handleCheckboxChange={handleCheckboxChange}
              onChangeType="categories"
            />
          </div>
          {/* multiple checkbox input end*/}

          {/* Checkbox new arraival and featured */}
          <div className="flex items-center gap-10 md:gap-28">
            <label className="label w-full cursor-pointer space-x-2 rounded-md">
              <span className="label-text whitespace-nowrap font-bold">
                ເຄື່ອງມາໃໝ່
              </span>
              <input
                type="checkbox"
                onChange={handleNewArrivalChange}
                checked={isNewArrivalChecked}
                className="toggle"
              />
            </label>
            <label className="label w-full cursor-pointer space-x-2 rounded-md">
              <span className="label-text whitespace-nowrap font-bold">
                ເອົາຂື້ນໂຊ
              </span>
              <input
                onChange={handleFeaturedChange}
                checked={isFeaturedChecked}
                type="checkbox"
                className="toggle"
              />
            </label>
          </div>
          {/* Checkbox new arraival and featured end*/}

          {/* Stock quantity */}
          <InputNumber
            inputLabel="ຈຳນວນ"
            inputName="stock"
            inputPlaceholder="Stock quantity"
            inputMin={0}
            inputValue={productFormData.stock}
            handleInputChange={handleInputChange}
          />

          {/* Add image url */}
          <AddImages
            addedImages={addedImages}
            handleAddImagesUrl={handleAddImagesUrl}
          />
          {/* Add image url end*/}

          {/* Input end*/}
          {/* Button */}
          <div className="modal-action">
            <button
              type="submit"
              className="btn-primary btn w-full max-w-[8rem] text-lg"
            >
              ເພີ່ມ
            </button>
            <button
              onClick={handleCloseModal}
              className="btn-accent btn w-full max-w-[8rem] text-lg"
            >
              ຍົກເລີກ
            </button>
          </div>
          {/* Button end */}
        </form>
      </div>
    </dialog>
  );
};

export default AddProductModal;
