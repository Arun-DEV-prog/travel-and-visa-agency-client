"use client";

import * as React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { MenuIcon, XIcon } from "lucide-react";

import logo from "../../assets/bg remove logo.png";

// Define countries and their services
const services = {
  Japan: ["JTE Visa", "Technical Visa", "Student Visa"],
  Singapore: ["Work Permit", "Tourist Visa"],
  Canada: ["Student Visa", "Work Visa"],
};

export function NavberWithMobileSubmenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState < { key } > {};

  const toggleSubmenu = (key) => {
    setMobileSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-semibold">
              <span className="italic text-[#b40e14]">Monowara</span> Group
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-[#b40e14]">
                Home
              </Link>
            </li>

            {/* Services dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-[#b40e14]">
                Services
              </span>
              <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48">
                {Object.keys(services).map((country) => (
                  <li key={country} className="relative group">
                    <span className="px-4 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                      {country} ▸
                    </span>
                    <ul className="absolute top-0 left-full hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-40">
                      {services[country].map((visa) => (
                        <li key={visa} className="px-4 py-2 hover:bg-gray-100">
                          {visa}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/about-us" className="hover:text-[#b40e14]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#b40e14]">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Login */}
          <div className="hidden lg:flex">
            <Link
              to="/login"
              className="btn btn-sm bg-[#b40e14] hover:bg-red-700 text-white rounded-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:bg-gray-100 rounded"
              >
                Home
              </Link>
            </li>

            {/* Services Submenu */}
            <li>
              <button
                onClick={() => toggleSubmenu("services")}
                className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-100 rounded"
              >
                Services
                <span>{mobileSubmenuOpen["services"] ? "▾" : "▸"}</span>
              </button>
              {mobileSubmenuOpen["services"] && (
                <ul className="pl-4 flex flex-col gap-1">
                  {Object.keys(services).map((country) => (
                    <li key={country}>
                      <button
                        onClick={() => toggleSubmenu(country)}
                        className="w-full flex justify-between items-center py-1 px-2 hover:bg-gray-100 rounded"
                      >
                        {country} {mobileSubmenuOpen[country] ? "▾" : "▸"}
                      </button>
                      {mobileSubmenuOpen[country] && (
                        <ul className="pl-4 flex flex-col gap-1">
                          {services[country].map((visa) => (
                            <li key={visa}>
                              <Link
                                to="#"
                                className="block py-1 px-2 hover:bg-gray-100 rounded"
                              >
                                {visa}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/about-us"
                className="block py-2 px-4 hover:bg-gray-100 rounded"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block py-2 px-4 hover:bg-gray-100 rounded"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-4 bg-[#b40e14] text-white rounded hover:bg-red-700"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
