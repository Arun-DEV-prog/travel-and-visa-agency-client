import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../hooks/axiousPublic";
import Loading from "../../../components/Loading/Loading";

export default function Topik1Courses() {
  // 🔹 Fetch all TOPIK-1 courses
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["topik1Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/topik1-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        ❌ Failed to load courses.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10 mt-30 md:mt-35">
      {/* 🟣 Static Info - Top */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-100 border border-yellow-200 rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          TOPIK I — Basic Level (Level 1)
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          TOPIK I represents the Basic Level of Korean language proficiency,
          consisting of Level 1 and Level 2. At this stage, students primarily
          focus on building a foundation in Korean, learning everyday
          conversation skills and simple sentence structures.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          By the end of this course, students will be able to:
        </p>
        <ul className="list-disc ml-6 text-gray-700 text-base mt-2 space-y-1">
          <li>Communicate in basic daily situations.</li>
          <li>Speak simply at shops, banks, hospitals, or restaurants.</li>
          <li>Understand basic Korean texts and instructions.</li>
          <li>
            Be linguistically prepared for the initial stages of work or study
            in Korea.
          </li>
        </ul>
      </div>

      {/* 🟢 Course Display Section */}
      <h3 className="text-3xl font-semibold text-orange-700 text-center mb-8">
        Available TOPIK-1 Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-orange-700 mb-2">
              {course.courseName}
            </h3>
            <p className="text-gray-600 mb-3 font-medium">
              Level: {course.level}
            </p>

            <ul className="text-gray-800 space-y-1 text-base leading-relaxed">
              <li> Fee: {course.fee}</li>
              <li> Duration: {course.duration}</li>
              <li> Days/Week: {course.daysPerWeek}</li>
              <li> Hours/Day: {course.hoursPerDay}</li>
              <li> Total Classes: {course.totalClasses}</li>
              <li> Mock Tests: {course.mockTests}</li>
              <li> EPS Question Solve: {course.epsClasses}</li>
              <li> Speaking Exams: {course.speakingExams}</li>
              <li> Listening Exams: {course.listeningExams}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
