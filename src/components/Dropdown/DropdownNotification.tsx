import { useEffect, useRef, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";

const notificationData = [
  {
    id: 1,
    text: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  },
  {
    id: 2,
    text: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  },
  {
    id: 3,
    text: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  },
  {
    id: 4,
    text: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  },
  {
    id: 5,
    text: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  },
  {
    id: 6,
    text: "It is a long established fact that a reader will be distracted by the readable.",
    date: "24 Feb, 2025",
  },
  {
    id: 7,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    date: "04 Jan, 2025",
  },
  {
    id: 8,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    date: "01 Dec, 2024",
  },
];

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

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
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        to="#"
        className="border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 relative flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] hover:text-primary "
      >
        {/* <span className="z-1 bg-meta-1 absolute -top-0.5 right-0 h-2 w-2 rounded-full">
          <span className="-z-1 bg-meta-1 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
        </span> */}
        <AiOutlineBell className="fill-current text-2xl duration-300 ease-in-out" />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`border-stroke shadow-default dark:border-strokedark dark:bg-boxdark dropdown-content rounded-box absolute -right-20 mt-2.5 flex h-auto w-52 flex-col border bg-white p-4 shadow-lg sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium">Notification</h5>
        </div>

        {/* <ul className="flex h-96 flex-col overflow-y-scroll">
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">
                  It is a long established fact
                </span>{" "}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">There are many variations</span> of
                passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">04 Jan, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
              to="#"
            >
              <p className="text-sm">
                <span className="text-black">There are many variations</span> of
                passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">01 Dec, 2024</p>
            </Link>
          </li>
        </ul> */}
        <ul className="flex h-96 flex-col overflow-y-scroll">
          {notificationData.map((notification) => (
            <li key={notification.id}>
              <Link
                className="border-stroke px-4.5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t py-3"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-black">{notification.text}</span>
                </p>
                <p className="text-xs">{notification.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
