import React from "react";
import { Link, Outlet } from "react-router";
import { FaHome, FaBox, FaUser, FaSignOutAlt } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const Dashboardlayout = () => {
  return (
    <div className="min-h-screen w-full primary-font bg-white relative">
      {/* Dual Gradient Overlay (Top) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      {/* Your Content/Components */}
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
              <Link
                to="/"
                className="text-lg font-bold flex items-center gap-2"
              >
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
              <Link
                to="/dashboard/addJLPTN5"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add JLPT N5 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/DeleteJLPTN5"
                className="flex items-center gap-2"
              >
                <MdDelete size={25} /> Delete JLPT N5 Course
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addNAT" className="flex items-center gap-2">
                <RiAddBoxFill size={25} /> Add Nat Course
              </Link>
              <Link
                to="/dashboard/DeleteNat"
                className="flex items-center gap-2"
              >
                <MdDelete size={25} /> Delete NAT Course
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addN4" className="flex items-center gap-2">
                <RiAddBoxFill size={25} /> Add N4 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/DeleteN4"
                className="flex items-center gap-2"
              >
                <MdDelete size={25} /> Delete N4 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addA1Course"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add A1 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/DeleteA1"
                className="flex items-center gap-2"
              >
                <MdDelete size={25} /> Delete A1 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addA2Course"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add A2 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addB2Course"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add B1 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addB1Course"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add B2 Course
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/addTopikCourse"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add Topik1 Course
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/addTopik2Course"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add Topik2 Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addEpsCourse"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add EpsTopik Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addHistory"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add History
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addStaff"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add Staff
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addevents"
                className="flex items-center gap-2"
              >
                <RiAddBoxFill size={25} /> Add Events
              </Link>
            </li>

            <li>
              <a
                href="/logout"
                className="flex items-center gap-2 text-red-600"
              >
                <FaSignOutAlt size={25} /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
