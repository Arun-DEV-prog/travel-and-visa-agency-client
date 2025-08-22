import React from "react";
import Navber from "../components/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navber />
      </div>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
