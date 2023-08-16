import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import UserWishlistCartIcons from "./UserWishlistCartIcons ";
import SearchBar from "../SearchBar/SearchBar";

type MobileHeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
};

// interface MenuItem {
//   title: string;
//   link: string;
// }

// const menuItems: MenuItem[] = [
//   {
//     title: "Sale",
//     link: "/",
//   },
//   {
//     title: "New Arrivals",
//     link: "/",
//   },
//   {
//     title: "About Us",
//     link: "/",
//   },
//   {
//     title: "Contact Us",
//     link: "/",
//   },
// ];

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const count = 3;
  return (
    <nav
      className={`z-20 font-notosanslao py-3 space-y-5 px-5 scale-y-0 origin-top transition duration-100 ${
        isOpen ? "scale-y-100" : ""
      } fixed w-screen h-screen top-0 left-0 bg-white border-b-[1px] text-center lg:hidden`}
    >
      <div className="flex items-center justify-between mb-3">
        <div onClick={toggleMenu}>
          <AiOutlineClose className="cursor-pointer text-black text-xl" />
        </div>
        <UserWishlistCartIcons />
      </div>

      <SearchBar />

      <ul className="flex flex-col text-[1em]">
        <li
          //   onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
          className="flex flex-col items-center py-3 border-b-[1px] text-center transition"
        >
          <div
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="cursor-pointer flex items-center"
          >
            ເຄື່ອງທັງໝົດ
            <MdOutlineKeyboardArrowRight
              className={`transition-transform ${
                submenuOpen ? "rotate-90" : ""
              }`}
            />
          </div>

          <div className="group">
            <div
              className={`text-black overflow-hidden transform max-h-0 scale-y-0 origin-top opacity-0 transition-all duration-300 origin-top ${
                submenuOpen ? "scale-y-100 opacity-100 max-h-full" : null
              }`}
            >
              <div className="flex mt-3 items-center justify-center space-x-4 space-y-2">
                <div className="w-48">
                  <h3 className="text-lg font-bold">Men's Clothing</h3>
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
                <div className="w-48">
                  <h3 className="text-lg font-bold">Women's Clothing</h3>
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
              </div>
              <div className="flex mt-2 items-start justify-between">
                <div className="w-48">
                  <h3 className="text-lg font-bold">Kids' Clothing</h3>
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
        </li>

        <li className="hover:bg-black hover:text-white py-3 border-b-[1px] text-center cursor-pointer transition">
          <Link to="/" className="">
            Sale
          </Link>
        </li>
        <li className="hover:bg-black hover:text-white py-3 border-b-[1px] text-center cursor-pointer transition">
          <Link to="/" className="">
            New Arrivals
          </Link>
        </li>
        <li className="hover:bg-black hover:text-white py-3 border-b-[1px] text-center cursor-pointer transition">
          <Link to="/" className="">
            About Us
          </Link>
        </li>
        <li className="hover:bg-black hover:text-white py-3 border-b-[1px] text-center cursor-pointer transition">
          <Link to="/" className="">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="mt-10 space-y-4">
        <div className="text-3xl font-poppins font-bold text-gray-800">
          Style<span className="text-cyan-800">HUB</span>
        </div>
        <div className="flex justify-center gap-4">
          <div className="p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
            <FaFacebook size={24} color="#4267B2" />
          </div>
          <div className="p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
            <FaInstagram size={24} color="#C13584" />
          </div>
          <div className="p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
            <FaTwitter size={24} color="#1DA1F2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;
