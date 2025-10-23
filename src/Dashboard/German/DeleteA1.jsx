import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";
import Loading from "../../components/Loading/Loading";

export default function DeleteA1() {
  const queryClient = useQueryClient();

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

  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/a1-courses/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["a1Courses"]);
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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteMutation.mutate(id);
    });
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        ❌ Failed to load A1 courses.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Static description */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">A1: BEGINNER</h2>
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
            className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 relative"
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(course._id)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
            >
              Delete
            </button>

            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-blue-600">
              {course.courseName}
            </h3>

            <div className="text-gray-700 space-y-1 text-md md:text-lg">
              <p>
                <strong>Level:</strong> {course.level}
              </p>
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
                🕒 <strong>Hours/Day:</strong> {course.hoursPerDay} (
                {course.schedule})
              </p>
              <p>
                📘 <strong>Total Classes:</strong> {course.totalClasses}
              </p>
              <p>
                🧩 <strong>Mock Tests:</strong> {course.mockTests}
              </p>
            </div>

            <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl text-lg transition">
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
