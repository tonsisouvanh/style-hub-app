import React from "react";

type Props = {
  inputLabel: string;
  inputPlaceholder?: string;
  inputValue: number;
  inputName: string;
  inputMin?: number;
  inputMax?: number;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
};

const InputNumber = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  inputValue,
  inputMin,
  inputMax,
  handleInputChange,
}: Props) => {
  return (
    <div className="w-full max-w-full">
      <label className="label">
        <span className="label-text font-bold">{inputLabel}</span>
      </label>
      <input
        type="number"
        placeholder={inputPlaceholder}
        min={inputMin}
        max={inputMax}
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
        className="input-bordered input input-sm w-full transition duration-300 hover:shadow-md focus:outline-none"
      />
    </div>
  );
};

export default InputNumber;
