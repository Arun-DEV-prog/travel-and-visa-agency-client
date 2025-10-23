import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function DeleteJplt() {
  const queryClient = useQueryClient();

  // Fetch JLPT courses
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

  // Delete course mutation
  const deleteCourse = useMutation({
    mutationFn: async (id) => {
      const res = await axiousPublic.delete(`/api/jlpt-courses/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["jlptCourses"]);
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "✅ Course has been deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Failed to Delete",
        text: "❌ Something went wrong. Please try again.",
      });
    },
  });

  // Delete confirmation alert
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCourse.mutate(id);
      }
    });
  };

  // Loading / error states
  if (isLoading)
    return (
      <div className="text-center py-10 text-lg font-semibold">Loading...</div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load JLPT courses.
      </div>
    );

  // Only show 2 courses
  const visibleCourses = courses.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        JLPT Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 relative"
          >
            <button
              onClick={() => handleDelete(course._id)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
            >
              Delete
            </button>

            <h3 className="text-2xl font-bold mb-2 text-blue-600">
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
                💰 <strong>Fee:</strong> {course.fee} Tk
              </p>
              <p>
                ⏳ <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                📅 <strong>Days/Week:</strong> {course.daysPerWeek}
              </p>
              <p>
                🕒 <strong>Hours/Day:</strong> {course.hoursPerDay}
              </p>
              <p>
                📘 <strong>Total Classes:</strong> {course.totalClasses}
              </p>
            </div>

            <div className="border-t mt-4 pt-3 text-gray-700 text-sm space-y-1">
              <p>
                🧩 Mock Tests: <strong>{course.mockTests}</strong>
              </p>
              <p>
                📝 JLPT Tests: <strong>{course.jlptTests}</strong>
              </p>
              <p>
                🎧 Listening Exams: <strong>{course.listeningExams}</strong>
              </p>
              <p>
                🗣️ Speaking Exams: <strong>{course.speakingExams}</strong>
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
