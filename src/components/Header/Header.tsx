import React, { useState } from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // JSX code representing your component's structure and content
    <>
      {/* {isOpen ? (
        <MobileHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
      ) : (
        <DesktopHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
      )} */}
        <MobileHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
        <DesktopHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
    </>
  );
};

export default Header;
