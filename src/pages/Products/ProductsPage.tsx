import { useEffect, useState } from "react";
import ProductGrid from "../../components/Grid/ProductGrid";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useLocation, useParams } from "react-router-dom";
import ProductSort from "../../components/ProductFilterSort/ProductSort";
import { mockProducts } from "../../data/data";
import CategoryControl from "../../components/Categories/CategoryControl";
import { mockCategories } from "../../data/data";
import { Product } from "../../types";
import ProductFilter from "../../components/ProductFilterSort/ProductFilter";
import { BiFilterAlt } from "react-icons/bi";
import { adbanner } from "../../assets/images";
const options = [
  { label: "ເຄື່ອງມາໃໝ່", value: "newarrival" },
  { label: "ລາຄາ: ໜ້ອຍ - ຫຼາຍ", value: "asc" },
  { label: "ລາຄາ: ຫຼາຍ - ໜ້ອຍ", value: "desc" },
  { label: "ຂາຍດີ", value: "bestsell" },
];

const ProductsPage = () => {
  const location = useLocation();
  const { category } = useParams<{ category: string }>();
  const [selectedCate, setSelectedCate] = useState(category || "all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const handleSelectChange = (value: string) => {
    setSelectedSort(value);
  };

  const onSelectCategory = (value: string) => {
    setSelectedCate(value);
  };

  const handleOpenFilter = (value: boolean) => {
    setIsOpenFilter(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sortProducts = (products: Product[], sortOption: string) => {
      const sortedProducts = [...products]; // Create a new array to avoid mutating the original
      switch (sortOption) {
        case "asc":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "desc":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          sortedProducts.sort((a, b) => a.id.localeCompare(b.id));
          break;
      }
      return sortedProducts;
    };

    let sortedProducts: Product[] = [];

    if (selectedCate === "all") {
      sortedProducts = mockProducts;
    } else if (selectedCate === "sale") {
      sortedProducts = mockProducts.filter(
        (pro) => pro.discount && pro.discount !== null,
      );
    } else if (selectedCate === "arrival") {
      sortedProducts = mockProducts.filter((pro) => pro.isNewArrival === true);
    } else {
      sortedProducts = mockProducts.filter((pro) =>
        pro.categories.includes(selectedCate),
      );
    }

    const initialSortedProducts = sortProducts(sortedProducts, selectedSort);
    setFilteredProducts(initialSortedProducts);
  }, [selectedCate, selectedSort]);

  return (
    <div className="py-7">
      <div className="rounded-div space-y-5">
        <Breadcrumb pathname={location.pathname} txtFrom="All" />
        <div>
          <h2 className="font-notosanslao text-2xl font-bold md:text-4xl">
            {selectedCate === "all" ? "ທັງໝົດ" : selectedCate}
          </h2>
        </div>
        {/* Ad */}
        <div className="relative flex min-h-[10rem] w-full items-center justify-center sm:h-auto">
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/10">
            {/* <button className="cursor-pointer border-2 border-black bg-white/80 p-2 font-arimo font-bold">
              Check out!
            </button> */}
          </div>
          <img className="h-full w-full object-cover" src={adbanner} alt="" />
        </div>
        <div className="flex items-center justify-between font-notosanslao">
          <span className="text-sm text-gray-600">Result: 397 items</span>
          <div className="flex items-center gap-8 text-[1rem]">
            <div
              onClick={() => handleOpenFilter(true)}
              className="flex cursor-pointer items-center gap-1"
            >
              <span>Filter </span>
              <BiFilterAlt />
            </div>

            {isOpenFilter && (
              <div className="fixed right-0 top-0 z-50 flex h-screen w-screen justify-end bg-black/80">
                <ProductFilter handleOpenFilter={handleOpenFilter} />
              </div>
            )}

            <ProductSort
              options={options}
              selectedSort={selectedSort}
              onChange={handleSelectChange}
            />
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
