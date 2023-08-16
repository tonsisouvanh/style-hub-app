import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[15rem]">
      <div
        className="border border-gray-300 rounded px-3 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? (
          <div className="flex items-center justify-between">
            {options.find((option) => option.value === selectedValue)?.label}
            <IoIosArrowDown
              className={`transition duration-300 ${
                isOpen ? "-rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <div className="text-black flex items-center justify-between gap-4">
            <span>Select Size</span>
            <IoIosArrowDown
              className={`transition duration-300 ${
                isOpen ? "-rotate-180" : ""
              }`}
            />
          </div>
        )}
      </div>

      <div
        className={`absolute z-10 mt-1 bg-white border border-gray-300 rounded w-full transition duration-300 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-20 opacity-0"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
