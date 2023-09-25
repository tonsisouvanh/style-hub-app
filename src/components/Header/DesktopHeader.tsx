import SearchBar from "../SearchBar/SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import UserWishlistCartIcons from "./UserWishlistCartIcons ";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeFromTopAnimate } from "../../animation";
import Logo from "../Logo/Logo";
import { menuItems } from "../../data/data";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Category } from "../../types";
type DesktopHeaderProps = {
  categories: Category[];

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
  handleNavbarClose: () => void;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  toggleMenu,
  handleNavbarClose,
  isOpen,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-[0.2rem] w-6 my-[0.1rem] rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <nav className="sticky top-0 z-[2] bg-white py-3 font-notosanslao shadow">
        <motion.div
          initial="offscreen"
          animate="onscreen"
          variants={fadeFromTopAnimate}
          className="rounded-div flex items-center justify-between"
        >
          {/* <div
            onClick={() => toggleMenu()}
            className="cursor-pointer text-lg lg:hidden lg:text-xl xl:text-2xl"
          >
            <RxHamburgerMenu />
          </div> */}

          <button
            className="dborder-2 dborder-black group flex flex-col items-center justify-center rounded lg:hidden"
            onClick={() => toggleMenu()}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "translate-y-[0.4rem] rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-translate-y-[0.4rem] -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>

          <Link
            to="/"
            className="items-center text-lg text-black marker:font-bold lg:flex lg:text-xl"
          >
            <Logo />
          </Link>

          {/* Nav menu */}
          <ul className="hidden items-center gap-5 text-lg lg:flex lg:text-xl">
            <li className="group relative flex w-fit flex-col items-center hover:border-b-2 hover:border-b-black">
              <Link
                to="/all-products/all"
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex cursor-pointer items-center"
              >
                Shop
                <RiShoppingBag2Fill className="text-xl lg:text-2xl" />
              </Link>
            </li>

            {menuItems.map((item, index) => (
              <li
                key={index}
                className="w-fit cursor-pointer transition hover:border-b-2 hover:border-b-black"
                onClick={handleNavbarClose}
              >
                <Link to={item.toPath} className="whitespace-nowrap">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">
            <SearchBar />
          </div>
          <UserWishlistCartIcons />
        </motion.div>
      </nav>
    </>
  );
};

export default DesktopHeader;
