const Nav = () => {
  const navLink = (
    <>
      <li>
        <a className="text-lg font-semibold hover:text-orange-500">Home</a>
      </li>
      <li>
        <a className="text-lg font-semibold hover:text-orange-500">Cars</a>
      </li>
      <li>
        <a className="text-lg font-semibold hover:text-orange-500">Bookings</a>
      </li>
      <li>
        <a className="text-lg font-semibold hover:text-orange-500">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar p-0 md:px-1 2xl:relative bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 m-0"
              fill="orange"
              viewBox="0 0 24 24"
              stroke="orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div><img className="w-[40px] xsm:hidden sm:block" src="./../../../../public/images (1).png" alt="" /></div>
        <a className="btn btn-ghost normal-case text-xl">TurboRent</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mx-2">Sing In</a>
      </div>
    </div>
  );
};

export default Nav;
