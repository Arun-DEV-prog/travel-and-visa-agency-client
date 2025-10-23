import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../hooks/axiousPublic";
import Loading from "../../../components/Loading/Loading";

export default function EpsTopikCourses() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["epsTopikCourses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/eps-topik-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-red-500 text-center mt-10 text-lg">
        ❌ Failed to load courses.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10 mt-30 md:mt-35">
      {/* 🟣 EPS-TOPIK Static Description */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-100 border border-cyan-200 rounded-2xl shadow-md p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-cyan-700 mb-4 text-center">
          EPS-TOPIK — Basic Level
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          EPS-TOPIK stands for the Employment Permit System, a government-run
          employment program in South Korea that provides foreign workers with
          the legal opportunity to work in the country.
        </p>
        <p className="text-lg leading-relaxed">
          The EPS-TOPIK Korean language course equips workers with the basic
          communication skills required in a workplace or factory setting,
          including:
        </p>
        <ul className="list-disc ml-8 mt-2 text-lg space-y-1">
          <li>
            Interacting with colleagues and supervisors regarding instructions,
            schedules, or equipment.
          </li>
          <li>
            Introducing themselves and exchanging polite expressions such as
            thanks or requests for permission.
          </li>
        </ul>
        <p className="text-lg leading-relaxed mt-3">
          At this stage, participants are not expected to engage in complex
          administrative or literary discussions, as the focus is on practical,
          workplace-oriented communication.
        </p>
      </div>

      {/* 🟢 Single Course Display */}
      <h3 className="text-2xl font-semibold text-cyan-700 text-center mb-8">
        Available EPS-TOPIK Basic Course
      </h3>

      <div className="flex justify-center">
        {courses.length === 0 ? (
          <p className="text-gray-600 text-lg italic">
            No course available at the moment.
          </p>
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full md:w-2/3 transition-all hover:shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4 text-center">
              {courses[0].courseName}
            </h3>
            <ul className="text-gray-700 text-center text-base space-y-2 leading-relaxed">
              <li>
                <b>Fee:</b> {courses[0].fee}
              </li>
              <li>
                <b>Duration:</b> {courses[0].duration}
              </li>
              <li>
                <b>Days/Week:</b> {courses[0].daysPerWeek}
              </li>
              <li>
                <b>Hours/Day:</b> {courses[0].hoursPerDay}
              </li>
              <li>
                <b>Total Classes:</b> {courses[0].totalClasses}
              </li>
              <li>
                <b>Mock Tests:</b> {courses[0].mockTests}
              </li>
              <li>
                <b>EPS Question Bank Solve:</b> {courses[0].epsClasses}
              </li>
              <li>
                <b>Speaking Exams:</b> {courses[0].speakingExams}
              </li>
              <li>
                <b>Listening Exams:</b> {courses[0].listeningExams}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
