import React, { useState } from "react";
import { Category } from "../../types";
interface CategoryControlProps {
  categories: Category[];
  onSelectCategory: (category: string) => void;
  selectedCate: string;
}

interface fixedCategory {
  id: string;
  label: string;
}

interface CategoryButtonsProps {
  fixedCategories: fixedCategory[];
  selected: string;
  onClick: (id: string) => void;
}

const CategoryButton: React.FC<CategoryButtonsProps> = ({
  fixedCategories,
  selected,
  onClick,
}) => (
  <>
    {fixedCategories.map((category) => (
      <div
        key={category.id}
        className={`whitespace-nowrap transition hover:bg-[#024E82] hover:text-white ${
          selected === category.id &&
          " bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => onClick(category.id)}
      >
        <span>{category.label}</span>
      </div>
    ))}
  </>
);

const fixedCategories: fixedCategory[] = [
  { id: "all", label: "ທັງໝົດ" },
  { id: "sale", label: "Sale" },
  { id: "arrival", label: "ເຄື່ອງມາໃໝ່" },
  { id: "tops", label: "ເສື້ອ" },
  { id: "bottoms", label: "ສົ້ງ" },
  { id: "shoes", label: "ເກີບ" },
];

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
      className="flex items-center gap-2 overflow-x-scroll py-2 font-notosanslao"
      id=""
    >
      {/* <div
        className={`${
          selectedCate === "all" &&
          "bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => handleCategoryClick("all")}
      >
        <span>ທັງໝົດ</span>
      </div>
      <div
        className={`${
          selectedCate === "sale" &&
          "bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => handleCategoryClick("sale")}
      >
        <span>ຫຼຸດລາຄາ</span>
      </div>
      <div
        className={`${
          selectedCate === "arrival" &&
          "bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => handleCategoryClick("arrival")}
      >
        <span>ເຄື່ອງມາໃໝ່</span>
      </div>

      <div
        className={`${
          selectedCate === "tops" &&
          "bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => handleCategoryClick("tops")}
      >
        <span>ເສື້ອ</span>
      </div>
      <div
        className={`${
          selectedCate === "bottoms" &&
          "bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => handleCategoryClick("bottoms")}
      >
        <span>ສົ້ງ</span>
      </div>
      <div
        className={`${
          selectedCate === "shoes" &&
          "bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => handleCategoryClick("shoes")}
      >
        <span>ເກີບ</span>
      </div> */}

      {/* <div> */}
      <CategoryButton
        fixedCategories={fixedCategories}
        selected={selectedCate}
        onClick={handleCategoryClick}
      />
      {/* </div> */}

      {categories.map((category) => (
        <div
          key={category.id}
          className={`whitespace-nowrap transition hover:bg-[#024E82] hover:text-white ${
            selectedCate === category.title && "bg-[#024E82] text-white"
          } cursor-pointer whitespace-nowrap rounded-full border px-3 py-1`}
          onClick={() => handleCategoryClick(category.title)}
        >
          <span className="text-sm md:text-base">
            {category.title[0] + category.title.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryControl;
