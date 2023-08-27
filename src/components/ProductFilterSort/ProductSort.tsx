import React, { useState } from "react";
import { BiSort } from "react-icons/bi";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  selectedSort: string; // Add this prop
};

const ProductSort: React.FC<SelectProps> = ({
  options,
  onChange,
  selectedSort,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      {/* <span>Sort</span>
      <BiSort /> */}
      <div className="relative">
        <div className="font-notosanslao whitespace-nowrap">
          {selectedSort ? (
            <div className="flex items-center gap-1">
              {options.find((option) => option.value === selectedSort)?.label}
              <BiSort
                className={`transition duration-300 ${
                  isOpen ? "-rotate-180" : ""
                }`}
              />
            </div>
          ) : (
            <div className="text-black flex items-center gap-1">
              <span>Sort</span>
              <BiSort
                className={`transition duration-300 ${
                  isOpen ? "-rotate-180" : ""
                }`}
              />
            </div>
          )}
        </div>

        <div
          className={`absolute z-10 mt-1 right-0 top-8 bg-white border border-gray-300 rounded w-fit transition duration-300 ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-20 opacity-0"
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 whitespace-nowrap font-notosanslao"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
