import { useEffect } from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";

import { slides } from "../../data/data";
import Service from "../../components/Services/Service";
import Promotion from "../../components/Promotion/Promotion";
import Categories from "../../components/Categories/Categories";
import { mockProducts } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Home = () => {
  const { data: products, status } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {status === "loading" ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full overflow-hidden bg-gray-100">
          {/*============== Hero section ==============*/}
          <Hero slides={slides} />
          {/*============== Hero section ==============*/}

          <div className="space-y-10 py-5 md:space-y-40 md:py-20">
            {/*============== Categories ==============*/}
            <Categories />
            {/*============== Categories ==============*/}

            {/*============== Featured products ==============*/}
            <FeaturedProducts
              products={products}
              featuredTitle="ເຄື່ອງມາໃໝ່"
              featuredDesc="ຄົ້ນພົບການເພີ່ມໃຫມ່ຫຼ້າສຸດຂອງຄໍເລັກຊັນຂອງພວກເຮົາ, ສະເຫນີທາງເລືອກທີ່ສົດຊື່ນແລະທັນສະໄຫມສໍາລັບທ່ານ."
              showButton={false}
              isScrollX={true}
              showType={"newarrival"}
            />
            {/*============== Featured products ==============*/}

            {/*============== Services ==============*/}
            <Service />
            {/*============== Services ==============*/}

            {/*============== Promotion ==============*/}
            <Promotion />
            {/*============== Promotion ==============*/}

            {/*============== Featured products ==============*/}
            <FeaturedProducts
              products={products}
              featuredTitle="ເຄື່ອງຂາຍດີ"
              featuredDesc="ເຄື່ອງທີ່ລູກຄ້ານິຍົມ ແລະ ສົນໃຈ"
              showButton={true}
              isScrollX={true}
              showType="bestsell"
            />
            <FeaturedProducts
              products={products}
              featuredTitle="SALE"
              featuredDesc="ຫຼຸດກະນ່ຳ"
              showButton={true}
              isScrollX={true}
              showType="sale"
            />
            {/*============== Featured products ==============*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
