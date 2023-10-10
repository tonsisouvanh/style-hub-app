import React, { useState, useEffect } from "react";
import { Inventory, Product } from "../../types";
import AddImages from "./AddImages";
import DropdownSelect from "../../pages/protected/item/components/DropdownSelect";
import InputText from "../Admin/Input/InputText";
import InputNumber from "../Admin/Input/InputNumber";
import { LuEdit } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../hook/hooks";
import { updateProduct } from "../../feature/product/ProductSlice";
import AddInventory from "./AddInventory";
import AddCategoryModal from "./AddCategoryModal";

type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  editingProduct: Product;

  handleAddImagesUrl: (url: string, index: number, handleType: string) => void;
  addedImages: string[];
  setAddedImages: React.Dispatch<React.SetStateAction<string[]>>;

  handleAddInventory: (
    newInventory: Inventory,
    index: number,
    handleType: string,
  ) => void;
  addedInventory: Inventory[];
  setAddedInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};
const globalLabelStyle = "label-text font-bold";

const EditProductModal = ({
  setAddedImages,
  addedImages,
  handleAddImagesUrl,
  addedInventory,
  setAddedInventory,
  handleAddInventory,
  openModal,
  setOpenModal,
  selectedCategories,
  setSelectedCategories,
  editingProduct,
}: Props) => {
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.products);
  const [openAddCateModal, setOpenAddCateModal] = useState<boolean>(false);
  const { data: categories } = useSelector(
    (state: RootState) => state.categories,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>({ defaultValues: {} });

  const now = new Date();
  const currentDate = now.toLocaleDateString();

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

  const clearInput = () => {
    setAddedImages([]);
    setAddedInventory([]);
    setSelectedCategories([]);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    clearInput();
  };

  // Handle form submission
  const handleSubmitForm: SubmitHandler<Product> = async (data: Product) => {
    const totalQuantity = addedInventory.reduce((acc, currValue) => {
      return acc + currValue.quantity;
    }, 0);
    const updatedProduct: Product = {
      ...data,
      images: addedImages,
      categories: selectedCategories,
      price: Number(data.price),
      importPrice: Number(data.importPrice),
      ratings: Number(data.ratings),
      stock: totalQuantity,
      inventory: addedInventory,
    };

    if (selectedCategories.length <= 0) {
      toast.warning("Please select at least one category and one size");
      return;
    }
    try {
      await dispatch(updateProduct(updatedProduct));

      if (status === "succeeded") {
        handleCloseModal();
        toast.success("Product updated successfully");
      } else {
        toast.error("Something went wrong while updating the product");
      }
    } catch (error) {
      toast.error("An error occurred while updating the product");
    }
  };

  useEffect(() => {
    if (editingProduct) {
      Object.keys(editingProduct).forEach((key) => {
        setValue(key as keyof Product, editingProduct[key as keyof Product]);
      });
      setAddedImages(editingProduct && editingProduct?.images);
      setAddedInventory(editingProduct && editingProduct?.inventory);
      setSelectedCategories(editingProduct && editingProduct?.categories);
    }
  }, [
    setValue,
    setAddedImages,
    setAddedInventory,
    setSelectedCategories,
    editingProduct,
  ]);
  return (
    <>
      {status === "loading" && (
        <dialog id="my_modal_1" className="modal modal-open z-[9999]">
          <span className="loading loading-spinner loading-lg bg-primary"></span>
        </dialog>
      )}
      <dialog id="my_modal_1" className={`modal ${openModal && "modal-open"}`}>
        <dialog
          id="my_modal_5"
          className={`modal modal-bottom sm:modal-middle ${
            openAddCateModal && "modal-open"
          }`}
        >
          <AddCategoryModal
            openAddCateModal={openAddCateModal}
            setOpenAddCateModal={setOpenAddCateModal}
          />
        </dialog>
        <div className="modal-box font-notosanslao">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="flex items-center gap-1 text-lg font-bold">
              ເແກ້ໄຂສິນຄ້າເຂົ້າ
            </h3>
            <span className="text-sm text-neutral-content">{currentDate}</span>
          </div>
          <div className="divider">
            <LuEdit
              size={80}
              className="mask mask-squircle rounded-full bg-secondary p-2 text-white"
            />
          </div>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* Input */}
            <div className="flex items-center gap-2">
              {/* Product Name */}
              <InputText
                inputName="name"
                inputPlaceholder="Abc..."
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
                inputPlaceholder="Abc..."
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
                setValue={setValue}
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
                setValue={setValue}
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
                setValue={setValue}
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
                setValue={setValue}
              />
            </div>
            {/* Discount end*/}

            {/* multiple checkbox input */}
            <div className="my-4 space-y-2">
              {/* Category selection */}
              <button
                type="button"
                onClick={() => setOpenAddCateModal(true)}
                className="btn-outline btn-xs btn"
              >
                +ເພີ່ມໝວດໝູ່
              </button>
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

            {/* Add inventory */}
            <AddInventory
              addedInventory={addedInventory}
              handleAddInventory={handleAddInventory}
            />
            {/* Add image url */}
            <AddImages
              addedImages={addedImages}
              handleAddImagesUrl={handleAddImagesUrl}
            />
            {/* Add image url end*/}

            {/* Input end*/}

            {/* ========== Button ==========*/}
            <div className="modal-action sticky bottom-0 z-[9]">
              <button
                type="submit"
                className="btn-primary btn w-full max-w-[8rem] text-lg shadow-lg"
              >
                ແກ້ໄຂ
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="btn w-full max-w-[8rem] text-lg shadow-lg"
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

export default EditProductModal;
