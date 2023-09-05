import React from "react";
import SizeCheckbox from "./SizeCheckbox";
import ColorFilter from "./ColorFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import { AiOutlineClose } from "react-icons/ai";

const gridStyle = "grid grid-rows-3 grid-flow-col space-y-2";

interface ProductFilterProps {
  handleOpenFilter: (value: boolean) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ handleOpenFilter }) => {
  return (
    <div className="relative h-full flex flex-col gap-y-5 bg-white p-5 w-fit border">
      <span
        onClick={() => handleOpenFilter(false)}
        className="absolute top-2 right-3 cursor-pointer"
      >
        <AiOutlineClose className="text-[1.5rem]"/>
      </span>
      <div className="mt-5">
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
      <div className="w-full bg-black text-white py-3 px-1">
        <button className="w-full text-center">Submit</button>
      </div>
    </div>
  );
};

export default ProductFilter;
