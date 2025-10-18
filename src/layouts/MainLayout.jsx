import React from "react";

import Hero from "../components/Hero/Hero";
import Staff from "../components/Staff/Staff";
import Testimonials from "../components/Testimonials/Testimonials";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import Navber from "../components/Navber/Navber";
import AllCourses from "../components/AllCourses/AllCourses";

const MainLayout = () => {
  return (
    <div>
      <nav className="">
        <Navber />
      </nav>
      <main className=" mt-7 md:mt-30">
        <Hero />
        <AllCourses />
        <Staff />
        <Testimonials />
        <Services />
      </main>
    </div>
  );
};

export default MainLayout;
