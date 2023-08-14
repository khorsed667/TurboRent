import { BiSolidLike } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="banner-container bg-slate-100 m-0 ">
            <div className="banner-section flex justify-center xsm:py-8 lg:py-0 xl:mx-10">
                <div className="text-area flex flex-row w-full items-center md:w-1/2">
                    <div className="theme-text  flex-row items-center p-4">
                        <div className=' items-center border-1 p-1 sm:w-2/3 rounded-xl bg-white xl:my-5'><span><BiSolidLike className='text-orange-500 me-1 inline text-xl'></BiSolidLike></span><p className='inline'>Trusted rental platform in Bangladesh</p></div>
                        <div className='xl:text-5xl md:text-2xl xsm:text-xl font-bold md:my-2 text-black'>Enjoy your dream with </div> 
                        <div className='xl:text-5xl md:text-2xl xsm:text-xl font-bold md:my-2 text-orange-500'> our exciting Wheels</div>
                        <div className='text-bold secondaryText my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum similique dolore officia, tenetur obcaecati quibusdam commodi a magni.</div>
                        <button className='flex xl:my-8 lg:my-3 items-center font-semibold border-2 p-5 button'>Discover Wheels <FaArrowRight className='mx-3'></FaArrowRight></button>
                    </div>
                </div>
                <div className="img-area w-1/2 xl:p-4 hidden md:block">
                    <img className='' src="./car-banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;