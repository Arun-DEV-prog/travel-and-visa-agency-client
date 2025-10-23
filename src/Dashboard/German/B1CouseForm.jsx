import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";
import Loading from "../../components/Loading/Loading";

export default function B1CourseForm() {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    courseName: "B2 Intensive",
    level: "Upper Intermediate",
    fee: "",
    duration: "",
    daysPerWeek: "",
    morningHours: "",
    afternoonHours: "",
    totalClasses: "",
    mockTests: "",
    readingExams: "",
    writingExams: "",
    speakingExams: "",
    listeningExams: "",
  });

  // 🔹 Fetch all B2 Courses
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

  // 🔹 Add course
  const addMutation = useMutation({
    mutationFn: (newCourse) => axiousPublic.post("/api/b2-courses", newCourse),
    onSuccess: () => {
      queryClient.invalidateQueries(["b2Courses"]);
      Swal.fire("✅ Success", "Course added successfully!", "success");
      setFormData({
        courseName: "B2 Intensive",
        level: "Upper Intermediate",
        fee: "",
        duration: "",
        daysPerWeek: "",
        morningHours: "",
        afternoonHours: "",
        totalClasses: "",
        mockTests: "",
        readingExams: "",
        writingExams: "",
        speakingExams: "",
        listeningExams: "",
      });
    },
    onError: () => Swal.fire("❌ Error", "Failed to add course", "error"),
  });

  // 🔹 Delete course
  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/b2-courses/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["b2Courses"]);
      Swal.fire("Deleted!", "✅ Course deleted successfully.", "success");
    },
    onError: () => Swal.fire("Error", "❌ Failed to delete course.", "error"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMutation.mutate(formData);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the course.",
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
        ❌ Failed to load B2 courses.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      {/* 🟣 Static Info - Top */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-3">
          B2: Upper Intermediate
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          This certification confirms that candidates have attained advanced
          language proficiency, corresponding to Level B2 on the six-level
          Common European Framework of Reference for Languages (CEFR).
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
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
            their position on topical matters, and evaluate pros and cons of
            options.
          </li>
        </ul>
      </div>

      {/* 🟢 Add Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h3 className="col-span-2 text-2xl font-semibold text-blue-700 mb-2">
          ➕ Add B2 Course
        </h3>

        {[
          ["fee", "Fee (e.g., 30,000 TK)"],
          ["duration", "Duration (e.g., 4 Months)"],
          ["daysPerWeek", "Days Per Week (e.g., 6 Days X Week)"],
          ["morningHours", "Morning Hours (e.g., 2 Hours - Reading, Writing)"],
          [
            "afternoonHours",
            "Afternoon Hours (e.g., 2 Hours - Listening, Speaking)",
          ],
          ["totalClasses", "Total Classes (e.g., 90 Classes)"],
          ["mockTests", "Mock Tests (e.g., 20)"],
          ["readingExams", "Reading Exams (e.g., 20)"],
          ["writingExams", "Writing Exams (e.g., 20)"],
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
          className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Add Course
        </button>
      </form>

      {/* 🟣 Show Courses */}
      <h3 className="text-2xl font-semibold text-blue-700 text-center mb-6">
        Available B2 Intensive Courses
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

            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              {course.courseName}
            </h3>
            <p className="text-gray-600 mb-3 font-medium">
              Level: {course.level}
            </p>

            <ul className="text-gray-800 space-y-1 text-base leading-relaxed">
              <li>💰 Fee: {course.fee}</li>
              <li>⏳ Duration: {course.duration}</li>
              <li>📅 Days/Week: {course.daysPerWeek}</li>
              <li>🌅 Morning: {course.morningHours}</li>
              <li>🌇 Afternoon: {course.afternoonHours}</li>
              <li>📘 Total Classes: {course.totalClasses}</li>
              <li>🧩 Mock Tests: {course.mockTests}</li>
              <li>📖 Reading Exams: {course.readingExams}</li>
              <li>✍️ Writing Exams: {course.writingExams}</li>
              <li>🗣️ Speaking Exams: {course.speakingExams}</li>
              <li>🎧 Listening Exams: {course.listeningExams}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
