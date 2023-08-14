import useCars from "../../../hooks/useCars";
import SingleCar from "../../Components/SingleCar";

const MercedesCars = () => {
  const [cars] = useCars();

  const mercedesCars = cars.filter((car) => car.brand === "Mercedes-Benz");

  const sortingMercedes = mercedesCars.slice(0, 6);

  return (
    <div className="car-container">
      <div className="car-section  xsm:mx-5 sm:mx-24 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 2xl:gap-x-40">
        {sortingMercedes.map((item, index) => (
          <SingleCar key={index} item={item}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default MercedesCars;
