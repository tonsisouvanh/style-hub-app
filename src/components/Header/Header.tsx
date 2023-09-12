import React, { useEffect, useState } from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Category } from "../../types";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: products } = useSelector((state: RootState) => state.products);
  const [categories, setCategories] = useState<Category[]>([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavbarClose = () => {
    setIsOpen(false);
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
    console.log(categories);
  }, [products]);

  return (
    // JSX code representing your component's structure and content
    <>
      {/* {isOpen ? (
        <MobileHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
      ) : (
        <DesktopHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
      )} */}
      <MobileHeader
        categories={categories}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
        handleNavbarClose={handleNavbarClose}
      />
      <DesktopHeader
        categories={categories}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
        handleNavbarClose={handleNavbarClose}
      />
    </>
  );
};

export default Header;
