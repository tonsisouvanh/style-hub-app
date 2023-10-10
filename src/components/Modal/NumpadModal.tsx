import React, { useState, useEffect } from "react";
import Numpad from "../Input/Numpad";
import { AiFillCloseCircle } from "react-icons/ai";
import { formatPrice } from "../../utils/utils";
import { Product } from "../../types";

interface NumpadProps {
  openNumpadModal: boolean;
  setOpenNumpadModal: (value: boolean) => void;
  inputName: keyof Product;
  setValue: (name: keyof Product, value: string) => void;
}

const NumpadModal: React.FC<NumpadProps> = ({
  openNumpadModal,
  setOpenNumpadModal,
  inputName,
  setValue,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleNumberClick = (number: string) => {
    setInputValue((prevValue) => prevValue + number);
  };

  const handleClearClick = () => {
    setInputValue("");
  };

  const handleDeleteClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleEnterClick = () => {
    if (inputValue.length < 10) {
      setValue(inputName, inputValue);
    }
  };

  //   TO DISABLE KEYBOARD INPUT
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
    };

    if (openNumpadModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openNumpadModal]);
  
  return (
    <dialog
      id="my_modal_5"
      className={`modal modal-middle ${
        openNumpadModal && "disable-keyboard modal-open"
      }`}
    >
      <div className="modal-box !max-w-[20rem]">
        <span
          className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2"
          onClick={() => setOpenNumpadModal(false)}
        >
          <AiFillCloseCircle />
        </span>
        <input
          hidden={true}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className="btn-ghost btn-outline no-animation btn mb-4 mt-5 w-full max-w-xs text-left">
          {formatPrice(parseInt(inputValue))}
        </span>
        <Numpad
          onNumberClick={handleNumberClick}
          onClearClick={handleClearClick}
          onDeleteClick={handleDeleteClick}
          onEnterClick={handleEnterClick}
          setOpenNumpadModal={setOpenNumpadModal}
        />
      </div>
    </dialog>
  );
};

export default NumpadModal;
