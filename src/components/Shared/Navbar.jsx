import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-product"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed top-0 z-40 px-12 bg-base-100 shadow-xl py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to={"/"}
          className=" hover:scale-105  font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-3xl "
        >
          Trend Mart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar">
              <div className="ring-teal-500 ring-offset-base-100 w-12 rounded-full ring ring-offset">
                <img src={user?.photoURL} />
              </div>
            </div>
            <button onClick={() => logOut()} className="btn btn-error text-white ml-4">Log Out</button>
          </>
        ) : (
          <Link
            className="btn text-white hover:bg-teal-400 bg-teal-500"
            to={"/login"}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
