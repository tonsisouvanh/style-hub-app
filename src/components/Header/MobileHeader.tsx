import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineClose, AiTwotoneShopping } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import { AiFillHome } from "react-icons/ai";
import { menuItems } from "../../data/data";
import { Category } from "../../types";
type MobileHeaderProps = {
  categories: Category[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
  handleNavbarClose: () => void;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({
  categories,
  isOpen,
  setIsOpen,
  toggleMenu,
  handleNavbarClose,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  return (
    <nav
      className={`z-50 origin-top scale-y-0 space-y-5 overflow-y-scroll px-5 py-3 font-notosanslao opacity-0 transition duration-300 ${
        isOpen ? "scale-y-100 opacity-100" : ""
      } fixed left-0 top-0 h-screen w-screen border-b-[1px] bg-white text-center lg:hidden`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AiOutlineClose
            onClick={toggleMenu}
            className="cursor-pointer  text-4xl"
          />
          <Link
            to="/"
            className="items-center text-2xl text-black marker:font-bold lg:flex"
          >
            <AiFillHome onClick={() => setIsOpen(false)} className="text-3xl" />
          </Link>
        </div>

        {/* <UserWishlistCartIcons /> */}
      </div>

      {/* <div className="flex w-full justify-center" onClick={handleNavbarClose}>
        <Link
          to="/"
          className="w-fit text-2xl text-black marker:font-bold lg:flex"
        >
          <Logo />
        </Link>
      </div> */}

      <SearchBar />

      <ul className="flex flex-col text-[1em]">
        <li
          onMouseLeave={() => setSubmenuOpen(false)}
          className="flex flex-col items-center border-b-[1px] py-3 text-center transition"
        >
          <div
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="flex cursor-pointer items-center justify-center font-bold"
          >
            <AiTwotoneShopping className="text-2xl text-black" />
            <span>Shop</span>
            <MdOutlineKeyboardArrowRight
              className={`transition-transform ${
                submenuOpen ? "rotate-90" : ""
              }`}
            />
          </div>

          <div className="group">
            <div
              className={`max-h-0 origin-top scale-y-0 transform overflow-hidden text-black opacity-0 transition-all duration-300 ${
                submenuOpen ? "max-h-full scale-y-100 opacity-100" : null
              }`}
            >
              <div className="flex flex-col gap-3 text-sm">
                <Link
                  className="mt-3 hover:opacity-70"
                  onClick={handleNavbarClose}
                  to="/all-products/all"
                >
                  ເຄື່ອງທັງໝົດ
                </Link>
                {categories.map((item) => (
                  <Link
                    key={item.id}
                    className="hover:opacity-70"
                    onClick={handleNavbarClose}
                    to={`/all-products/${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </li>

        {menuItems.map((item, index) => (
          <li
            key={index}
            className="border-b-[1px] py-3 text-center transition hover:bg-black hover:text-white"
            onClick={handleNavbarClose}
          >
            <Link to={item.toPath} className="cursor-pointer ">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileHeader;
