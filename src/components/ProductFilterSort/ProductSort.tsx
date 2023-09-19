import React, { useState } from "react";
import { BiSort } from "react-icons/bi";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  selectedSort: string;
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
      <div className="relative">
        <div className="whitespace-nowrap font-notosanslao">
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
            <div className="flex items-center gap-1 text-black">
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
          onMouseLeave={() => setIsOpen(false)}
          className={`absolute right-0 top-8 z-[2] mt-1 w-fit rounded border border-gray-300 bg-white transition duration-300 ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-20 opacity-0"
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="cursor-pointer whitespace-nowrap px-3 py-2 font-notosanslao hover:bg-gray-100"
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
