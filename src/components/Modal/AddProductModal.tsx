import React, { useState } from "react";
import { Product } from "../../types";
import AddImages from "./AddImages";
import DropdownSelect from "../../pages/protected/item/components/DropdownSelect";
import InputText from "../Admin/Input/InputText";
import InputNumber from "../Admin/Input/InputNumber";
import { LuImport } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addProduct } from "../../feature/product/ProductSlice";
import { useAppDispatch } from "../../hook/hooks";

type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const categories = ["tops", "bottoms", "bounce"];
const globalLabelStyle = "label-text font-bold";

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
};
const AddProductModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.products);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Product>();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [addedImages, setAddedImages] = useState<string[]>([]);
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
        updatedImages = updatedImages.filter((_, i) => i !== index);
        break;
      default:
        updatedImages = [];
        break;
    }
    setAddedImages(updatedImages);
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

  const handleCloseModal = () => {
    props.setOpenModal(false);
    setAddedImages([]);
  };

  // Handle form submission
  const handleSubmitForm: SubmitHandler<Product> = async (data: Product) => {
    const updatedProduct: Product = {
      ...data,
      sizes: selectedSizes,
      images: addedImages,
      categories: selectedCategories,
      price: Number(data.price),
      importPrice: Number(data.importPrice),
      ratings: Number(data.ratings),
      stock: Number(data.stock),
    };
    if (selectedCategories.length <= 0 || selectedSizes.length <= 0) {
      toast.warning("Please select at least one category and one size");
      return;
    }

    try {
      // Dispatch the action and await the result
      await dispatch(addProduct(updatedProduct));

      // Check the status in the Redux store
      if (status === "succeeded") {
        reset(initialProduct);
        handleCloseModal();
        toast.success("Product added successfully");
      } else {
        toast.error("Something went wrong while adding the product");
      }
    } catch (error) {
      // Handle errors, e.g., network issues or Firebase errors
      toast.error("An error occurred while adding the product");
    }
  };

  return (
    <>
      {status === "loading" && (
        <dialog id="my_modal_1" className="modal modal-open z-[9999]">
          <span className="loading loading-spinner loading-lg bg-primary"></span>
        </dialog>
      )}
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
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* Input */}
            <div className="flex items-center gap-2">
              {/* Product Name */}
              <InputText
                inputName="name"
                inputPlaceholder="Item a"
                inputLabel="ຊື່"
                register={register}
                errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
                errors={errors}
                validationRules={{
                  required: true,
                  maxLength: 150,
                }}
              />

              {/* Brand Name */}
              <InputText
                inputName="brand"
                inputPlaceholder="brand a"
                inputLabel="ແບຣນ"
                register={register}
                errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
                errors={errors}
                validationRules={{
                  required: false,
                }}
              />
            </div>
            {/* Description */}
            <div>
              <label className="label">
                <span className={globalLabelStyle}>ອະທິບາຍ</span>
              </label>
              <textarea
                {...register("description")}
                name="description"
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
                register={register}
                errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
                errors={errors}
                validationRules={{
                  required: true,
                  min: { value: 0, message: "ລາຄາຂັ້ນຕ່ຳ 0" },
                }}
              />
              {/* Price */}
              <InputNumber
                inputLabel="ລາຄາຂາຍ"
                inputName="price"
                inputPlaceholder="25000, 30000..."
                register={register}
                errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
                errors={errors}
                validationRules={{
                  required: true,
                  min: { value: 0, message: "ລາຄາຂັ້ນຕ່ຳ 0" },
                }}
              />
            </div>
            {/* Price end */}
            {/* Discount */}
            <div className="flex items-center gap-2">
              <div>
                <label className="label">
                  <span className={globalLabelStyle}>ປະເພດ Sale</span>
                </label>
                <select
                  {...register("discount.type")}
                  className="select-bordered select select-sm w-fit max-w-xs"
                >
                  <option value="percentage">%</option>
                  <option value="fixed">ຈຳນວນ</option>
                </select>
              </div>

              <InputNumber
                inputLabel="% / ລາຄາ"
                inputName={"discount.value" as keyof Product}
                inputPlaceholder="20000, 25000, 10, 5,20, ..."
                register={register}
                errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
                errors={errors}
                validationRules={{
                  required: false,
                  min: { value: 0, message: "ລາຄາຂັ້ນຕ່ຳ 0" },
                }}
              />

              <InputNumber
                inputLabel="Rating"
                inputName="ratings"
                inputPlaceholder="1 - 5"
                register={register}
                errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
                errors={errors}
                validationRules={{
                  required: false,
                  min: { value: 1, message: "*1-5" },
                  max: { value: 5, message: "*1-5" },
                }}
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
                  className="toggle"
                  {...register("isNewArrival")}
                />
              </label>
              <label className="label w-full cursor-pointer space-x-2 rounded-md">
                <span className="label-text whitespace-nowrap font-bold">
                  ເອົາຂື້ນໂຊ
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  {...register("isFeatured")}
                />
              </label>
            </div>
            {/* Checkbox new arraival and featured end*/}

            {/* Stock quantity */}
            <InputNumber
              inputLabel="ຈຳນວນ"
              inputName="stock"
              inputPlaceholder="Stock quantity"
              register={register}
              errorMessage="*ກາລຸນາຕື່ມຂໍ້ມູນ"
              errors={errors}
              validationRules={{
                required: true,
                min: { value: 0, message: "ຈຳນວນຂັ້ນຕ່ຳ 0" },
              }}
            />

            {/* Add image url */}
            <AddImages
              addedImages={addedImages}
              handleAddImagesUrl={handleAddImagesUrl}
            />
            {/* Add image url end*/}

            {/* Input end*/}

            {/* ========== Button ==========*/}
            <div className="modal-action sticky bottom-0">
              <button
                type="submit"
                className="btn-primary btn w-full max-w-[8rem] text-lg"
              >
                ເພີ່ມ
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="btn w-full max-w-[8rem] text-lg"
              >
                ຍົກເລີກ
              </button>
            </div>
            {/* ==========  Button end ==========*/}
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddProductModal;
