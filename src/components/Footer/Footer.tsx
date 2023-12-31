import Logo from "../Logo/Logo";
import SocialMediaLinks from "../SocialMediaLink/SocialMediaLinks";
const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-gray-100">
      <div className="rounded-div bg-[#E8E8E8] px-4 py-10 sm:px-6 lg:px-16 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <Logo />

          <div>
            <SocialMediaLinks />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div> */}
        {/* <div>
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
          </div> */}
        {/* </div> */}

        <div className="mt-20 flex items-center justify-between gap-8 border-t-[0.5px] border-t-black pt-10">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Developed by DevTons. All rights
              reserved.
            </p>
            <p>
              <span className="font-bold">Email: </span>
              tonsisouvanh7@gmail.com
            </p>
            <div>
              <span className="font-bold">Website: </span>
              <a
                className=""
                target="_blank"
                href="https://devtons-120196.web.app/"
              >
                Click!
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
