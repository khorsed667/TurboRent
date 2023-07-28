import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import { BsSpeedometer } from "react-icons/bs";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosPricetag } from "react-icons/io";

const Toyota = () => {
  const [toyotaCar, setToyotaCar] = useState([]);

  fetch("toyota.json")
    .then((res) => res.json())
    .then((data) => setToyotaCar(data));

  return (
    <div className="car-container">
      <div className="car-section grid md:grid-cols-3 gap-5">
        {toyotaCar.map((item, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl relative">
            <figure>
              <img src={item.image} alt="Cars" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.carName}
                <div className="badge absolute top-5">{item.brand}</div>
              </h2>
              <hr />
              <div className="">
                <div className="flex">
                  {/* TODO: Need to impliment react rating */}
                  {/* <ReactRating
                    initialRating={item.rating} // Pass the rating value to initialRating prop
                    emptySymbol="far fa-star" // Customize the empty star icon
                    fullSymbol="fas fa-star" // Customize the full star icon
                    fractions={2} // You can set the fractions to have half stars, etc.
                  /> */}
                  <p className="text-sm">({item.rating})</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <MdLocationPin className="text-orange-500 mx-1"></MdLocationPin>
                    Dhaka
                  </div>
                  <div className="flex items-center">
                    <BsSpeedometer className="text-orange-500 mx-1"></BsSpeedometer>
                    {item.mileage}
                  </div>
                  <div className="flex items-center">
                    <SlSpeedometer className="text-orange-500 mx-1"></SlSpeedometer>
                    {item.topSpeed}
                  </div>
                </div>
                <div className="flex justify-between pt-1">
                    <div className="flex items-center">
                        <BsFillFuelPumpFill className="mx-1 text-orange-500"></BsFillFuelPumpFill>
                    <p>{item.engineType}</p>
                    </div>
                  <div className="flex items-center">
                    <IoIosPricetag className="mx-1 text-orange-500"></IoIosPricetag><p className="font-bold">{item.perDayPrice}$ / Week</p>
                  </div>
                </div>
                <button className="btn bg-black hover:text-black text-white btn-block">Rent Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toyota;