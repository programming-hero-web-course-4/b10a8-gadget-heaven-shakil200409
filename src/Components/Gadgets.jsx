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
    <section>
      <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-10 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 w-72 p-4 py-6 h-full rounded-2xl bg-white">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category)}
              className={`font-semibold bg-gray-200 w-full px-5 py-3 text-left rounded-full ${
                active.slug === category.slug
                  ? "bg-purple-500 text-white"
                  : "text-gray-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGadgets.map((gadget) => (
            <ProductCard key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gadgets;
