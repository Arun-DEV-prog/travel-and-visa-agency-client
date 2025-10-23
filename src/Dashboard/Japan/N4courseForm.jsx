import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function N4courseForm() {
  const [formData, setFormData] = useState({
    courseName: "N4/JFT Intensive",
    level: "Elementary",
    fee: 25000,
    duration: "6 Months",
    daysPerWeek: 6,
    hoursPerDay: 2,
    totalClasses: 140,
    mockTests: 25,
    jlptTests: 16,
    listeningExams: 25,
    speakingExams: 25,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCourse) => axiousPublic.post("/api/n4-courses", newCourse),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Course Added!",
        text: "✅ N4 course added successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["n4Courses"] });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Failed to Add Course",
        text: "❌ Something went wrong. Please try again.",
      });
      console.error(error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">
        Add N4 Course
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Course Name</label>
          <input
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Level</label>
          <input
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block mb-1 font-medium">Fee (Tk)</label>
            <input
              name="fee"
              type="number"
              value={formData.fee}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Duration</label>
            <input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Days / Week</label>
            <input
              name="daysPerWeek"
              type="number"
              value={formData.daysPerWeek}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Hours / Day</label>
            <input
              name="hoursPerDay"
              type="number"
              value={formData.hoursPerDay}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Total Classes</label>
            <input
              name="totalClasses"
              type="number"
              value={formData.totalClasses}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mock Tests</label>
            <input
              name="mockTests"
              type="number"
              value={formData.mockTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">JLPT Quality Tests</label>
            <input
              name="jlptTests"
              type="number"
              value={formData.jlptTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Listening Exams</label>
            <input
              name="listeningExams"
              type="number"
              value={formData.listeningExams}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Speaking Exams</label>
            <input
              name="speakingExams"
              type="number"
              value={formData.speakingExams}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg"
        >
          Save N4 Course
        </button>
      </form>
    </div>
  );
}
