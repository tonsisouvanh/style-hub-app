import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Breadcrumb = ({ pathname = "", txtFrom = "" }) => {
  const segments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="font-roboto bg-transparent">
      <div className="flex items-center gap-x-2 text-lg text-gray-600 md:text-xl">
        <div className="flex items-center gap-x-1 text-[#024E82]">
          <FaHome />
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </div>
        <span className=""> / </span>
        {/* {segments.map((segment, index) => (
          <span key={segment}>
            <span className=""> / </span>
            <Link
              to={`/${segments.slice(0, index + 1).join("/")}`}
              className=""
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </span>
        ))} */}
        {txtFrom}
      </div>
    </div>
  );
};

export default Breadcrumb;
