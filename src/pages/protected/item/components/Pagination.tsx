import { AiFillCaretDown } from "react-icons/ai";

type Props = {
  itemNo: number;
  selectedNumber: number;
  setSelectedNumner: (value: number) => void;
};
const nums: number[] = [10, 20, 30, 50, 70];
const Pagination = ({ itemNo, selectedNumber, setSelectedNumner }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="font-notosanslao text-base-content">{itemNo} ລາຍການ</p>
        <div className="dropdown">
          <label tabIndex={0} className="btn-primary btn-sm btn m-1">
            {selectedNumber}
            <AiFillCaretDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[2] w-52 bg-base-100 p-2 shadow"
          >
            {nums.map((n) => (
              <li onClick={() => setSelectedNumner(n)} key={n} className="">
                <a>{n}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 font-notosanslao">
          <button className="btn-primary btn-outline btn-sm btn">ກັບຄືນ</button>
          <button className="btn-sm btn">1</button>
          <button className="btn-active btn-sm btn">2</button>
          <button className="btn-sm btn">3</button>
          <button className="btn-sm btn">4</button>
          <button className="btn-primary btn-outline btn-sm btn">ໄປໜ້າ</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
