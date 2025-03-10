import { useEffect } from "react";
import Heading from "../Components/Heading";

const Details = () => {
  // For dynamic pathname on the title
  useEffect(() => {
    document.title = "Gadget Heaven | Product Details";
  }, []);
  return (
    <div className="bg-purple-500 py-10">
      <Heading
        title={"Product Details"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
    </div>
  );
};

export default Details;
