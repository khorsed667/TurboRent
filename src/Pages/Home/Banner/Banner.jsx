import { BiSolidLike } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="banner-container bg-slate-100 m-0">
            <div className="banner-section flex margins">
                <div className="text-area w-1/2">
                    <div className="theme-text  flex-row items-center paddings">
                        <div className='flex items-center border-1 p-1 w-2/3 rounded-xl bg-white my-5'><p><BiSolidLike className='text-orange-500 me-1 text-xl'></BiSolidLike></p><p>100% trusted car rental platform in Bangladesh</p></div>
                        <div className='text-5xl font-bold my-2 text-black'>Enjoy your dream with </div> 
                        <div className='text-5xl font-bold my-2 text-orange-500'> our exciting Wheels</div>
                        <div className='text-bold secondaryText my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum similique dolore officia, <br /> tenetur obcaecati quibusdam commodi a magni natus consectetur Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Aspernatur, amet.</div>
                        <button className='flex my-8 items-center font-semibold border-2 p-5 button'>Discover Wheels <FaArrowRight className='mx-3'></FaArrowRight></button>
                    </div>
                </div>
                <div className="img-area w-1/2 paddings">
                    <img className='' src="./car-banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;