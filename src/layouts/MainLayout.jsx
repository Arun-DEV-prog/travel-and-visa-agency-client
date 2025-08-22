import React from "react";
import Navber from "../components/Navber/Navber";
import Hero from "../components/Hero/Hero";
import Staff from "../components/Staff/Staff";
import Testimonials from "../components/Testimonials/Testimonials";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="">
        <Navber />
      </nav>
      <main className=" mt-3">
        <Hero />
        <Staff />
        <Testimonials />
        <Services />
      </main>
    </div>
  );
};

export default MainLayout;
