// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { sliderSettings } from "../../Components/slidefn";
import useCars from "../../../hooks/useCars";
import SingleCar from "../../Components/SingleCar";

const BMWCars = () => {
  
  const [cars] = useCars();

  const bmwCars = cars.filter(car => car.brand === "BMW")

  const sortingBMW = bmwCars.slice(0,6)

  return (
    <div className="car-container">
      <div className="car-section xsm:mx-5 sm:mx-24 md:mx-10 grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 2xl:gap-x-40">
        {/* <Swiper {...sliderSettings}> */}
          {sortingBMW.map((item, index) => (
            // <SwiperSlide>
            <SingleCar key={index} item={item}></SingleCar>
            // </SwiperSlide>
          ))}
          {/* <SlideButtons></SlideButtons> */}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default BMWCars;

// const SlideButtons = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="swiper-buttons">
//       <button onClick={() => swiper.slidePrev()}>&lt;</button>
//       <button onClick={() => swiper.slideNext()}>&gt;</button>
//     </div>
//   );
// };
