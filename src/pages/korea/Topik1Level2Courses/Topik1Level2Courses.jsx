import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../hooks/axiousPublic";
import Loading from "../../../components/Loading/Loading";

export default function Topik1Level2Courses() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["topik1Level2Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/topik1-level2-courses");
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
      {/* 🟣 TOPIK II Static Description */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-100 border border-yellow-200 rounded-2xl shadow-md p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-orange-700 mb-4 text-center">
          TOPIK II — Intermediate to Advanced Level
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          TOPIK II represents the Intermediate to Advanced Level of Korean
          language proficiency, comprising Level 3, 4, 5 and 6.
        </p>
        <p className="text-lg leading-relaxed">
          At this stage, students are able:
        </p>
        <ul className="list-disc ml-8 mt-2 text-lg space-y-1">
          <li>to express themselves in cultural and academic contexts</li>
          <li>
            participate in discussions at schools, universities, or language
            courses
          </li>
          <li>
            convey opinions on general cultural topics such as food, festivals,
            and clothing in everyday conversation
          </li>
          <li>
            communicate effectively in intermediate to advanced Korean, both in
            spoken and written forms
          </li>
        </ul>
      </div>

      {/* 🟢 Single Course Display */}
      <h3 className="text-2xl font-semibold text-orange-700 text-center mb-8">
        Available TOPIK-1 Level 2 Course
      </h3>

      <div className="flex justify-center">
        {courses.length === 0 ? (
          <p className="text-gray-600 text-lg italic">
            No course available at the moment.
          </p>
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full md:w-2/3 transition-all hover:shadow-xl">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">
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
                <b>EPS Question Solve:</b> {courses[0].epsClasses}
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
