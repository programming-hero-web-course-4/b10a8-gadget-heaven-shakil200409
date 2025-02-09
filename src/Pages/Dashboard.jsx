import Heading from "../Components/Heading";

const Dashboard = () => {
  return (
    <section className="bg-purple-500 py-10 flex flex-col items-center">
      <Heading
        className={"text-white"}
        title={"Dashboard"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div className="flex gap-5">
        <button className="px-16 py-2 rounded-full text-sm md:text-base lg:text-lg font-extrabold text-white border border-white cursor-pointer hover:bg-white hover:text-purple-500 hover:border-transparent">
          Cart
        </button>
        <button className="px-16 py-2 rounded-full text-sm md:text-base lg:text-lg font-extrabold text-white border border-white cursor-pointer hover:bg-white hover:text-purple-500 hover:border-transparent">
          Wishlist
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
