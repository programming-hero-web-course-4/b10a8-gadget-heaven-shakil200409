import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic section */}
      <section className="min-h-[calc(100vh-65px)]">
        <Outlet />
      </section>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
