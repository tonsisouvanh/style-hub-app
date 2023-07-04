import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="search flex items-center justify-center">
      <input
        type="text"
        className="flex-1 search__input bg-gray-200 border border-gray-300 text-gray-700 py-[0.3em] px-4 rounded-l-full w-64 outline-none focus:outline-none"
        placeholder="Type your text"
      />
      <button className="search__button bg-black text-white py-2 px-4 rounded-r-full hover:bg-gray-800">
        <svg
          className="search__icon h-5 w-5 fill-current"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
