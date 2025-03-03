import { useState } from "react";
import categories from "../../public/categories";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Gadgets = () => {
  const gadgets = useLoaderData();
  const [active, setActive] = useState(categories[0]);
  const filteredGadgets =
    active.slug === "allProducts"
      ? gadgets
      : gadgets.filter((gadget) => {
          return gadget.category.toLowerCase() === active.name.toLowerCase();
        });
  return (
    <section className="">
      <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-10 text-center">
        Explore Cutting-Edge Gadgets {categories.length}
      </h2>
      <div className="flex">
        <div className="flex flex-col gap-3 w-52 p-4 rounded-2xl bg-white">
          {categories.map((category) => (
            <button
              onClick={() => setActive(category)}
              className={`font-semibold bg-gray-200 w-full px-5 py-2.5 text-center rounded-full ${
                active.slug === category.slug
                  ? "bg-purple-500 text-white"
                  : "text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {filteredGadgets.map((gadget) => (
            <ProductCard key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gadgets;
