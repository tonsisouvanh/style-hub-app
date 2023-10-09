import { AiFillCaretDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import SearchBar from "../components/Searchbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const Filter = (props: Props) => {
  const { status, data: categories } = useSelector(
    (state: RootState) => state.categories,
  );
  console.log(categories);
  return (
    <div className="flex flex-wrap items-center gap-2 font-notosanslao">
      <div className="dropdown">
        <label tabIndex={0} className="btn-primary btn-outline btn">
          ສະຖານະ
          <span>
            <AiFillCaretDown />
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box z-[2] max-h-[20rem] w-52 overflow-y-auto bg-base-100 p-2 shadow"
        >
          <div>
            {categories.map((category) => (
              <li key={category.id}>
                <a className="" key={category.id}>
                  {category.name}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="dropdown">
        <label tabIndex={0} className="btn-primary btn-outline btn">
          ໝວດໝູ່
          <span>
            <AiFillCaretDown />
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box z-[2] max-h-[20rem] w-52  overflow-y-scroll bg-base-100 p-2 shadow"
        >
          <div>
            {categories.map((category) => (
              <li key={category.id}>
                <a className="" key={category.id}>
                  {category.name}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
      {/* <div className="dropdown">
        <label tabIndex={0} className="btn">
          <span>
            <AiFillCaretDown />
          </span>
        </label>
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
      </div> */}
      {/* Filter end */}

      {/* Search bar */}
      <SearchBar />
      {/* Searchbar end */}

      <button
        onClick={() => props.setOpenModal(true)}
        className="btn-primary btn"
      >
        ADD
        <FaPlus />
      </button>
    </div>
  );
};

export default Filter;
