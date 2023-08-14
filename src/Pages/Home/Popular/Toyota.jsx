import useCars from "../../../hooks/useCars";
import SingleCar from "../../Components/SingleCar";

const Toyota = () => {
  const [cars] = useCars();

  const toyotaCars = cars.filter(car => car.brand === "Toyota")

  const sortingToyota = toyotaCars.slice(0,6);

  return (
    <div className="car-container">
      <div className="car-section  xsm:mx-5 sm:mx-24 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 2xl:gap-x-40">
        {sortingToyota.map((item, index) => (
          <SingleCar key={index} item={item}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default Toyota;