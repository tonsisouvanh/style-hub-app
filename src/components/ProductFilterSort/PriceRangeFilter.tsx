import React, { useState } from "react";

interface PriceRangeFilterProps {
  gridStyle: string;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ gridStyle }) => {
  const priceRanges = [
    { label: "100000 - 250000", value: "100000-250000" },
    { label: "250000 - 500000", value: "250000-500000" },
    { label: "50000 - 1000000", value: "50000-1000000" },   
    { label: "45000 - 1000000", value: "45000-1000000" },
    { label: "15000 - 1000000", value: "15000-1000000" },
    { label: "25000 - 1000000", value: "25000-1000000" },
  ];

  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );

  const handlePriceRangeChange = (value: string) => {
    setSelectedPriceRange(value);
  };

  return (
    <div className={gridStyle}>
      {priceRanges.map((range) => (
        <div
          key={range.value}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handlePriceRangeChange(range.value)}
        >
          <input
            type="checkbox"
            checked={selectedPriceRange === range.value}
            onChange={() => {}}
            className="form-checkbox h-4 w-4 text-indigo-600"
          />
          <label className="text-gray-700">{range.label}</label>
        </div>
      ))}
    </div>
  );
};

export default PriceRangeFilter;
