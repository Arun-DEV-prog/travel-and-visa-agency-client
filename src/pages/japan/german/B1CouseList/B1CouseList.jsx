import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../../hooks/axiousPublic";
import Loading from "../../../../components/Loading/Loading";

export default function B1CourseList() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["b1Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/b1-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load B1 courses.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6  primary-font py-12 mt-30 md:mt-35">
      {/* 🔹 Static Info */}
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 rounded-2xl shadow-md p-8 mb-10">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          B1: INTERMEDIATE LEVEL
        </h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          This certification confirms that candidates are independent users of
          the German language, corresponding to Level B1 on the six-level Common
          European Framework of Reference for Languages (CEFR).
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-base">
          <li>
            Comprehend the main points of conversations and texts on familiar
            topics related to work, school, leisure, and similar contexts when
            standard, clear language is used.
          </li>
          <li>
            Handle most situations typically encountered while traveling in
            German-speaking countries.
          </li>
          <li>
            Express themselves clearly and coherently when discussing familiar
            topics or areas of personal interest.
          </li>
          <li>
            Describe experiences and events, articulate dreams, hopes, and
            ambitions, and provide brief explanations or statements on everyday
            matters.
          </li>
        </ul>
      </div>

      {/* 🔹 Course Cards */}
      <h3 className="text-2xl font-semibold text-purple-700 text-center mb-8">
        Available B1 Intensive Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-2">
              {course.courseName}
            </h3>
            <p className="text-gray-600 mb-3 font-medium">
              Level: {course.level}
            </p>

            <ul className="text-gray-800 space-y-1 text-base leading-relaxed">
              <li> Fee: {course.fee}</li>
              <li> Duration: {course.duration}</li>
              <li> Days/Week: {course.daysPerWeek}</li>
              <li> Morning: {course.morningHours}</li>
              <li> Afternoon: {course.afternoonHours}</li>
              <li> Total Classes: {course.totalClasses}</li>
              <li> Mock Tests: {course.mockTests}</li>
              <li> Reading Exams: {course.readingExams}</li>
              <li> Writing Exams: {course.writingExams}</li>
              <li> Speaking Exams: {course.speakingExams}</li>
              <li> Listening Exams: {course.listeningExams}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
