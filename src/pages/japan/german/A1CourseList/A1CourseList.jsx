import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../../hooks/axiousPublic";
import Loading from "../../../../components/Loading/Loading";

export default function A1CourseList() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["a1Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/a1-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load A1 courses.
      </div>
    );

  return (
    <div className="max-w-6xl primary-font mx-auto px-4 py-10 md:mt-35 mt-30">
      {/* Static description */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">
          A1: BEGINNER
        </h2>
        <p className="text-lg text-gray-800 mb-3">
          This certificate confirms that candidates have attained basic language
          proficiency, corresponding to Level A1 on the six-level Common
          European Framework of Reference for Languages (CEFR).
        </p>
        <p className="text-lg text-gray-800 mb-2">
          Upon successful completion of the examination, candidates will be able
          to:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 text-lg">
          <li>Communicate in a clear and simple manner at a slow pace.</li>
          <li>
            Comprehend and use familiar, everyday expressions and basic
            sentences, such as providing personal information, discussing
            family, shopping, work, and their immediate environment.
          </li>
          <li>
            Introduce themselves and others, as well as inquire about others’
            personal information, including their place of residence,
            acquaintances, and possessions.
          </li>
        </ul>
      </div>

      {/* Courses cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl md:text-xl font-bold mb-3 text-blue-600">
              {course.courseName}
            </h3>

            <div className="text-gray-700 space-y-1 text-md md:text-lg">
              <p>
                <strong>Level:</strong> {course.level}
              </p>
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
                <strong>Hours/Day:</strong> {course.hoursPerDay} (
                {course.schedule})
              </p>
              <p>
                <strong>Total Classes:</strong> {course.totalClasses}
              </p>
              <p>
                <strong>Mock Tests:</strong> {course.mockTests}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
