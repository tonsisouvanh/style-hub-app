import SearchBar from "../SearchBar/SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";
import UserWishlistCartIcons from "./UserWishlistCartIcons ";
import { useState } from "react";

type DesktopHeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="sticky shadow z-10 top-0 bg-white py-5">
        <div className="rounded-div flex items-center justify-between">
          <div onClick={() => toggleMenu()} className="lg:hidden text-xl">
            <RxHamburgerMenu />
          </div>

          <div className="hidden items-center text-2xl text-black marker:font-bold lg:flex">
            <div className="text-3xl font-poppins font-bold text-gray-800">
              Style<span className="text-cyan-800">HUB</span>
            </div>
          </div>

          {/* Nav menu */}
          <ul className="hidden lg:flex items-center gap-5 text-[1em]">
            <li className="relative flex flex-col items-center w-fit">
              <Link
                to="/"
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex items-center"
              >
                Shop
                <MdOutlineKeyboardArrowRight
                  className={`transition-transform ${
                    submenuOpen ? "rotate-90" : ""
                  }`}
                />
              </Link>

              <div
                onMouseLeave={() => setSubmenuOpen(false)}
                className="group absolute top-10 w-fit left-0"
              >
                <div
                  className={`bg-white text-black overflow-hidden transform max-h-0 scale-y-0 opacity-0 transition-all duration-300 origin-top ${
                    submenuOpen ? "scale-y-100 opacity-100 max-h-full" : null
                  }`}
                >
                  <div className="flex items-start justify-start p-5">
                    <div className="w-48 flex flex-col justify-center gap-1">
                      <h3 className="text-lg font-bold">Men's Clothing</h3>
                      <div className="w-32 h-50 border-b-gray-400 border-b-2 pb-2">
                        <img
                          src="https://s7g3.scene7.com/is/image/soloinvest/n00571A?$big_image_web$"
                          alt=""
                          className="w-full h-full object-cover"
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
                    <div className="w-48 flex flex-col justify-center gap-1">
                      <h3 className="text-lg font-bold">Women's Clothing</h3>
                      <div className="w-32 h-50 border-b-gray-400 border-b-2 pb-2">
                        <img
                          src="https://s7g3.scene7.com/is/image/soloinvest/n00554A?$big_image_web$"
                          alt=""
                          className="w-full h-full object-cover"
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
                    <div className="w-48 flex flex-col justify-center gap-1">
                      <h3 className="text-lg font-bold">Kids' Clothing</h3>
                      <div className="w-32 h-50 border-b-gray-400 border-b-2 pb-2">
                        <img
                          src="https://i.pinimg.com/564x/e4/4f/9c/e44f9c7a841f9f6cc295de9ca8d53fe0.jpg"
                          alt=""
                          className="w-full h-full object-cover"
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
            </li>

            <li className="w-fit cursor-pointer transition hover:border-b-2 hover:border-b-black">
              <Link to="/" className="">
                Sale
              </Link>
            </li>
            <li className="w-fit cursor-pointer transition hover:border-b-2 hover:border-b-black">
              <Link to="/" className="">
                New Arrivals
              </Link>
            </li>
            <li className="w-fit cursor-pointer transition hover:border-b-2 hover:border-b-black">
              <Link to="/" className="">
                About Us
              </Link>
            </li>
            <li className="w-fit cursor-pointer transition hover:border-b-2 hover:border-b-black">
              <Link to="/" className="">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex">
            <SearchBar />
          </div>

          <div className="hidden lg:flex">
            <UserWishlistCartIcons />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopHeader;
