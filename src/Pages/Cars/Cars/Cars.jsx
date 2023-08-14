import { Helmet } from "react-helmet-async";
// import Cover from "../../Components/Cover";
import coverImg from "../../../../public/cars-headlight.jpg";
import useCars from "../../../hooks/useCars";
import CarCategory from "../CarCategory/CarCategory";
import Headline from "../../Components/Headline"

const Cars = () => {
  const [cars] = useCars();

  const popular = cars?.filter((itm) => itm.status === "popular");
  const Audi = cars?.filter((itm) => itm.brand === "Audi");
  const BMW = cars?.filter((itm) => itm.brand === "BMW");
  const Toyota = cars?.filter((itm) => itm.brand === "Toyota");
  const Honda = cars?.filter((itm) => itm.brand === "Honda");
  const Mercedes = cars?.filter((itm) => itm.brand === "Mercedes-Benz");
  const Rolls = cars?.filter((itm) => itm.brand === "Rolls-Royce");

  
  return (
    <div className="cars-container">
      <div className="cars-section">
        <Helmet>
          <title>Cars | TurboRent</title>
        </Helmet>

        <Headline
        subHeading={"Creck your Wheel now!"}
        headings={"Todays Offer"}
        ></Headline>


        <CarCategory
          img={coverImg}
          items={popular}
          heading={"Hot Bookings for You!"}
        ></CarCategory>
        <CarCategory
          img={coverImg}
          items={Audi}
          heading={"Book Your Audi"}
        ></CarCategory>
        <CarCategory
          img={coverImg}
          items={BMW}
          heading={"Book Your BMW"}
        ></CarCategory>
        <CarCategory
          img={coverImg}
          items={Toyota}
          heading={"Book Your Toyota"}
        ></CarCategory>
        <CarCategory
          img={coverImg}
          items={Honda}
          heading={"Book Your Honda"}
        ></CarCategory>
        <CarCategory
          img={coverImg}
          items={Mercedes}
          heading={"Book Your Mercedes"}
        ></CarCategory>
        <CarCategory
          img={coverImg}
          items={Rolls}
          heading={"Book Your Royace"}
        ></CarCategory>
      </div>
    </div>
  );
};

export default Cars;
