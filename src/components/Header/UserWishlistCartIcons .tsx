import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const UserWishlistCartIcons = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-300">
        <FaUser size={24} color="#222" />
      </div>
      <div className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-300">
        <FaHeart size={24} color="#222" />
      </div>
      <div className="relative p-2 rounded-full hover:bg-gray-300 transition-colors duration-300">
        <FaShoppingCart size={24} color="#222" />
        {3 > 0 && (
          <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full text-white text-xs px-1">
            {3}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserWishlistCartIcons 