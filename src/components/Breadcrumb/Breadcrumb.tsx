import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Breadcrumb = ({ txtFrom = "" }) => {
  // const segments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="bg-transparent font-lato">
      <div className="flex items-center gap-x-2 text-base text-gray-600 md:text-xl">
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



// import { Link } from 'react-router-dom';
// interface BreadcrumbProps {
//   pageName: string;
// }
// const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
//   return (
//     <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//       <h2 className="text-title-md2 font-semibold text-black dark:text-white">
//         {pageName}
//       </h2>

//       <nav>
//         <ol className="flex items-center gap-2">
//           <li>
//             <Link to="/">Dashboard /</Link>
//           </li>
//           <li className="text-primary">{pageName}</li>
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default Breadcrumb;

