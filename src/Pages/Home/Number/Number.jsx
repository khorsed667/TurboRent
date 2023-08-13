import { RiCustomerServiceFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { IoSpeedometerSharp } from 'react-icons/io5';
import background from './../../../assets/number-bg.jpg'

const Number = () => {
    return (
        <div className="number-container bg-cover" style={{backgroundImage:`url(${background})`}}>
            <div className="number-section  xsm:py-8 lg:py-0 xl:mx-10 xsm:mx-2">
                <div className="number-headline xsm:w-5/6 sm:w-2/3 lg:w-2/5 mx-auto text-center">
                    <p className="text-2xl font-bold text-white">
                        Facts by the Number
                    </p>
                    <p className="secondaryText">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quia et laboriosam nesciunt ad veniam non voluptas corrupti dolore cupiditate.
                    </p>
                </div>
                <div className="number-info grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-7">
                    <div className='flex items-center justify-center rounded-xl  bg-slate-100 h-[80px] border-2 border-orange-500'>
                        <div className="img w-1/4 bg-black rounded-xl me-3 flex justify-center items-center h-[50px]"><BsFillPersonFill className='text-2xl text-white'></BsFillPersonFill></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">16K+</p>
                            <p className="secondaryText">Happy Customers</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center rounded-xl  bg-slate-100 h-[80px] border-2 border-orange-500'>
                        <div className="img w-1/4 bg-black rounded-xl me-3 flex justify-center items-center h-[50px]"><BsFillCarFrontFill className='text-2xl text-white'></BsFillCarFrontFill></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">1200+</p>
                            <p className="secondaryText">Numbers of Cars</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center rounded-xl  bg-slate-100 h-[80px] border-2 border-orange-500'>
                        <div className="img w-1/4 bg-black rounded-xl me-2 flex justify-center items-center h-[50px]"><RiCustomerServiceFill className='text-2xl text-white'></RiCustomerServiceFill></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">3600+</p>
                            <p className="secondaryText">Customers response</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center rounded-xl  bg-slate-100 h-[80px] border-2 border-orange-500'>
                        <div className="img w-1/4 bg-black rounded-xl me-3 flex justify-center items-center h-[50px]"><IoSpeedometerSharp className='text-2xl text-white'></IoSpeedometerSharp></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">200K+</p>
                            <p className="secondaryText">Total Kilometers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Number;