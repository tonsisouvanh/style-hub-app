import React from "react";
import { FiDelete } from "react-icons/fi";
import { GrClear } from "react-icons/gr";
interface NumpadProps {
  onNumberClick: (number: string) => void;
  onClearClick: () => void;
  onDeleteClick: () => void;
  onEnterClick: () => void;
  openNumpadModal?: boolean;
  setOpenNumpadModal: (value: boolean) => void;
}

const Numpad: React.FC<NumpadProps> = ({
  onNumberClick,
  onClearClick,
  onDeleteClick,
  onEnterClick,
  openNumpadModal,
  setOpenNumpadModal,
}) => {
  const handleEnterClick = () => {
    onEnterClick();
    setOpenNumpadModal(false);
  };
  return (
    <div className="rounded-md bg-base-100 p-4 shadow-md">
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            type="button"
            key={number}
            className="btn"
            onClick={() => onNumberClick(number.toString())}
          >
            {number}
          </button>
        ))}
        <button
          className="btn"
          onClick={() => onNumberClick("00")}
          type="button"
        >
          00
        </button>
        <button
          className="btn"
          onClick={() => onNumberClick("000")}
          type="button"
        >
          000
        </button>
        <button
          type="button"
          className="btn-error btn col-span-2"
          onClick={onClearClick}
        >
          <GrClear />
        </button>
        <button
          type="button"
          className="btn-warning btn"
          onClick={onDeleteClick}
        >
          <FiDelete />
        </button>
      </div>
      <button
        type="button"
        className="btn-primary btn mt-2 w-full font-notosanslao"
        onClick={handleEnterClick}
      >
        ຕົກລົງ
      </button>
    </div>
  );
};

export default Numpad;
