const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold my-4">{title}</h3>
      <p className="text-gray-500">{subTitle}</p>
    </div>
  );
};

export default Heading;
