import useCars from "../../../hooks/useCars";
import SingleCar from "../../Components/SingleCar";

const Honda = () => {
  const [cars] = useCars();

  const hondaCars = cars.filter(car => car.brand === "Honda");

  const sortingHonda = hondaCars.slice(0,6);

  return (
    <div className="car-container">
      <div className="car-section  xsm:mx-5 sm:mx-24 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 2xl:gap-x-40">
        {sortingHonda.map((item, index) => (
          <SingleCar key={index} item={item}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default Honda;