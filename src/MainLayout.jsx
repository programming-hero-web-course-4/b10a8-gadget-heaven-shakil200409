import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// For dynamic pathname on the title

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic section */}
      <section className="bg-base-300 min-h-[calc(100vh-65px)]">
        <Outlet />
      </section>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
