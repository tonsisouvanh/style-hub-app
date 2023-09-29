import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RootLayout({ children, showSidebarAndHeader = true }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
