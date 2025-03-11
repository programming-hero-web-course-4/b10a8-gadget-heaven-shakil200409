import { useEffect } from "react";
import Heading from "../Components/Heading";
import { useLoaderData, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io5";

const Details = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);
  const {
    product_image,
    product_title,
    price,
    description,
    rating,
    availability,
    Specification,
  } = product;
  // For dynamic pathname on the title
  useEffect(() => {
    document.title = "Gadget Heaven | Product Details";
  }, []);
  return (
    <>
      <section className="bg-purple-500 py-10 pb-48">
        <Heading
          title={"Product Details"}
          subTitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </section>
      <section className=" bg-base-200">
        <div className="flex gap-5 w-10/12 bg-white rounded-2xl p-5 mx-auto relative bottom-44">
          <div className=" w-[420px] h-[460px] border border-gray-200 rounded-xl">
            <img
              className="w-full h-full rounded-xl object-cover"
              src={product_image}
              alt={product_title}
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">{product_title}</h2>
            <p className="text-xl font-medium">Price: ${price}</p>
            <span
              className={`${
                availability
                  ? "text-green-500 border-green-500 bg-green-100"
                  : "text-red-500 bg-red-100 border-red-500"
              }  px-4 py-1.5 rounded-full border  text-sm`}
            >
              {availability === true ? "In Stock" : "Out of Stock"}
            </span>
            <p className="tetx-lg text-black/30 pt-4">{description}</p>
            <div>
              <h3 className="font-bold text-lg pb-4">Spacification:</h3>
              <ol>
                {Specification.map((spec, index) => (
                  <li className="text-black/30" key={index}>
                    {index}. {spec}
                  </li>
                ))}
              </ol>
            </div>
            <h3 className="font-bold flex items-center gap-3">
              Rating:{" "}
              <span className="">
                <IoIosStar style={{ color: blue }} />
              </span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
