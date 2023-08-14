import useCars from "../../../hooks/useCars";
import SingleCar from "../../Components/SingleCar";

const AudiCars = () => {
  const [cars] = useCars()

  const audiCars = cars.filter((car) => car.brand === "Audi");

  const sortingBMW = audiCars.slice(0, 6);
  return (
    <div className="car-container">
      <div className="car-section xsm:mx-5 sm:mx-24 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-x-32 md:gap-10">
        {sortingBMW.map((item, index) => (
          <SingleCar key={index} item={item}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default AudiCars;
