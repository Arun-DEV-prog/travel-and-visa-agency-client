import React from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Root from "../layouts/Root";
import AboutUs from "../pages/AboutUs/History";
import ContactUs from "../pages/ContactUs/ContactUs";
import StudentVise from "../components/StudentVisa/StudentVise";
import ServicePage from "../pages/ServicePage/ServicePage";
import EngineerVisa from "../pages/EngineerVisa/EngineerVisa";
import SSWVisa from "../pages/SSWVisa/SSWVisa";
import JLPT_N5 from "../pages/Courses/JLPT_N5";
import Login from "../pages/Authication/Login";
import Register from "../pages/Authication/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import JapanOverview from "../pages/japan/whyJapan/JapanOverview";
import JapanOpportunities from "../pages/japan/whyJapanLang/JapanOpportunities";
import GermanyOverview from "../pages/japan/german/whygerman/GermanyOverview";

import SouthKoreaOverview from "../pages/korea/whyKorea/SouthKoreaOverview";
import koraLanguage from "../pages/korea/whyKoraLanguage/koraLanguage";
import JLPTCourseForm from "../Dashboard/Japan/JLPTCourseForm";
import JLPTCourseList from "../pages/japan/JLPTCourseList/JLPTCourseList";
import DeleteJplt from "../Dashboard/Japan/DeleteJplt";
import NATCourseForm from "../Dashboard/Japan/NATCourseForm";
import NATCourseList from "../pages/japan/NATCourseList/NATCourseList";
import DeleteNat from "../Dashboard/Japan/DeleteNat";
import N4courseForm from "../Dashboard/Japan/N4courseForm";
import DeleteN4 from "../Dashboard/Japan/DeleteN4";
import N4CourseList from "../pages/japan/N4CourseList/N4CourseList";
import A1CourseForm from "../Dashboard/German/A1CourseForm";
import A2CourseForm from "../Dashboard/German/A2CourseForm";

import A1CourseList from "../pages/japan/german/A1CourseList/A1CourseList";
import DeleteA1 from "../Dashboard/German/DeleteA1";
import A2Course from "../pages/japan/german/A2CourseList/A2Course";
import B1CourseList from "../pages/japan/german/B1CouseList/B1CouseList";
import B2CourseForm from "../Dashboard/German/B2CourseForm";
import B1CourseForm from "../Dashboard/German/B1CouseForm";
import B2CourseShow from "../pages/japan/german/B2CouseList/B2CourseShow";
import LearnGerman from "../pages/japan/german/jarmanLanguage/LearnGerman";
import Topik1CourseForm from "../Dashboard/Korea/Topik1CourseForm";
import Topik1Courses from "../pages/korea/TopikCourse/Topik1Courses";
import Topik2CourseForm from "../Dashboard/Korea/Topik2CourseForm";
import Topik1Level2Courses from "../pages/korea/Topik1Level2Courses/Topik1Level2Courses";
import EpsTopikForm from "../Dashboard/Korea/EpsTopikForm";
import EpsTopikCourses from "../pages/korea/EpsTopikCourses/EpsTopikCourses";
import HistoryForm from "../Dashboard/About/Historyform";
import History from "../pages/AboutUs/History";
import Activities from "../pages/AboutUs/Activities";
import StaffForm from "../Dashboard/About/StaffForm";
import StaffDisplay from "../pages/AboutUs/StaffDisplay";
import EventForm from "../Dashboard/EventFrom/EventFrom";
import EventList from "../pages/EventsList/EventsList";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: MainLayout },
      { path: "about-us", Component: AboutUs },
      { path: "contact-us", Component: ContactUs },
      { path: "services/:country/:visa", Component: StudentVise },
      {
        path: "services/japan/engineer-and-skill-visa",
        Component: EngineerVisa,
      },
      { path: "services/japan/ssw-and-titp-visa", Component: SSWVisa },
      { path: "courses/:slug", Component: JLPT_N5 },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "whyjapan", Component: JapanOverview },
      { path: "whyjapan-language", Component: JapanOpportunities },
      { path: "whygerman", Component: GermanyOverview },
      { path: "whygerman-language", Component: LearnGerman },
      { path: "whyKorea", Component: SouthKoreaOverview },
      { path: "whyKorea-Language", Component: koraLanguage },
      { path: "jpltN5", Component: JLPTCourseList },
      { path: "NATcourse", Component: NATCourseList },
      { path: "N4course", Component: N4CourseList },
      { path: "A1course", Component: A1CourseList },
      { path: "A2course", Component: A2Course },
      { path: "B1course", Component: B1CourseList },
      { path: "B2course", Component: B2CourseShow },
      { path: "Topik1course", Component: Topik1Courses },
      { path: "Topik2course", Component: Topik1Level2Courses },
      { path: "EpsTopikcourse", Component: EpsTopikCourses },
      { path: "History", Component: History },
      { path: "activites", Component: Activities },
      { path: "staff", Component: StaffDisplay },
      { path: "events", Component: EventList },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      // Note: This path is relative to /dashboard
      { path: "addJLPTN5", Component: JLPTCourseForm },
      { path: "DeleteJLPTN5", Component: DeleteJplt },
      { path: "DeleteNat", Component: DeleteNat },
      { path: "DeleteN4", Component: DeleteN4 },
      { path: "addNAT", Component: NATCourseForm },
      { path: "addN4", Component: N4courseForm },

      //for German
      { path: "addA1Course", Component: A1CourseForm },
      { path: "DeleteA1", Component: DeleteA1 },
      { path: "addA2Course", Component: A2CourseForm },
      { path: "addB2Course", Component: B2CourseForm },
      { path: "addB1Course", Component: B1CourseForm },

      //for korea
      { path: "addTopikCourse", Component: Topik1CourseForm },
      { path: "addTopik2Course", Component: Topik2CourseForm },
      { path: "addEpsCourse", Component: EpsTopikForm },

      //history
      { path: "addHistory", Component: HistoryForm },
      { path: "addStaff", Component: StaffForm },
      { path: "addevents", Component: EventForm },
    ],
  },
]);

export default router;
