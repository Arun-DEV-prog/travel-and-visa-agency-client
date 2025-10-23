import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../hooks/axiousPublic";
import Loading from "../../../components/Loading/Loading";

export default function JLPTCourseList() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jlptCourses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/jlpt-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load JLPT courses.
      </div>
    );

  // Show only first 2 courses
  const visibleCourses = courses.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto primary-font px-4 mt-25 md:mt-35 py-10">
      {/* Static JLPT Overview Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-sm p-6 mb-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Japanese Language Proficiency Test (JLPT)
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          JLPT N5 stands for{" "}
          <strong>Japanese Language Proficiency Test – Level N5</strong>. It is
          the first (beginner) level of the JLPT, which is the official
          international exam for testing Japanese language ability.
        </p>

        <div className="text-gray-700 mb-4 leading-relaxed">
          <p className="font-semibold mb-1">The JLPT has five levels:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>N5 (Beginner) — easiest</li>
            <li>N4 (Elementary)</li>
            <li>N3 (Intermediate)</li>
            <li>N2 (Upper-intermediate)</li>
            <li>N1 (Advanced / Native-like)</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          The <strong>JLPT N5 level</strong> shows that a learner has built the
          foundation of the Japanese language. After completing N5, students are
          able to understand, speak, read, and write basic Japanese used in
          everyday life.
        </p>
      </div>

      {/* Course Cards Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        JLPT Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6"
          >
            <h3 className="text-2xl  font-bold mb-2 text-blue-600">
              {course.courseName}
            </h3>

            <div className="flex justify-between items-center mb-3 text-gray-600">
              <span className="text-sm">
                Level: <strong>{course.level}</strong>
              </span>
              <span className="text-sm">
                Type: <strong>{course.type}</strong>
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
                JLPT Tests: <strong>{course.jlptTests}</strong>
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
          <button className="text-blue-600 font-semibold underline hover:text-blue-800">
            View All Courses
          </button>
        </div>
      )}
    </div>
  );
}
