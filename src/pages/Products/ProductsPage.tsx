import { useEffect, useState } from "react";
import ProductFilter from "../../components/ProductFilterSort/ProductFilter";
import ProductGrid from "../../components/Grid/ProductGrid";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProductSort from "../../components/ProductFilterSort/ProductSort";
import { mockProducts } from "../../data/data";
import CategoryControl from "../../components/Categories/CategoryControl";
import { mockCategories } from "../../data/data";
import { Product } from "../../types";
const options = [
  { label: "ເຄື່ອງມາໃໝ່", value: "newarrival" },
  { label: "ລາຄາ: ໜ້ອຍ - ຫຼາຍ", value: "asc" },
  { label: "ລາຄາ: ຫຼາຍ - ໜ້ອຍ", value: "desc" },
  { label: "ຂາຍດີ", value: "bestsell" },
];

const ProductsPage = () => {
  const location = useLocation();
  const [selectedCate, setSelectedCate] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const onSelectCategory = (value: string) => {
    setSelectedCate(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   setFilteredProducts(
  //     selectedCate === "all"
  //       ? mockProducts
  //       : mockProducts.filter((pro) => pro.categories.includes(selectedCate))
  //   );
  // }, [selectedCate]);

  useEffect(() => {
    const filteredProducts =
      selectedCate === "all"
        ? mockProducts
        : mockProducts.filter((pro) => pro.categories.includes(selectedCate));

    setFilteredProducts(filteredProducts);
  }, [selectedCate]);

  return (
    <div className="py-7">
      <div className="rounded-div space-y-5">
        <Breadcrumb pathname={location.pathname} txtFrom="All" />
        <div>
          <h2 className="font-bold text-2xl font-notosanslao md:text-4xl">
            {selectedCate === "all" ? "ທັງໝົດ" : selectedCate}
          </h2>
        </div>
        {/* Ad */}
        <div className="w-full h-[6rem]  bg-slate-500 flex items-center justify-center">
          <span className="text-white font-notosanslao">ໂຄສະນາ</span>
        </div>
        <div className="flex items-center justify-between font-notosanslao">
          <span className="text-sm">Result: 397 items</span>
          <div className="flex items-center gap-8 text-[1rem]">
            <ProductFilter />
            <ProductSort options={options} onChange={handleSelectChange} />
          </div>
        </div>
        <div>
          <CategoryControl
            categories={mockCategories}
            onSelectCategory={onSelectCategory}
            selectedCate={selectedCate}
          />
        </div>
        <ProductGrid mockProducts={filteredProducts || []} />
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default ProductsPage;
