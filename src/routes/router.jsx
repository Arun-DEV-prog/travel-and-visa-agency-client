import React from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Root from "../layouts/Root";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/AboutUs/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: MainLayout,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
    ],
  },
]);

export default router;
