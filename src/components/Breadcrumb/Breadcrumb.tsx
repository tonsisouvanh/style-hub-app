import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Breadcrumb = ({ pathname, txtFrom = "Root" }) => {
  const segments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="bg-transparent font-roboto">
      <div className="flex items-center gap-x-2 text-gray-600 text-lg md:text-xl">
        <div className="flex text-[#024E82] gap-x-1 items-center">
          <FaHome />
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </div>
        {/* <span className="text-cyan-600"> / {txtFrom}</span> */}
        {segments.map((segment, index) => (
          <span key={segment}>
            <span className=""> / </span>
            <span
              to={`/${segments.slice(0, index + 1).join("/")}`}
              className=""
            >
              {/* {segment.charAt(0).toUpperCase() + segment.slice(1)} */}
              {txtFrom}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
