import React from "react";
import { useQuery } from "@tanstack/react-query";

import axiousPublic from "../../../hooks/axiousPublic";
import Loading from "../../../components/Loading/Loading";

export default function NATCourseList() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["natCourses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/nat-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10 ">
        ❌ Failed to load NAT courses.
      </div>
    );

  // Limit to 2 courses
  const visibleCourses = courses.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-30 md:mt-35 primary-font">
      <h2 className="text-3xl font-bold text-center mb-4 text-green-700">
        NAT Courses
      </h2>

      {/* Static description */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 text-gray-700 rounded-lg">
        <p className="mb-2">
          NAT-TEST is a practical Japanese language proficiency test, similar to
          the JLPT, designed to measure the Japanese ability of non-native
          speakers. It is recognized internationally, especially in Japan and
          some Asian countries.
        </p>
        <p>
          The Nihongo NAT-TEST evaluates a student’s Japanese ability in
          reading, grammar, vocabulary, and listening. Completing a NAT level
          gives learners practical skills for communication, study, and work in
          Japanese-speaking environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-green-600">
              {course.courseName}
            </h3>

            <div className="flex justify-between text-center items-center mb-3 text-gray-600">
              <span className="text-sm">
                Level: <strong>{course.level}</strong>
              </span>
            </div>

            <div className="text-gray-700 space-y-1 text-sm">
              <p>
                <strong>Fee:</strong> {course.fee} Tk
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Days/Week:</strong> {course.daysPerWeek}
              </p>
              <p>
                <strong>Hours/Day:</strong> {course.hoursPerDay}
              </p>
              <p>
                <strong>Total Classes:</strong> {course.totalClasses}
              </p>
            </div>

            <div className="border-t mt-4 pt-3 text-gray-700 text-sm space-y-1">
              <p>
                Mock Tests: <strong>{course.mockTests}</strong>
              </p>
              <p>
                JLPT Quality Question Solve Tests:{" "}
                <strong>{course.jlptTests}</strong>
              </p>
              <p>
                Listening Exams: <strong>{course.listeningExams}</strong>
              </p>
              <p>
                Speaking Exams: <strong>{course.speakingExams}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      {courses.length > 2 && (
        <div className="text-center mt-8">
          <button className="text-green-600 font-semibold underline hover:text-green-800">
            View All Courses
          </button>
        </div>
      )}
    </div>
  );
}
