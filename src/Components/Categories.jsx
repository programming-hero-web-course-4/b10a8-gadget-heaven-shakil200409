import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="bg-white p-6 flex flex-col gap-10 rounded-2xl border border-gray-200 w-64">
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "bg-purple-500 text-white" : "bg-bg-base-200 text-black"
          } text-lg font-bold px-5 py-2.5 rounded-full `
        }
      ></NavLink>
    </div>
  );
};

export default Categories;
