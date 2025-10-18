import React from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Root from "../layouts/Root";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import StudentVise from "../components/StudentVisa/StudentVise";
import ServicePage from "../pages/ServicePage/ServicePage";
import EngineerVisa from "../pages/EngineerVisa/EngineerVisa";
import SSWVisa from "../pages/SSWVisa/SSWVisa";
import JLPT_N5 from "../pages/Courses/JLPT_N5";
import Login from "../pages/Authication/Login";
import Register from "../pages/Authication/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboardlayout from "../layouts/DashboardLayout";
import JapanOverview from "../pages/japan/whyJapan/JapanOverview";
import JapanOpportunities from "../pages/japan/whyJapanLang/JapanOpportunities";
import GermanyOverview from "../pages/japan/german/whygerman/GermanyOverview";
import LearnGerman from "../pages/japan/german/jarmanLanguage/Learngerman";
import SouthKoreaOverview from "../pages/korea/whyKorea/SouthKoreaOverview";
import koraLanguage from "../pages/korea/whyKoraLanguage/koraLanguage";

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
      {
        path: "/services/:country/:visa",
        Component: StudentVise,
      },

      {
        path: "/services/japan/engineer-and-skill-visa",
        Component: EngineerVisa,
      },
      { path: "/services/japan/ssw-and-titp-visa", Component: SSWVisa },
      //{
      //  path: "/services/japan/business-and-visit-visa",
      //  Component: BusinessVisa,
      //},
      {
        path: "/courses/:slug",
        Component: JLPT_N5,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/whyjapan?",
        Component: JapanOverview,
      },
      {
        path: "/whyjapan-language?",
        Component: JapanOpportunities,
      },
      {
        path: "/whygerman?",
        Component: GermanyOverview,
      },
      {
        path: "/whygerman-language?",
        Component: LearnGerman,
      },
      {
        path: "/whyKorea?",
        Component: SouthKoreaOverview,
      },

      {
        path: "/whyKorea-Language?",
        Component: koraLanguage,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboardlayout,
  },
]);

export default router;
