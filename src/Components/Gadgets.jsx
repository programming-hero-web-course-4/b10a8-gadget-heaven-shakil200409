import Categories from "./Categories";

const Gadgets = () => {
  return (
    <>
      <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-10">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-10">
        <Categories />
      </div>
    </>
  );
};

export default Gadgets;
