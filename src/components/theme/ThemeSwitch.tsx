import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaBlackTie } from "react-icons/fa";
import { themes } from "../../data/data";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
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
    <div className="dropdown">
      <label tabIndex={0} className="btn-secondary btn-sm btn m-1 rounded-full">
        {theme === "night" ? (
          <BsFillMoonFill />
        ) : theme === "winter" ? (
          <BsFillSunFill />
        ) : (
          <FaBlackTie />
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-[2] max-h-[20rem] w-fit bg-base-100 p-2 shadow"
      >
        {themes.map((theme) => (
          <li className="" onClick={() => setTheme(theme)} key={theme}>
            <a>
              {theme === "night" ? (
                <BsFillMoonFill />
              ) : theme === "winter" ? (
                <BsFillSunFill />
              ) : (
                <FaBlackTie />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitch;
