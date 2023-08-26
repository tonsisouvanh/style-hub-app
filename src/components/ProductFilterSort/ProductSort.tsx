import React, { useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
};

const ProductSort: React.FC<SelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer"
    >
      {/* <span>Sort</span>
      <BiSort /> */}
      <div className="relative">
        <div className="font-notosanslao whitespace-nowrap">
          {selectedValue ? (
            <div className="flex items-center gap-1">
              {options.find((option) => option.value === selectedValue)?.label}
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
