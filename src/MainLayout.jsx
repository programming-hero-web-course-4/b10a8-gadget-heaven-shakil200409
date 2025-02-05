import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic section */}
      <section>
        <Outlet />
      </section>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
