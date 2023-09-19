import React, { useState } from "react";

interface SizeCheckboxProps {
  gridStyle: string;
}

const SizeCheckbox: React.FC<SizeCheckboxProps> = ({ gridStyle }) => {
  const availableSizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size],
    );
  };
  return (
    <>
      <div className={gridStyle}>
        {availableSizes.map((size) => (
          <div
            key={size}
            className="flex cursor-pointer items-center gap-2"
            onClick={() => handleSizeChange(size)}
          >
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              // onChange={() => {}}
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
            <label className="font-medium text-gray-700">{size}</label>
          </div>
        ))}
        <p className="text-gray-600">
          Selected Sizes:{" "}
          {selectedSizes.length > 0 ? selectedSizes.join(", ") : "None"}
        </p>
      </div>
    </>
  );
};

export default SizeCheckbox;
