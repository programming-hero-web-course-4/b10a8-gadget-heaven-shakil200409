import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;
  return (
    <div className="card rounded-2xl bg-base-100 shadow-xs">
      <figure className="px-5 pt-5">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl bg-base-300 h-[180px] w-full"
        />
      </figure>
      <div className="px-5 py-5 font-semibold">
        <h2 className="text-xl">{product_title}</h2>
        <p className="text-sm text-gray-400 my-3">Price: ${price}</p>
        <Link to={`/product/${product_id}`}>
          <button className="border-[1.5px] border-purple-500 border-b-red-500 hover:border-transparent hover:text-white hover:bg-purple-500 rounded-full px-5 py-2.5 text-purple-500 ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
