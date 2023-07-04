import { HeaderAnimate } from "../../animation";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";
import { motion } from "framer-motion";

import { slides } from "../../data/data";
import Service from "../../components/Services/Service";
import Promotion from "../../components/Promotion/Promotion";

import { newArrivalProducts, topSellers } from "../../data/data";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";

const Home = () => {
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
      {/*============== Footer ==============*/}
      <Footer />
      {/*============== Footer ==============*/}
    </div>
  );
};

export default Home;
