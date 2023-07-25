

const Nav = () => {
    return (
            <div className="nav-container">
                <div className="nav-section flex flex-row justify-between">
                    <div className="logo-area flex flex-row p-4">
                        <div><img className="w-[40px]" src="./../../../../public/images (1).png" alt="" /></div>
                        <div><span className="text-black text-3xl font-semibold">Turbo</span><span className="text-orange-500 text-3xl font-semibold">Rent</span></div>
                    </div>
                    <div className="links-area py-5">
                        <ul className="flex flex-row">
                            <li className="px-2 text-lg cursor-pointer font-normal">Home</li>
                            <li className="px-2 text-lg cursor-pointer font-normal">Cars</li>
                            <li className="px-2 text-lg cursor-pointer font-normal">Bookings</li>
                            <li className="px-2 text-lg cursor-pointer font-normal">Products</li>
                            <li className="px-2 text-lg cursor-pointer font-normal">Contact</li>
                        </ul>
                    </div>
                    <div className="authenticate-area flex flex-row p-4">
                        <button className="px-2 text-lg cursor-pointer">Sign Up</button>
                        <button className="px-2 text-lg cursor-pointer">Sing In</button>
                    </div>
                </div>
            </div>
    );
};

export default Nav;