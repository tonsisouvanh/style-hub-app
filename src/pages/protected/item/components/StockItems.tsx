import { CiCircleMore } from "react-icons/ci";
import { capitalizeFirstLetter } from "../../../../utils/utils";
import { Product } from "../../../../types";
import { noimage } from "../../../../assets/images";
type Props = {
  products: Product[];
};
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
const StockItems = (props: Props) => {
  return (
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
              <th className="text-[1rem]" key={header}>
                {capitalizeFirstLetter(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
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
                        src={product.images[0] || noimage}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockItems;
