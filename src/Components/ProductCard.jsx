import React from "react";

const ProductCard = ({ gadget }) => {
  const { product_title, product_image } = gadget;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="h-[180px] bg-base-300 p-5">
        <img src={product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
