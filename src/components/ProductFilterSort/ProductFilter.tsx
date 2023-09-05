import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import SizeCheckbox from "./SizeCheckbox";
import ColorFilter from "./ColorFilter";
import PriceRangeFilter from "./PriceRangeFilter";

const gridStyle = "grid grid-rows-3 grid-flow-col space-y-2";

interface ProductFilterProps {
  handleOpenFilter: (value: boolean) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ handleOpenFilter }) => {
  return (
    <div className="relative h-full flex flex-col gap-y-5 w-fit bg-white p-5">
      <span
        onClick={() => handleOpenFilter(false)}
        className="absolute top-2 right-3"
      >
        X
      </span>
      <div>
        <h3 className="font-bold">Active filters</h3>
        <div className="flex flex-wrap items-center gap-2">
          <div className="p-2 border w-fit">downjacket coat</div>
          <div className="p-2 border w-fit">xxs</div>
          <div className="p-2 border w-fit">purple</div>
          <div className="p-2 border w-fit">green</div>
          <div className="p-2 border w-fit">40000-50000</div>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Size:</h3>
        <div>
          <SizeCheckbox gridStyle={gridStyle} />
        </div>
      </div>
      <div>
        <h3 className="font-bold">Color:</h3>
        <div>
          <ColorFilter gridStyle={gridStyle} />
        </div>
      </div>
      <div>
        <h3 className="font-bold">Price:</h3>
        <div>
          <PriceRangeFilter gridStyle={gridStyle} />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
