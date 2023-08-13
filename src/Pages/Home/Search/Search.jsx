import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="search-container my-10">
        <div className="search-section mx-auto left-[8%] 2xl:absolute 2xl:top-[510px] w-5/6 bg-white xsm:px-8 sm:px-16 rounded-xl grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="location-container sm:m-[1%] sm:p-[1%]">
            <p className="font-semibold">Pickup Location</p>
            <div className="pickup-location border-2 items-center flex justify-between rounded-md">
              <MdOutlineLocationOn className="text-orange-500 ms-2 text-xl"></MdOutlineLocationOn>
              <input
                type="text"
                className="p-2 outline-none"
                placeholder="Enter Road; City; State;"
              />
            </div>
          </div>
          <div className="picup-date-container sm:m-[1%] sm:p-[1%]">
            <p className="font-semibold">Pickup Date</p>
            <div className="pickup-date border-2 items-center flex justify-between rounded-md">
              <BsCalendarDateFill className="ms-2 text-orange-500"></BsCalendarDateFill>
              <DatePicker
                className="p-2 text-center outline-none secondaryText"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="picup-date-container sm:m-[1%] sm:p-[1%]">
            <p className="font-semibold">Return Date</p>
            <div className="pickup-date border-2 items-center flex justify-between rounded-md">
              <BsCalendarDateFill className="ms-2 text-orange-500"></BsCalendarDateFill>{" "}
              <DatePicker
                className="p-2 text-center outline-none secondaryText"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <button className="button items-center flex justify-center py-5 lg:mx-4 mx-auto mt-5">
            Search
          </button>
        </div>
    </div>
  );
};

export default Search;
