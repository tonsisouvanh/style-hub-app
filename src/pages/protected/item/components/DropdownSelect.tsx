import { AiFillCaretDown } from "react-icons/ai";
import { Category } from "../../../../types";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  options: Category[];
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<Category[]>(options);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterItems(event.target.value);
  };

  // Filter items based on the search term
  const filterItems = (query: string) => {
    const filtered = options.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredItems(filtered);
  };

  // Update filtered items when options change
  useEffect(() => {
    setFilteredItems(options);
  }, [options]);
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
        className="dropdown-content menu rounded-box z-[10] !max-h-[15rem] w-full space-y-2 overflow-x-auto border bg-base-100 p-3 shadow"
      >
        <div>
          <div className="w-full">
            <input
              className="input-bordered input input-xs join-item mb-2 w-full focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {filteredItems.map((option) => (
              <label
                key={option.name}
                className="btn-ghost btn-xs btn flex cursor-pointer items-center justify-between gap-1 font-normal"
              >
                <span className="label-text text-xs">{option.name}</span>
                <input
                  type="checkbox"
                  className=" checkbox checkbox-sm"
                  name={option.name}
                  checked={selectedOptions.includes(option.name)}
                  onChange={() =>
                    handleCheckboxChange(option.name, onChangeType)
                  }
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownSelect;

// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { AiFillCaretDown } from "react-icons/ai";
// import { Product } from "../../../../types";

// type Props = {
//   title: string;
//   options: string[];
//   selectedOptions: string[];
//   onChangeType: string;
//   handleCheckboxChange: (name: string, type: string) => void;
//   register?: UseFormRegister<Product>;
//   errors?: FieldErrors<Product>;
// };

// const DropdownSelect = ({
//   title,
//   options,
//   selectedOptions,
//   onChangeType,
//   handleCheckboxChange,
//   register,
//   errors,
// }: Props) => {
//   return (
//     <div className="dropdown-bottom dropdown w-full">
//       <div
//         tabIndex={0}
//         className="btn flex w-full justify-between border-gray-200 bg-transparent transition duration-300 hover:shadow-md"
//       >
//         <span>{title}</span>
//         <AiFillCaretDown />
//       </div>
//       <div
//         tabIndex={0}
//         className="dropdown-content menu rounded-box z-[1] w-52 space-y-2 bg-base-100 p-3 shadow"
//       >
//         {options.map((option) => (
//           <label
//             key={option}
//             className="btn-ghost btn-xs btn flex w-full cursor-pointer items-center justify-between gap-1 font-normal"
//           >
//             <span className="label-text">{option}</span>
//             <input
//               {...register?.(option as keyof Product, {
//                 required: true,
//               })}
//               type="checkbox"
//               className="checkbox checkbox-sm"
//               name={option}
//               checked={selectedOptions.includes(option)}
//               onChange={() => handleCheckboxChange(option, onChangeType)}
//             />
//           </label>
//         ))}
//       </div>
//       {errors && selectedOptions.length <= 0 && (
//         <p className="text-error">Please select at least one option</p>
//       )}
//     </div>
//   );
// };

// export default DropdownSelect;
