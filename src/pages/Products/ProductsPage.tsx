import { useEffect, useState } from "react";
import ProductGrid from "../../components/Grid/ProductGrid";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import ProductSort from "../../components/ProductFilterSort/ProductSort";
import CategoryControl from "../../components/Categories/CategoryControl";
import { Product } from "../../types";
import ProductFilter from "../../components/ProductFilterSort/ProductFilter";
import { BiFilterAlt } from "react-icons/bi";
import { adbanner } from "../../assets/images";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AddCartModal from "../../components/AddCartAction/AddCartModal";
const options = [
  { label: "ເຄື່ອງມາໃໝ່", value: "newarrival" },
  { label: "ລາຄາ: ໜ້ອຍ - ຫຼາຍ", value: "asc" },
  { label: "ລາຄາ: ຫຼາຍ - ໜ້ອຍ", value: "desc" },
  { label: "ຂາຍດີ", value: "bestsell" },
];

const ProductsPage = () => {
  const { data: products } = useSelector((state: RootState) => state.products);
  const { category } = useParams<{ category: string }>();
  const [selectedCate, setSelectedCate] = useState(category || "all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [openAddCartModal, setOpenAddCartModal] = useState<boolean>(false);
  const [proId, setProId] = useState<string>("");

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const handleAddCartModal = (value: boolean, proId: string) => {
    setOpenAddCartModal(value);
    setProId(proId);
  };

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
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const sortProducts = (products: Product[], sortOption: string) => {
      const sortedProducts = [...products];
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
      sortedProducts = products;
    } else if (selectedCate === "sale") {
      sortedProducts = products.filter(
        (pro) => pro.discount && pro.discount !== null,
      );
    } else if (selectedCate === "arrival") {
      sortedProducts = products.filter((pro) => pro.isNewArrival === true);
    } else {
      sortedProducts = products.filter((pro) =>
        pro.categories.includes(selectedCate.toLowerCase()),
      );
    }

    const initialSortedProducts = sortProducts(sortedProducts, selectedSort);
    setFilteredProducts(initialSortedProducts);
  }, [selectedCate, selectedSort]);

  return (
    <div className="py-7">
      <AddCartModal
        openAddCartModal={openAddCartModal}
        handleAddCartModal={handleAddCartModal}
        proId={proId}
      />
      <div className="rounded-div space-y-5">
        <Breadcrumb txtFrom="All" />
        <div>
          <h2 className="font-notosanslao text-2xl font-bold md:text-4xl">
            {selectedCate === "all" ? "ທັງໝົດ" : selectedCate}
          </h2>
        </div>
        {/* Ad */}
        <div className="dflex relative hidden min-h-[10rem] w-full items-center justify-center sm:h-auto">
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/10"></div>
          <img className="h-full w-full object-cover" src={adbanner} alt="" />
        </div>
        <div
          className={`${
            offset >= 154
              ? "sticky top-[4rem] z-[3] border bg-white px-2 pt-2 sm:top-[4.3rem]"
              : null
          }`}
        >
          <div className={`flex items-center justify-between font-notosanslao`}>
            <span className="text-sm text-gray-600">
              Result: {products.length} items
            </span>
            <div className={`flex items-center gap-8 text-[1rem]`}>
              <div
                onClick={() => handleOpenFilter(true)}
                className=" hidden cursor-pointer items-center gap-1"
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
              products={products}
              onSelectCategory={onSelectCategory}
              selectedCate={selectedCate}
            />
          </div>
        </div>
        <ProductGrid
          handleAddCartModal={handleAddCartModal}
          products={filteredProducts || []}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
