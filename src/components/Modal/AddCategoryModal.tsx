import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../hook/hooks";
import { addCategory } from "../../feature/categories/CategorySlice";
import { toast } from "react-toastify";

type Props = {
  openAddCateModal: boolean;
  setOpenAddCateModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddCategoryModal = ({ setOpenAddCateModal, openAddCateModal }: Props) => {
  const { status, data: categories } = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useAppDispatch();

  const [cate, setCate] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");


  const handleAddCategory = async () => {
    if (cate.trim() === "") {
      setShowWarning(true);
      setMessage("Category name cannot be empty");
    } else if (categories.some((category) => category.name === cate)) {
      // Check if the category already exists
      setShowWarning(true);
      setMessage("Category already exists");
    } else {
      try {
        // Dispatch the action and await the result
        await dispatch(addCategory(cate));

        // Check the status in the Redux store
        if (status === "succeeded") {
          setOpenAddCateModal(false);
          toast.success("Category added successfully");
        } else {
          toast.error("Something went wrong while adding the category");
        }
      } catch (error) {
        // Handle errors, e.g., network issues or Firebase errors
        toast.error("An error occurred while adding the category");
      }

      setCate("");
      setShowWarning(false);
      setMessage("");
    }
  };
  return (
    <dialog
      id="my_modal_5"
      className={`modal modal-bottom sm:modal-middle ${
        openAddCateModal && "modal-open"
      }`}
    >
      <form className="modal-box !max-w-[20rem]">
        <h3 className="text-lg font-bold">Add Category</h3>
        <input
          type="text"
          name="category"
          value={cate}
          onChange={(e) => setCate(e.target.value)}
          placeholder="Type here"
          className="input-bordered input input-sm mt-5 w-full max-w-xs"
        />
        <p className="text-xs text-error">{showWarning && message}</p>
        <div className="modal-action">
          <div className="dialog space-x-2">
            <button
              type="button"
              onClick={handleAddCategory}
              className="btn-primary btn-xs btn"
            >
              Add
            </button>
            <button
              onClick={() => setOpenAddCateModal(false)}
              type="button"
              className="btn-xs btn"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default AddCategoryModal;
