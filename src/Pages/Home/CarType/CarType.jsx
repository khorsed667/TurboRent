import { FaTruckPickup } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { IoCarSport } from "react-icons/io5";
import { BsCarFrontFill } from "react-icons/bs";

const CarType = () => {
    return (
        <div className="carType-container">
            <div className="carType-section my-2 margins paddings flex flex-col justify-center items-center">
                <div className="carType-heading w-2/5 mx-auto text-center">
                    <p className="text-2xl font-bold">
                        Most Popular Cartype
                    </p>
                    <p className="secondaryText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel aliquid iste quis quod dignissimos.
                    </p>
                </div>
                <div className="all-carTypes flex justify-between mt-5 w-full">
                    <div className="car w-1/6 h-[100px] p-2 text-center bg-slate-100 rounded-lg">
                        <FaTruckPickup className="text-2xl mx-auto text-orange-500"></FaTruckPickup>
                        <p  className="text-xl">Pickup</p>
                        <p className="secondaryText">17 Cars</p>
                    </div>
                    <div className="car w-1/6 h-[100px] p-2 text-center bg-slate-100 rounded-lg">
                        <AiFillCar className="text-2xl mx-auto text-orange-500"></AiFillCar>
                        <p  className="text-xl">Family MPV</p>
                        <p className="secondaryText">11 Cars</p>
                    </div>
                    <div className="car w-1/6 h-[100px] p-2 text-center bg-slate-100 rounded-lg">
                        <BsCarFrontFill className="text-2xl mx-auto text-orange-500"></BsCarFrontFill>
                        <p  className="text-xl">Sedan</p>
                        <p className="secondaryText">13 Cars</p>
                    </div>
                    <div className="car w-1/6 h-[100px] p-2 text-center bg-slate-100 rounded-lg">
                        <IoCarSport className="text-2xl mx-auto text-orange-500"></IoCarSport>
                        <p  className="text-xl">Sports</p>
                        <p className="secondaryText">21 Cars</p>
                    </div>
                </div>
                <button className="button mt-2 w-1/6">View all Cars..</button>
            </div>
        </div>
    );
};

export default CarType;