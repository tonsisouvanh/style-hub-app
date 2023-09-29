import { FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";

const UserWishlistCartIcons = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex justify-center space-x-2">
      {/* <div className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-gray-300">
        <FiUser size={24} color="#222" />
      </div> */}
      <Link to="/admin/login" className="btn-outline btn">
        SIGN IN
      </Link>
      <div className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-gray-300">
        <FiHeart size={24} color="#222" />
      </div>
      <div className="relative cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-gray-300">
        <Link to="/cart">
          <FiShoppingBag size={24} color="#222" />
          {cartItems.length > 0 && (
            <div className="absolute right-2 top-2 -mr-1 -mt-1 rounded-full bg-cyan-800 px-1 text-xs text-white">
              <span className="text-[0.7rem]">{cartItems.length}</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default UserWishlistCartIcons;
