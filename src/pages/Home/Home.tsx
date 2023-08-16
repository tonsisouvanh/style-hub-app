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
    <div className="bg-gray-100">
      {/*============== Hero section ==============*/}
      <Hero slides={slides} />
      {/*============== Hero section ==============*/}

      <div className="space-y-40 py-20">
        {/*============== Categories ==============*/}
        <Categories />
        {/*============== Categories ==============*/}

        {/*============== Featured products ==============*/}
        <FeaturedProducts
          products={newArrivalProducts}
          featuredTitle="Discover NEW Arrivals"
          featuredDesc="Recently added shirts!"
          showButton={false}
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
          products={topSellers}
          featuredTitle="Top Sellers"
          featuredDesc="Browse our top-selling products"
          showButton={true}
        />
        {/*============== Featured products ==============*/}
      </div>
    </div>
  );
};

export default Home;
