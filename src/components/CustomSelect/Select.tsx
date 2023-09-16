import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Option } from "../../types";
type SelectProps = {
  options: Option[];
  currOption: string | "";
  textSize: string;
  onChange: (value: string, id: string | null) => void;
};

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  currOption,
  textSize = "text-xl",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(currOption);

  const handleOptionClick = (value: string, id: string | null) => {
    setSelectedValue(value);
    onChange(value, id);
    setIsOpen(false);
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Call the onClickOutside callback when clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);
  return (
    <div ref={divRef} className="relative w-full">
      <div
        className="cursor-pointer rounded border border-gray-300 px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? (
          <div className={`flex items-center justify-between ${textSize}`}>
            {options
              .find((option) => option.value === selectedValue)
              ?.label.toUpperCase()}
            <IoIosArrowDown
              className={`transition duration-300 ${
                isOpen ? "-rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4 font-notosanslao text-black">
            <span>ເລືອກຂະໜາດ</span>
            <IoIosArrowDown
              className={`transition duration-300 ${
                isOpen ? "-rotate-180" : ""
              }`}
            />
          </div>
        )}
      </div>

      <div
        className={`absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white transition duration-300 
        
        ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-20 opacity-0"
        }
        
        `}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`cursor-pointer px-3 py-2 ${textSize} hover:bg-gray-100`}
            onClick={() => handleOptionClick(option.value, "")}
          >
            {option.label.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
