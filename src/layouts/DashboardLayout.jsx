import React from "react";
import { Link, Outlet } from "react-router";
import { FaHome, FaBox, FaUser, FaSignOutAlt } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";

const Dashboardlayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Small Device Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/" className="mx-2 flex-1 px-2 flex items-center gap-2">
            <FaHome /> Home
          </Link>
        </div>

        {/* Large Device Navbar */}
        <div className="hidden lg:flex navbar bg-base-300 w-full px-6 shadow-md">
          <div className="flex-1">
            <Link to="/" className="text-lg font-bold flex items-center gap-2">
              <FaHome /> Home
            </Link>
          </div>
          <div className="flex-none space-x-4 flex items-center">
            <Link
              to="/dashboard/profile"
              className="btn btn-ghost flex items-center gap-2"
            >
              <FaUser /> Profile
            </Link>
            <Link
              to="/logout"
              className="btn btn-outline btn-error flex items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        </div>

        {/* Outlet for nested routes */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-2">
          <li>
            <Link to="/dashboard/myParcel" className="flex items-center gap-2">
              <RiAddBoxFill size={25} /> Add Course
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="flex items-center gap-2">
              <RiAddBoxFill size={25} />
              Add Testimonial
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="flex items-center gap-2">
              <RiAddBoxFill size={25} />
              Add Notice
            </Link>
          </li>
          <li>
            <a href="/logout" className="flex items-center gap-2 text-red-600">
              <FaSignOutAlt size={25} /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboardlayout;
