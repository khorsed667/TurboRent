import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="search-container">
        <div className="search-section left-[8%] absolute top-[455px] w-5/6 bg-white px-16 rounded-xl flex flex-row items-center justify-between">
          <div className="location-container w-1/4  mx-[1%] p-[1%]">
            <p className="font-semibold">Pickup Location</p>
            <div className="pickup-location border-2 items-center flex justify-center rounded-md">
              <MdOutlineLocationOn className="text-orange-500 text-xl"></MdOutlineLocationOn>
              <input
                type="text"
                className="p-2 outline-none"
                placeholder="Enter Road; City; State;"
              />
            </div>
          </div>
          <div className="picup-date-container w-1/4  mx-[1%] p-[1%]">
            <p className="font-semibold">Pickup Date</p>
            <div className="pickup-date border-2 items-center flex justify-between rounded-md">
              <BsCalendarDateFill className="ms-2 text-orange-500"></BsCalendarDateFill>{" "}
              <DatePicker
                className="p-2 text-center outline-none secondaryText"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="picup-date-container w-1/4  mx-[1%] p-[1%]">
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
          <buttton className="button w-1/4 items-center flex justify-center mx-4 mt-5">
            Search
          </buttton>
        </div>
    </div>
  );
};

export default Search;
