import React, { useState } from "react";

interface ColorCheckboxProps {
  color: string;
  isSelected: boolean;
  onCheckboxChange: (color: string) => void;
}

interface ColorFilterProps {
  gridStyle: string;
}

const ColorCheckbox: React.FC<ColorCheckboxProps> = ({
  color,
  isSelected,
  onCheckboxChange,
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="selectedColor"
        checked={isSelected}
        onChange={() => onCheckboxChange(color)}
        className="form-radio h-5 w-5 text-indigo-600"
      />
      <span
        className="w-6 h-6 rounded-full bg-gray-200"
        style={{ backgroundColor: color }}
      ></span>
    </label>
  );
};

const ColorFilter: React.FC<ColorFilterProps> = ({gridStyle}) => {
  const availableColors = ["red", "blue", "green", "yellow", "purple"];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className={gridStyle}>
      {availableColors.map((color) => (
        <ColorCheckbox
          key={color}
          color={color}
          isSelected={selectedColor === color}
          onCheckboxChange={handleColorChange}
        />
      ))}
      {/* <p className="text-gray-600">Selected Color: {selectedColor || "None"}</p> */}
    </div>
  );
};

export default ColorFilter;
