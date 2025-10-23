import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../../../hooks/axiousPublic";
import Loading from "../../../../components/Loading/Loading";

export default function B2CourseShow() {
  // 🔹 Fetch B2 courses
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["b2Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/b2-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load B2 courses.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10 mt-30 md:mt-35">
      {/* 🟣 Static Info - Top */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-100 border border-blue-200 rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-3">
          B2: Upper Intermediate
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          This certification confirms that candidates have attained advanced
          language proficiency, corresponding to Level B2 on the six-level
          Common European Framework of Reference for Languages (CEFR).
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 text-lg">
          <li>
            Understand the main ideas of complex texts on both concrete and
            abstract topics, including technical discussions within their area
            of specialization.
          </li>
          <li>
            Communicate fluently and spontaneously, making normal conversation
            with native speakers possible without significant effort.
          </li>
          <li>
            Express opinions on current issues clearly and in detail, explain
            their position on topical matters, and evaluate the advantages and
            disadvantages of different options.
          </li>
        </ul>
      </div>

      {/* 🟢 Show Courses */}
      <h3 className="text-2xl font-semibold text-blue-700 text-center mb-6">
        Available B2 Intensive Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
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
