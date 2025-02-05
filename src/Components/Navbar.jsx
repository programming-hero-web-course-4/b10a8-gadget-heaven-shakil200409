import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "text-purple-500" : "text-gray-600"}font-medium `
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "text-purple-500" : "text-gray-600"}font-medium `
        }
        to={"/blogs"}
      >
        Blogs
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "text-purple-500" : "text-gray-600"}font-medium `
        }
        to={"/stats"}
      >
        Statistics
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "text-purple-500" : "text-gray-600"}font-medium `
        }
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="text-base md:text-lg lg:text-xl font-bold" to={"/"}>
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="nav-icon">
            <IoCartOutline size={20} />
          </div>
          <div className="nav-icon ">
            <IoHeartOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
