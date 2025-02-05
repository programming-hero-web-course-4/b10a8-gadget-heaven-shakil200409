import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic section */}
      <section className="bg-base-300 h-10">
        <Outlet />
      </section>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
