import React from "react";
import State from "../../components/Stock/State";
import {
  AiOutlineCaretDown,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { BsFillCalculatorFill } from "react-icons/bs";
import { capitalizeFirstLetter } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Props = {};

const tableHeaders = [
  "ID",
  "name",
  "price",
  "quantity",
  "category",
  "new arraival",
  "featured",
  "rating",
];

const Stock = (props: Props) => {
  const { data: products } = useSelector((state: RootState) => state.products);
  return (
    <>
      <div className="space-y-4">
        <State />
        <p className="font-notosanslao">20 ລາຍການ / ຕົ້ນທຶນ</p>
        <div className="container rounded-md border bg-white p-2 shadow-sm">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="dropdown">
              <label tabIndex={0} className="btn">
                Status
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
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn">
                Categories
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
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn">
                Click
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
            </div>
            
            {/* Search bar */}
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
                className="-ml-5 w-full min-w-[18rem] rounded-md border px-10 py-[0.7rem] font-notosanslao outline-none "
              />

              <button className="top-1/5 absolute right-1 rounded-lg p-2 transition hover:bg-gray-200">
                <BsFillCalculatorFill className="text-2xl text-gray-500" />
              </button>
            </div>
            <button className="btn btn-primary">
              ADD
              <AiOutlinePlus />
            </button>
          </div>
          {/* Search bar end */}

          <div className="divider"></div>

          {/* pagination */}
          <div className="flex items-center justify-between">
            <p className="font-notosanslao">20 ລາຍການ</p>
            <div>
              <div className="flex items-center gap-1 font-notosanslao">
                <button className="btn-sm btn btn-primary text-white">
                  ກັບຄືນ
                </button>
                <button className="btn-sm btn">1</button>
                <button className="btn-active btn-sm btn">2</button>
                <button className="btn-sm btn">3</button>
                <button className="btn-sm btn">4</button>
                <button className="btn-sm btn btn-primary text-white">
                  ໄປໜ້າ
                </button>
              </div>
            </div>
          </div>
          {/* pagination end */}

          <div className="divider"></div>
          {/* Table */}
          <div className="max-h-[50rem] overflow-x-auto overflow-y-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  {tableHeaders.map((header) => (
                    <th className="text-[1rem]" key={header}>{capitalizeFirstLetter(header)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>
                      {/* <button className="btn-xs btn">
                      </button> */}
                      <div className="dropdown">
                        <label tabIndex={0} className="btn-xs btn m-1">
                          <CiCircleMore size={15} />
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
                      </div>
                    </td>
                    <td>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </td>
                    <td>{product.id}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={product.images[0]}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{product.price}</td>
                    <td>2</td>
                    <td>{product.categories}</td>
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-xs"
                        defaultChecked={product.isNewArrival ? true : false}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-xs"
                        defaultChecked={product.isFeatured ? true : false}
                      />
                    </td>
                    <td>{product.ratings}</td>
                    {/* <td>
                      <button className="btn-ghost btn-xs btn">details</button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              {/* <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
