import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsFillCalculatorFill } from "react-icons/bs";


const Searchbar = () => {
  return (
    <div className="relative flex flex-1 items-center">
      <div className="dropdown">
        <div
          tabIndex={0}
          className="flex cursor-pointer items-center rounded-s-lg bg-gray-100 px-5 py-4 transition hover:hover:bg-gray-200"
        >
          <AiOutlineSearch className="text-lg" />
          <AiOutlineCaretDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <input
        type="text"
        placeholder="ຄົ້ນຫາ ຊື່, ລະຫັດ..."
        className="-ml-5 w-full min-w-[16rem] rounded-md border px-10 py-[0.7rem] font-notosanslao outline-none "
      />

      <button className="top-1/5 absolute right-1 rounded-lg p-2 transition hover:bg-gray-200">
        <BsFillCalculatorFill className="text-2xl text-gray-500" />
      </button>
    </div>
  );
};

export default Searchbar;
