import useCars from "../../../hooks/useCars";
import SingleCar from "../../Components/SingleCar";

const RoyalsCars = () => {
  const [cars] = useCars();

  const royceCars = cars.filter(car => car.brand === "Rolls-Royce")

  const sortingRoyce = royceCars.slice(0,6);
  return (
    <div className="car-container">
      <div className="car-section  xsm:mx-5 sm:mx-24 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 2xl:gap-x-40">
        {sortingRoyce.map((item, index) => (
          <SingleCar key={index} item={item}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default RoyalsCars;