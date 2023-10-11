import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsFillCalculatorFill } from "react-icons/bs";
import NumpadModal from "../../../../components/Modal/NumpadModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Searchbar = () => {
  const [openNumpadModal, setOpenNumpadModal] = useState<boolean>(false);
  const { setValue } = useForm();
  return (
    <>
      <NumpadModal
        openNumpadModal={openNumpadModal}
        setOpenNumpadModal={setOpenNumpadModal}
        setValue={setValue}
        inputName={"ratings"}
      />
      <div className="relative flex flex-1 items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            className="flex cursor-pointer items-center rounded-s-lg bg-primary px-5 py-4 transition"
          >
            <AiOutlineSearch className="text-lg text-primary-content" />
            <AiOutlineCaretDown className="text-primary-content" />
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
          className="input-ghost input -ml-5 w-full min-w-[16rem] rounded-md border border-base-content/20 px-10 py-[0.7rem] font-notosanslao outline-none focus:outline-none"
        />

        <button
          disabled={true}
          onClick={() => setOpenNumpadModal(true)}
          className="top-1/5 absolute right-1 rounded-lg p-2 transition hover:bg-gray-200 cursor-not-allowed"
        >
          <BsFillCalculatorFill className="text-2xl text-base-content" />
        </button>
      </div>
    </>
  );
};

export default Searchbar;
