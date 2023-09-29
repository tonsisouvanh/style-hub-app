import { useState } from "react";
import ClickOutsideHandler from "./ClickOutsideHandler";

function RootLayout({ children, showSidebarAndHeader = true }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="flex">
      {showSidebarAndHeader && (
        <ClickOutsideHandler setIsOpen={setOpenSidebar}>
          <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </ClickOutsideHandler>
      )}
      <div className="flex-1 overflow-hidden">
        {showSidebarAndHeader && (
          <ClickOutsideHandler setIsOpen={setOpenSidebar}>
            <Header
              hasNotification={true}
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          </ClickOutsideHandler>
        )}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
