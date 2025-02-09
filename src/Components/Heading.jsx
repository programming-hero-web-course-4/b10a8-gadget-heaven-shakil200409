import { useLocation } from "react-router-dom";

const Heading = ({ title, subTitle }) => {
  const { pathname } = useLocation();
  return (
    <div className="text-center">
      <h3 className={`text-3xl font-bold text-white`}>{title}</h3>
      <p className="text-white/70 w-2/3 mx-auto my-4">{subTitle}</p>
    </div>
  );
};

export default Heading;
