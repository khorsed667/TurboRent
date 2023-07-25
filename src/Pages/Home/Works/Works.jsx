import {AiOutlineSearch} from 'react-icons/ai';
import {BsCalendar} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {BiMap} from 'react-icons/bi'

const Works = () => {
    return (
        <div className="work-container bg-slate-100 m-0">
            <div className="work-section margins paddings flex flex-col justify-center items-center">
                <div className="work-intro w-2/5 text-center mt-10">
                    <p className='text-2xl font-semibold'>How It Works</p>
                    <p className='secondaryText p-[1%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia eos, commodi qui numquam ullam a fuga illum quo quos.</p>
                </div>
                <div className="strategy-part flex justify-between items-center p-[1%] text-center">
                    <div className="select-car w-1/4 m-[1%]">
                        <AiOutlineSearch className='mx-auto text-5xl text-orange-500 border-dotted rounded-full border-2 border-orange-500 p-[1%]'></AiOutlineSearch>
                        <h3 className='text-xl font-semibold'>Browse and Select Vehicles</h3>
                        <p className='secondaryText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum minus laboriosam sint voluptas aperiam soluta autem at officia harum impedit!</p>
                    </div>
                    <div className="booking-car w-1/4 m-[1%]">
                        <BsCalendar  className='mx-auto text-5xl text-orange-500 border-dotted rounded-full border-2 border-orange-500 p-[1%]'></BsCalendar>
                        <h3 className='text-xl font-semibold'>Reservation and Booking</h3>
                        <p className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium non a sapiente blanditiis illum ad quaerat! Minima praesentium voluptatum quisquam.</p>
                    </div>
                    <div className="varify-car w-1/4 m-[1%]">
                        <FaUser  className='mx-auto text-5xl text-orange-500 border-dotted rounded-full border-2 border-orange-500 p-[1%]'></FaUser>
                        <h3 className='text-xl font-semibold'>Verification and Payment</h3>
                        <p className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque accusantium temporibus labore veritatis tenetur saepe, nam ab cupiditate eveniet.</p>
                    </div>
                    <div className="return-car w-1/4 m-[1%]">
                        <BiMap  className='mx-auto text-5xl text-orange-500 border-dotted rounded-full border-2 border-orange-500 p-[1%]'></BiMap>
                        <h3 className='text-xl font-semibold'>Pickup and Return</h3>
                        <p className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam pariatur labore est adipisci perferendis, accusantium praesentium quaerat ea.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;