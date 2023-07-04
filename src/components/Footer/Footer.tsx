import React from "react";
import { Link } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="rounded-div py-10 px-4 sm:px-6 lg:py-20 lg:px-16 bg-[#E8E8E8]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Company info
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/latest-posts">Latest Posts</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Help links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tracking">Tracking</Link>
              </li>
              <li>
                <Link to="/order-status">Order Status</Link>
              </li>
              <li>
                <Link to="/delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/shipping-info">Shipping Info</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Useful links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/special-offers">Special Offers</Link>
              </li>
              <li>
                <Link to="/gift-cards">Gift Cards</Link>
              </li>
              <li>
                <Link to="/advertising">Advertising</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Get in the know
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-white text-gray-900 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex gap-8 items-center justify-between border-t-gray-300 border-t-2 mt-20 pt-10">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Developed by DevTons. All rights
              reserved.
            </p>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
          <div className="flex items-center gap-4">
            <FaCcVisa className="text-4xl text-blue-600" />
            <FaCcMastercard className="text-4xl text-red-500" />
            <FaPaypal className="text-4xl text-blue-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
