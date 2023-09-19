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
}) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="sticky top-0 z-[2] bg-white py-3 font-notosanslao shadow">
        <motion.div
          initial="offscreen"
          animate="onscreen"
          variants={fadeFromTopAnimate}
          className="rounded-div flex items-center justify-between"
        >
          <div
            onClick={() => toggleMenu()}
            className="cursor-pointer text-xl lg:hidden"
          >
            <RxHamburgerMenu />
          </div>

          <Link
            to="/"
            className="items-center text-2xl text-black marker:font-bold lg:flex"
          >
            <Logo />
          </Link>

          {/* Nav menu */}
          <ul className="hidden items-center gap-5 text-[1em] lg:flex">
            <li className="group relative flex w-fit flex-col items-center hover:border-b-2 hover:border-b-black">
              <Link
                to="/all-products/all"
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex cursor-pointer items-center"
              >
                Shop
                <RiShoppingBag2Fill />
              </Link>

              {/* <div
                // onMouseLeave={() => setSubmenuOpen(false)}
                className="absolute left-0 top-6 hidden w-fit bg-transparent group-hover:flex"
              >
                <div
                  className={`h-auto overflow-hidden border bg-white p-4
                  `}
                >
                  <div className="flex items-start justify-start gap-5 ">
                    <Link to="/all-products/all">
                      <span>ທັງໝົດ</span>
                    </Link>
                    <div className="flex items-start justify-start">
                      <div className="flex w-48 flex-col justify-center gap-1">
                        <h3 className="text-lg font-bold">Men's Clothing</h3>
                        <div className="h-50 w-32 border-b-2 border-b-gray-400 pb-2">
                          <img
                            src="https://s7g3.scene7.com/is/image/soloinvest/n00571A?$big_image_web$"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/">Shirts</Link>
                          </li>
                          <li>
                            <Link to="/">T-Shirts</Link>
                          </li>
                          <li>
                            <Link to="/">Pants</Link>
                          </li>
                          <li>
                            <Link to="/">Jackets</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="flex w-48 flex-col justify-center gap-1">
                        <h3 className="text-lg font-bold">Women's Clothing</h3>
                        <div className="h-50 w-32 border-b-2 border-b-gray-400 pb-2">
                          <img
                            src="https://s7g3.scene7.com/is/image/soloinvest/n00554A?$big_image_web$"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/">Dresses</Link>
                          </li>
                          <li>
                            <Link to="/">Tops</Link>
                          </li>
                          <li>
                            <Link to="/">Bottoms</Link>
                          </li>
                          <li>
                            <Link to="/">Outerwear</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="flex w-48 flex-col justify-center gap-1">
                        <h3 className="text-lg font-bold">Kids' Clothing</h3>
                        <div className="h-50 w-32 border-b-2 border-b-gray-400 pb-2">
                          <img
                            src="https://i.pinimg.com/564x/e4/4f/9c/e44f9c7a841f9f6cc295de9ca8d53fe0.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/">Boys</Link>
                          </li>
                          <li>
                            <Link to="/">Girls</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="w-48">
                        <h3 className="text-lg font-bold">Accessories</h3>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/">Hats</Link>
                          </li>
                          <li>
                            <Link to="/">Bags</Link>
                          </li>
                          <li>
                            <Link to="/">Shoes</Link>
                          </li>
                          <li>
                            <Link to="/">Jewelry</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </li>

            {menuItems.map((item, index) => (
              <li
                key={index}
                className="w-fit cursor-pointer transition hover:border-b-2 hover:border-b-black"
                onClick={handleNavbarClose}
              >
                <Link to={item.toPath} className="">
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
