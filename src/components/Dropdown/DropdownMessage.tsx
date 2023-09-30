import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import UserOne from "../../assets/images/user/user-01.png";
import UserTwo from "../../assets/images/user/user-02.png";
import UserThree from "../../assets/images/user/user-03.png";
import UserFour from "../../assets/images/user/user-04.png";
import { AiOutlineMessage } from "react-icons/ai";

const messageData = [
  {
    id: 1,
    name: "Mariya Desoja",
    message: "I like your confidence 💪",
    timeAgo: "2min ago",
    avatar: UserTwo, // Replace with your image import
  },
  {
    id: 2,
    name: "Robert Jhon",
    message: "Can you share your offer?",
    timeAgo: "10min ago",
    avatar: UserOne, // Replace with your image import
  },
  {
    id: 3,
    name: "Henry Dholi",
    message: "I came across your profile and...",
    timeAgo: "1day ago",
    avatar: UserThree, // Replace with your image import
  },
  {
    id: 4,
    name: "Cody Fisher",
    message: "I’m waiting for your response!",
    timeAgo: "5days ago",
    avatar: UserFour, // Replace with your image import
  },
];

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative" x-data="{ dropdownOpen: false, notifying: true }">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        to="#"
        className="border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 relative flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] hover:text-primary "
      >
        {/* <span className="z-1 bg-meta-1 absolute -top-0.5 right-0 h-2 w-2 rounded-full">
          <span className="-z-1 bg-meta-1 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
        </span> */}
        <AiOutlineMessage className="fill-current text-2xl duration-300 ease-in-out" />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        // className={`h-90 w-75 border-stroke shadow-default dark:border-strokedark dark:bg-boxdark absolute -right-16 mt-2 p-4 flex flex-col rounded-sm border bg-white sm:right-0 sm:w-80 ${
        //   dropdownOpen === true ? "block" : "hidden"
        // }`}
        className={`border-stroke shadow-default dark:border-strokedark dark:bg-boxdark dropdown-content rounded-box absolute -right-20 mt-2 flex h-auto w-52 flex-col border bg-white p-4 shadow-lg sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3">
          <h5 className="text-bodydark2 text-sm font-medium">Messages</h5>
        </div>

        {/* <ul className="flex h-96 flex-col overflow-y-scroll">
          <li>
            <Link
              className="border-stroke hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex gap-4 border-t px-4 py-3"
              to="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <img className="" src={UserTwo} alt="User" />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black ">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex gap-4 border-t px-4 py-3"
              to="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <img src={UserOne} alt="User" />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black ">Robert Jhon</h6>
                <p className="text-sm">Can you share your offer?</p>
                <p className="text-xs">10min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex gap-4 border-t px-4 py-3"
              to="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <img src={UserThree} alt="User" />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black ">Henry Dholi</h6>
                <p className="text-sm">I cam across your profile and...</p>
                <p className="text-xs">1day ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex gap-4 border-t px-4 py-3"
              to="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <img src={UserFour} alt="User" />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black ">Cody Fisher</h6>
                <p className="text-sm">I’m waiting for you response!</p>
                <p className="text-xs">5days ago</p>
              </div>
            </Link>
          </li>
        </ul> */}
        <ul className="flex h-96 flex-col overflow-y-scroll">
          {messageData.map((message) => (
            <li key={message.id}>
              <Link
                className="border-stroke hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex gap-4 border-t px-4 py-3"
                to="/messages"
              >
                <div className="h-12 w-12 rounded-full">
                  <img src={message.avatar} alt="User" />
                </div>
                <div>
                  <h6 className="text-sm font-medium text-black">
                    {message.name}
                  </h6>
                  <p className="text-sm">{message.message}</p>
                  <p className="text-xs">{message.timeAgo}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
