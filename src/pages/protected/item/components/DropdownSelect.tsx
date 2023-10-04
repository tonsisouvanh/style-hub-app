import { AiFillCaretDown } from "react-icons/ai";

type Props = {
  title: string;
  options: string[];
  selectedOptions: string[];
  onChangeType: string;
  handleCheckboxChange: (name: string, type: string) => void;
};

const DropdownSelect = ({
  title,
  options,
  selectedOptions,
  onChangeType,
  handleCheckboxChange,

}: Props) => {
  return (
    <div className="dropdown-bottom dropdown w-full">
      <div
        tabIndex={0}
        className="btn flex w-full justify-between border-gray-200 bg-transparent transition duration-300 hover:shadow-md"
      >
        <span>{title}</span>
        <AiFillCaretDown />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu rounded-box z-[1] w-52 space-y-2 bg-base-100 p-3 shadow"
      >
        {options.map((option) => (
          <label
            key={option}
            className="flex btn btn-ghost font-normal btn-xs w-full cursor-pointer items-center justify-between gap-1"
          >
            <span className="label-text">{option}</span>
            <input
              type="checkbox"
              className=" checkbox checkbox-sm"
              name={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option, onChangeType)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default DropdownSelect;
