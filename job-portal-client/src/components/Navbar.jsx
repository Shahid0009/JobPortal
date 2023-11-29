import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "start a search" },
    { path: "/my-job", title: "My jobs" },
    { path: "/salary", title: "salary Exchange" },
    { path: "/post-job", title: "Post a job" },
  ];
  return (
    <header className="px-4 xl:px-24 mx-auto">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-primary">
          LogoSHA
        </a>

        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                {/* other code */}
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* This is Loin Buttons */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded ">
            Login
          </Link>
          <Link to="/sing-up" className="py-2 px-5 border rounded bg-blue">
            Singup
          </Link>
        </div>

        <div className="lg:hidden md:hidden ">
          <button onClick={handleMenu}>
            {isMenuOpen ? (
              <GiTireIronCross className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* nav items for mobile */}
      <div
        className={`px-4 py-5 bg-black text-white text-1xl rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="">
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {/* other code */}
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white pt-2">
            <Link to="/login" className="py-1 px-4 border rounded ">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
