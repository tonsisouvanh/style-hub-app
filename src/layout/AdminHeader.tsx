import { Link } from "react-router-dom";
import Logo from "../assets/images/cyberpunk.png";
import DropdownMessage from "../components/Dropdown/DropdownMessage";
import DropdownNotification from "../components/Dropdown/DropdownNotification";
import DropdownUser from "../components/Dropdown/DropdownUser";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

const AdminHeader = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="z-[999] drop-shadow-1 dark:bg-boxdark sticky top-0 flex w-full bg-white dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-md md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}

          <button
            className="group flex flex-col items-center justify-center rounded border p-1 lg:hidden"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
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
            {/* <DarkModeSwitcher /> */}
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
