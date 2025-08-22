import React from "react";
import logo from "../../assets/bg remove logo.png";
import { Link } from "react-router";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md p-5 fixed top-0 left-0 z-50">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 h-[500px] p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className=" flex">
            <img className=" w-25" src={logo} alt="" />
            <a className="primary-font text-xl">
              <span className=" text-xl italic text-[#b40e14]">Monowara</span>{" "}
              Group
            </a>
          </div>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu primary-font text-[16px] menu-horizontal px-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details className="">
                <summary>Services</summary>
                <ul className="p-5 z-50 w-50 h-50">
                  <li>
                    <details>
                      <summary>
                        <a>Japan</a>
                      </summary>
                      <ul>
                        <li>JTE</li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>Singapure</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn primary-font">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
