import Cover from "../../Components/Cover";
import SingleCar from "../../Components/SingleCar";

const CarCategory = ({ items, img, heading }) => {
  return (
    <div className="my-5">
      <Cover img={img} heading={heading}></Cover>
      <div className="car-section xsm:mx-5 sm:mx-24 my-5 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-x-32 md:gap-10">
        {items.map((item, index) => (
          <SingleCar key={index} item={item}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default CarCategory;
