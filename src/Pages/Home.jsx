import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import bannerImg from "../assets/banner.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Gadget Heaven";
  }, []);
  return (
    <>
      <section className="px-4 relative flex flex-col items-center justify-center bg-base-200 ">
        <div className="bg-purple-500 rounded-xl my-3 max-w overflow-hidden ">
          {/* Navbar */}
          <Navbar></Navbar>

          {/* Banner Content */}
          <div className="px-5 md:px-10 lg:px-20 text-center">
            <img
              className="rounded-lg md:hidden"
              src={bannerImg}
              alt="Banner"
            />
            <h1 className="text-lg md:text-3xl lg:text-5xl font-bold  text-white py-4 md:py-8 lg:leading-16">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white/70 text-sm md:text-base md:px-20 lg:px-44 mb-5 md:mb-8">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="px-5 py-2.5 rounded-full text-sm md:text-base lg:text-lg font-bold bg-white text-purple-500 mb-7 md:mb-28 lg:mb-48">
              Shop Now
            </button>
          </div>
        </div>
        {/* Banner Image */}
        <div className="absolute hidden md:inline bg-white/40 border-2 m-10 border-white rounded-xl md:rounded-3xl p-4 z-50 top-94 md:top-86 lg:top-102">
          <div className="banner-img md:h-[320px] md:w-[620px] lg:h-[505px] lg:w-[990px] mx-auto rounded-lg md:rounded-xl bg-center bg-cover"></div>
        </div>
        {/* Gadgets section */}
        <div className="min-h-[calc(100vh-65px)] max-w p-4 relative md:top-68 lg:top-108">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
            Explore Cutting-Edge Gadgets
          </h2>

          {/* Dynamic Section */}
          <Outlet />
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default Home;
