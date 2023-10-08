import { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { sizes } from "../../data/data";
import { Inventory } from "../../types";

type Props = {
  addedInventory: Inventory[];
  handleAddInventory: (
    inventory: Inventory,
    index: number,
    handleType: string,
  ) => void;
};

const AddInventory = ({ addedInventory, handleAddInventory }: Props) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const handleClickAdd = () => {
    if (selectedSize && quantity > 0) {
      // Create a size string with the size and quantity
      const newInventory = {
        size: selectedSize,
        quantity: quantity,
      };

      // Add the new size to the addedSizes array
      handleAddInventory(newInventory, addedInventory.length, "add");

      // Clear the selected size and quantity
      setSelectedSize("");
      setQuantity(0);
      setShowWarning(false);
    } else {
      // Show a warning if size or quantity is not selected
      setShowWarning(true);
    }
  };

  const handleEdit = (size: string, quantity: number) => {
    setSelectedSize(size);
    setQuantity(quantity);
  };

  return (
    <>
      <div className="collapse-arrow collapse mt-3 border border-gray-200 transition duration-300 hover:shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between font-bold text-base-content peer-checked:bg-base-200 peer-checked:text-base-content">
          <div className="label-text flex items-center gap-1">
            <span>ຂະໜາດ & ຈຳນວນ</span>
          </div>
        </div>
        <div className="collapse-content text-base-content peer-checked:bg-base-200 peer-checked:text-base-content">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <select
                className="select-bordered select select-sm w-full max-w-xs focus:outline-none"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option disabled value="">
                  size
                </option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              <input
                className="input-bordered input input-sm w-full focus:outline-none"
                name="quantity"
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                disabled={!selectedSize || quantity <= 0}
                className="btn-primary btn-sm btn"
                onClick={handleClickAdd}
              >
                +
              </button>
              <span
                onClick={() =>
                  handleAddInventory({ size: "", quantity: 0 }, 0, "clear")
                }
                className="btn-error btn-outline btn-sm btn"
              >
                <AiOutlineClear />
              </span>
            </div>
            {showWarning && (
              <p className="text-sm text-error">
                Please select a size and enter a valid quantity.
              </p>
            )}
            <div>
              {/* <ul className="flex flex-wrap items-center gap-x-5 gap-y-2"> */}
              <ul className="grid grid-flow-row grid-cols-2 gap-2">
                {addedInventory &&
                  addedInventory?.map((inven, index) => (
                    <li key={inven.size} className="flex items-center gap-x-1">
                      <div className="kbd kbd-md flex items-center gap-2">
                        <span className="font-bold">{inven.size}</span>=
                        <span className="font-bold">{inven.quantity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span
                          className="btn-neutral btn-outline btn-sm btn w-[2.5rem]"
                          onClick={() => handleEdit(inven.size, inven.quantity)}
                        >
                          <HiPencil />
                        </span>
                        <span
                          className="btn-neutral btn-outline btn-sm btn w-[2.5rem]"
                          onClick={() =>
                            handleAddInventory(
                              { size: inven.size, quantity: inven.quantity },
                              index,
                              "del",
                            )
                          }
                        >
                          -
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInventory;
