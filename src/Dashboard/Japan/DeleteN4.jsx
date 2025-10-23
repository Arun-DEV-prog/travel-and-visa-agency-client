import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";
import Loading from "../../components/Loading/Loading";

export default function DeleteN4() {
  const queryClient = useQueryClient();

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

  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/n4-courses/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["n4Courses"]);
      Swal.fire("Deleted!", "✅ Course deleted successfully.", "success");
    },
    onError: () => {
      Swal.fire("Error", "❌ Failed to delete course.", "error");
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteMutation.mutate(id);
    });
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load N4 courses.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
        N4 Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 relative"
          >
            <button
              onClick={() => handleDelete(course._id)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
            >
              Delete
            </button>

            <h3 className="text-2xl font-bold mb-2 text-purple-600">
              {course.courseName}
            </h3>

            <div className="text-gray-700 space-y-1 text-sm">
              <p>
                Level: <strong>{course.level}</strong>
              </p>
              <p>💰 Fee: {course.fee} Tk</p>
              <p>⏳ Duration: {course.duration}</p>
              <p>📅 Days/Week: {course.daysPerWeek}</p>
              <p>🕒 Hours/Day: {course.hoursPerDay}</p>
              <p>📘 Total Classes: {course.totalClasses}</p>
              <p>🧩 Mock Tests: {course.mockTests}</p>
              <p>📝 JLPT Quality Tests: {course.jlptTests}</p>
              <p>🎧 Listening Exams: {course.listeningExams}</p>
              <p>🗣️ Speaking Exams: {course.speakingExams}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
