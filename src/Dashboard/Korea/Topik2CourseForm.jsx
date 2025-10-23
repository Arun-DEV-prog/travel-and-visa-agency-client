import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";
import Loading from "../../components/Loading/Loading";

export default function Topik2CourseForm() {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    courseName: "TOPIK-1 Level 2",
    fee: "",
    duration: "",
    daysPerWeek: "",
    hoursPerDay: "",
    totalClasses: "",
    mockTests: "",
    epsClasses: "",
    speakingExams: "",
    listeningExams: "",
  });

  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["topik1Level2Courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/topik1-level2-courses");
      return res.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: (newCourse) =>
      axiousPublic.post("/api/topik1-level2-courses", newCourse),
    onSuccess: () => {
      queryClient.invalidateQueries(["topik1Level2Courses"]);
      Swal.fire("✅ Success", "Course added successfully!", "success");
      setFormData({
        courseName: "TOPIK-1 Level 2",
        fee: "",
        duration: "",
        daysPerWeek: "",
        hoursPerDay: "",
        totalClasses: "",
        mockTests: "",
        epsClasses: "",
        speakingExams: "",
        listeningExams: "",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/topik1-level2-courses/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["topik1Level2Courses"]);
      Swal.fire("Deleted!", "Course deleted successfully!", "success");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMutation.mutate(formData);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteMutation.mutate(id);
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <div className="text-red-500">❌ Error loading data</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h3 className="col-span-2 text-2xl font-semibold text-orange-700 mb-2">
          ➕ Add TOPIK-1 Level 2 Course
        </h3>

        {[
          ["fee", "Fee (e.g., 20,000 TK)"],
          ["duration", "Duration (e.g., 6 Months)"],
          ["daysPerWeek", "Days Per Week (e.g., 6 Days/Week)"],
          ["hoursPerDay", "Hours Per Day (e.g., 2 Hours/Day)"],
          ["totalClasses", "Total Classes (e.g., 140 Classes)"],
          ["mockTests", "Mock Tests (e.g., 25)"],
          ["epsClasses", "EPS TOPIK Question Solve Classes (e.g., 20)"],
          ["speakingExams", "Speaking Exams (e.g., 20)"],
          ["listeningExams", "Listening Exams (e.g., 20)"],
        ].map(([key, label]) => (
          <div key={key} className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              required
              className="input input-bordered border-gray-300 rounded-lg p-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="col-span-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Add Course
        </button>
      </form>

      <h3 className="text-2xl font-semibold text-orange-700 text-center mb-6">
        Available TOPIK-1 Level 2 Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 relative hover:shadow-lg transition-all"
          >
            <button
              onClick={() => handleDelete(course._id)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
            >
              Delete
            </button>

            <h3 className="text-2xl font-bold text-orange-700 mb-2">
              {course.courseName}
            </h3>
            <ul className="text-gray-800 space-y-1 text-base leading-relaxed">
              <li>💰 Fee: {course.fee}</li>
              <li>⏳ Duration: {course.duration}</li>
              <li>📅 Days/Week: {course.daysPerWeek}</li>
              <li>⏰ Hours/Day: {course.hoursPerDay}</li>
              <li>📘 Total Classes: {course.totalClasses}</li>
              <li>🧩 Mock Tests: {course.mockTests}</li>
              <li>📚 EPS Question Solve: {course.epsClasses}</li>
              <li>🗣️ Speaking Exams: {course.speakingExams}</li>
              <li>🎧 Listening Exams: {course.listeningExams}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
