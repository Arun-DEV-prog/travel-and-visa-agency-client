import React from "react";
import { useQuery } from "@tanstack/react-query";

import axiousPublic from "../../../hooks/axiousPublic";
import Loading from "../../../components/Loading/Loading";

export default function N4CourseList() {
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["n4Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/n4-courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load N4 courses.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 primary-font mt-30 md:mt-35">
      {/* Static Description */}
      <div className="mb-8 bg-purple-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">
          JLPT N4 (Japanese-Language Proficiency Test Level N4)
        </h2>
        <p className="text-gray-700 text-sm">
          JLPT N4 is the second level of the internationally recognized Japanese
          language exam known as the JLPT. It confirms that a learner has basic
          Japanese language skills and can understand and use everyday Japanese
          in familiar situations. Completing JLPT N4 gives students enough
          language ability to manage everyday life in Japan, communicate with
          native speakers on common topics, and build a strong foundation for
          intermediate Japanese (N3).
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border text-center border-gray-200 rounded-2xl shadow-md p-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-purple-600">
              {course.courseName}
            </h3>

            <div className="text-gray-700 space-y-1 text-sm">
              <p>
                Level: <strong>{course.level}</strong>
              </p>
              <p> Fee: {course.fee} Tk</p>
              <p> Duration: {course.duration}</p>
              <p> Days/Week: {course.daysPerWeek}</p>
              <p> Hours/Day: {course.hoursPerDay}</p>
              <p> Total Classes: {course.totalClasses}</p>
              <p> Mock Tests: {course.mockTests}</p>
              <p> JLPT Quality Tests: {course.jlptTests}</p>
              <p> Listening Exams: {course.listeningExams}</p>
              <p> Speaking Exams: {course.speakingExams}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
