import { MdAdminPanelSettings } from 'react-icons/md';

const Choose = () => {
    return (
        <div className="chose-container">
            <div className="choose-section my-4 margins paddings">
                <div className="choose-heading w-2/5 mx-auto text-center my-5">
                    <p className="text-2xl font-bold">
                        Why Choose Us?
                    </p>
                    <p className="secondaryText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reiciendis iure quam voluptate architecto dolor quasi et porro odit ea.
                    </p>
                </div>
                <div className="choose-reason grid grid-cols-3 gap-5">
                    <div className='text-center border-2 border-orange-500 p-4 rounded-xl'>
                        <div className="img ps-[45%]"><MdAdminPanelSettings className='text-2xl'></MdAdminPanelSettings></div>
                        <p className="text-xl font-bold">Easy & Fast Booking</p>
                        <p className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde est ipsa distinctio veniam placeat.</p>
                    </div>
                    <div className='text-center border-2 border-orange-500 p-4 rounded-xl'>
                        <div className="img ps-[45%]"><MdAdminPanelSettings className='text-2xl'></MdAdminPanelSettings></div>
                        <p className="text-xl font-bold">Various Pickup destination</p>
                        <p className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iure, eum vel debitis nisi assumenda.</p>
                    </div>
                    <div className='text-center border-2 border-orange-500 p-4 rounded-xl'>
                        <div className="img ps-[45%]"><MdAdminPanelSettings className='text-2xl'></MdAdminPanelSettings></div>
                        <p className="text-xl font-bold">Customer Satisfaction</p>
                        <p className="secondaryText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi magni doloribus, assumenda debitis ullam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;