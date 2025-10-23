import React from "react";
import { useQuery } from "@tanstack/react-query";

import axiousPublic from "../../../../hooks/axiousPublic";
import Loading from "../../../../components/Loading/Loading";

export default function A2Course() {
  // Fetch courses using TanStack Query
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["a2Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/a2-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load A2 courses.
      </div>
    );

  return (
    <div className="max-w-6xl primary-font mx-auto px-6 py-10 space-y-10 md:mt-35 mt-30">
      {/* 🟣 Top Static Description */}
      <div className="bg-purple-50 border border-purple-200 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
          A2: Elementary Level
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This examination assesses{" "}
          <strong>elementary language proficiency</strong> and corresponds to
          Level A2 on the six-level Common European Framework of Reference for
          Languages (CEFR).
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Successful completion of the exam demonstrates that candidates are
          able to:
        </p>
        <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700 text-lg">
          <li>
            Comprehend and use sentences and common expressions encountered in
            everyday situations.
          </li>
          <li>
            Communicate effectively in simple, routine contexts that require
            exchanging information on familiar and routine topics.
          </li>
          <li>
            Describe their personal background, education, immediate
            surroundings, and other matters related to their basic needs in a
            clear and straightforward manner.
          </li>
        </ul>
      </div>

      {/* 📘 Display Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              {course.courseName}
            </h3>
            <p className="text-gray-600 font-medium mb-4">
              Level: {course.level}
            </p>

            <ul className="text-gray-700 text-md space-y-1">
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
