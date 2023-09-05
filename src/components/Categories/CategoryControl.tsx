import React, { useState } from "react";
import { Category } from "../../types";
interface CategoryControlProps {
  categories: Category[];
  onSelectCategory: (category: string) => void;
  selectedCate: string;
}

const CategoryControl: React.FC<CategoryControlProps> = ({
  categories,
  onSelectCategory,
  selectedCate,
}) => {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
  };

  return (
    <div
      className="flex py-2 items-center gap-2 font-notosanslao overflow-x-scroll"
      id=""
    >
      <div
        className={`${
          selectedCate === "all" && "bg-[#024E82] text-white text-sm md:text-base"
        } rounded-full border px-3 py-1 cursor-pointer`}
        onClick={() => handleCategoryClick("all")}
      >
        <span>ທັງໝົດ</span>
      </div>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`${
            selectedCate === category.title && "bg-[#024E82] text-white"
          } whitespace-nowrap rounded-full border px-3 py-1 cursor-pointer`}
          onClick={() => handleCategoryClick(category.title)}
        >
          <span className="text-sm md:text-base">{category.title}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryControl;
