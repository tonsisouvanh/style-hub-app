import React, { useState, useEffect } from "react";
import { Category, Product } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./styles.css";
interface CategoryControlProps {
  products: Product[];
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
      <SwiperSlide
        key={category.id}
        className={`w-fit whitespace-nowrap hover:bg-[#024E82] hover:text-white ${
          selected === category.id &&
          " bg-[#024E82] text-sm text-white md:text-base"
        } cursor-pointer rounded-full border px-3 py-1`}
        onClick={() => onClick(category.id)}
      >
        <span>{category.label}</span>
      </SwiperSlide>
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
  products,
  onSelectCategory,
  selectedCate,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
  };

  useEffect(() => {
    const distinctCategoriesSet = new Set<string>();

    products.forEach((product) => {
      const { categories } = product;
      categories.forEach((category) => {
        distinctCategoriesSet.add(category);
      });
    });

    const distinctCategories = Array.from(distinctCategoriesSet);

    const categoryObjects = distinctCategories.map((category) => ({
      id: category,
      name: category,
    }));

    setCategories(categoryObjects);
  }, [products]);

  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <div className="group relative flex-shrink-0">
          <BsThreeDotsVertical />
          <div className="absolute top-4 z-[2] hidden space-y-1 rounded border border-gray-300 bg-white p-5 font-notosanslao shadow-lg group-hover:block">
            <CategoryButton
              fixedCategories={fixedCategories}
              selected={selectedCate}
              onClick={handleCategoryClick}
            />
          </div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper category-control-swiper-button"
        >
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              className={`w-fit whitespace-nowrap transition hover:bg-[#024E82] hover:text-white ${
                selectedCate === category.name && "bg-[#024E82] text-white"
              } cursor-pointer whitespace-nowrap rounded-full border px-3 py-1 text-base md:text-lg`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="text-sm md:text-base">
                {category.name[0] + category.name.slice(1)}
              </span>
            </SwiperSlide>
          ))}
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              className={`w-fit whitespace-nowrap transition hover:bg-[#024E82] hover:text-white ${
                selectedCate === category.name && "bg-[#024E82] text-white"
              } cursor-pointer whitespace-nowrap rounded-full border px-3 py-1 text-base md:text-lg`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="text-sm md:text-base">
                {category.name[0] + category.name.slice(1)}
              </span>
            </SwiperSlide>
          ))}
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              className={`w-fit whitespace-nowrap transition hover:bg-[#024E82] hover:text-white ${
                selectedCate === category.name && "bg-[#024E82] text-white"
              } cursor-pointer whitespace-nowrap rounded-full border px-3 py-1 text-base md:text-lg`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="text-sm md:text-base">
                {category.name[0] + category.name.slice(1)}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>

    // <div
    //   className="no-scrollbar flex items-center gap-2 overflow-x-auto py-2 font-notosanslao"
    //   id=""
    // >
    //   <CategoryButton
    //     fixedCategories={fixedCategories}
    //     selected={selectedCate}
    //     onClick={handleCategoryClick}
    //   />

    //   {categories.map((category) => (
    //     <div
    //       key={category.id}
    //       className={`whitespace-nowrap transition hover:bg-[#024E82] hover:text-white ${
    //         selectedCate === category.name && "bg-[#024E82] text-white"
    //       } cursor-pointer whitespace-nowrap rounded-full border px-3 py-1 text-base md:text-lg`}
    //       onClick={() => handleCategoryClick(category.name)}
    //     >
    //       <span className="text-sm md:text-base">
    //         {category.name[0] + category.name.slice(1)}
    //       </span>
    //     </div>
    //   ))}
    // </div>
  );
};

export default CategoryControl;
