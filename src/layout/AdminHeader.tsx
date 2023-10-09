import { Link } from "react-router-dom";
import Logo from "../assets/images/cyberpunk.png";
import DropdownMessage from "../components/Dropdown/DropdownMessage";
import DropdownNotification from "../components/Dropdown/DropdownNotification";
import DropdownUser from "../components/Dropdown/DropdownUser";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { themes } from "../data/data";
import { useEffect, useState } from "react";

const AdminHeader = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", theme || "");
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme || "");
  }, [theme]);
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-secondary-content">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-md md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}

          <button
            className="group btn-sm btn flex flex-col items-center justify-center rounded border p-1 lg:hidden"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link
            className="block h-auto flex-shrink-0 rounded-full bg-white p-1 lg:hidden"
            to="/"
          >
            <img className="w-10" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <form className="">
            <div className="relative">
              <button className="absolute left-1 top-1/2 -translate-y-1/2">
                <BiSearch className="text-xl font-bold text-slate-500" />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 focus:outline-none"
              />
            </div>
          </form>
        </div>

        <div className="2xsm:gap-7 flex items-center gap-3">
          <ul className="2xsm:gap-4 flex items-center gap-2">
            {/* <!-- Dark Mode Toggler --> */}
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn-accent btn-sm btn m-1 rounded-full"
              >
                Theme
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-[1] w-52 max-w-fit space-y-2 bg-base-100 p-2 shadow"
              >
                {themes.map((theme) => (
                  <li
                    className="btn-xs btn w-fit"
                    onClick={() => setTheme(theme)}
                    key={theme}
                  >
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
