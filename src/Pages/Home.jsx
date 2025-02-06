import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Gadget Heaven";
  }, []);
  return (
    <>
      <section className="px-4">
        <div className="bg-purple-500 rounded-xl my-3 max-w overflow-hidden">
          {/* Navbar */}
          <Navbar></Navbar>
          <div className="px-20 text-center">
            <h1 className="text-lg md:text-3xl lg:text-5xl font-bold  text-white py-10 lg:leading-16">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white/70 px-44 mb-10">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="px-5 py-3 rounded-full text-lg  font-bold bg-white text-purple-500 mb-10">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      {/* Dynamic section */}
      <section className="bg-base-300 min-h-[calc(100vh-65px)] max-w p-4">
        <Outlet />
      </section>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default Home;
