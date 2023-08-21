import { useEffect } from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";

import { slides } from "../../data/data";
import Service from "../../components/Services/Service";
import Promotion from "../../components/Promotion/Promotion";

import { newArrivalProducts, topSellers } from "../../data/data";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 w-full overflow-hidden">
      {/*============== Hero section ==============*/}
      <Hero slides={slides} />
      {/*============== Hero section ==============*/}

      <div className="space-y-10 py-5 md:space-y-40 md:py-20">
        {/*============== Categories ==============*/}
        <Categories />
        {/*============== Categories ==============*/}

        {/*============== Featured products ==============*/}
        <FeaturedProducts
          products={newArrivalProducts}
          featuredTitle="ເຄື່ອງມາໃໝ່"
          featuredDesc="ຄົ້ນພົບການເພີ່ມໃຫມ່ຫຼ້າສຸດຂອງຄໍເລັກຊັນຂອງພວກເຮົາ, ສະເຫນີທາງເລືອກທີ່ສົດຊື່ນແລະທັນສະໄຫມສໍາລັບທ່ານ."
          showButton={false}
          isScrollX = {true}
        />
        {/*============== Featured products ==============*/}

        {/*============== Services ==============*/}
        {/* <Service /> */}
        {/*============== Services ==============*/}

        {/*============== Promotion ==============*/}
        <Promotion />
        {/*============== Promotion ==============*/}

        {/*============== Featured products ==============*/}
        <FeaturedProducts
          products={topSellers}
          featuredTitle="ເຄື່ອງຂາຍດີ"
          featuredDesc="ເຄື່ອງທີ່ລູກຄ້ານິຍົມ ແລະ ສົນໃຈ"
          showButton={true}
          isScrollX = {true}
        />
        <FeaturedProducts
          products={topSellers}
          featuredTitle="SALE"
          featuredDesc="ຫຼຸດກະນ່ຳ"
          showButton={true}
          isScrollX = {true}
        />
        {/*============== Featured products ==============*/}
      </div>
    </div>
  );
};

export default Home;
