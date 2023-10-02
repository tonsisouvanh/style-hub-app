import React from "react";
import { Link } from "react-router-dom";
import { jimabanner } from "../../assets/images";
const NotFoundPage: React.FC = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-black p-10 text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-cover bg-center opacity-30">
        <img className="h-full w-full object-cover" src={jimabanner} alt="" />
      </div>
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="text-2xl">Oops! Page not found.</p>
      <p className="mt-4 text-center text-lg">
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link to="/" className="mt-8 text-cyan-300 hover:underline">
        Go back to the home page
      </Link>
    </div>

    // <div className="relative font-notosanslao flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4">
    //   <div className="absolute left-0 top-0 h-full w-full bg-cover bg-center opacity-30">
    //     <img
    //       className="h-full w-full object-cover"
    //       src={jimabanner}
    //       alt=""
    //     />
    //   </div>
    //   <h1 className="z-10 mb-8 text-5xl font-bold text-white md:text-7xl">
    //     ກຳລັງຈະມາໃນໄວຯນີ້
    //   </h1>
    //   <p className="text-xl text-white md:text-2xl">
    //     ຂອບໃຈທີ່ໃຫ້ຄວາມສົນໃຈ!
    //   </p>
    // </div>
  );
};

export default NotFoundPage;
