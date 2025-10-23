import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function A1CourseForm() {
  const [formData, setFormData] = useState({
    courseName: "A1 Extensive",
    level: "Beginner",
    fee: 25000,
    duration: "2.5 Months",
    daysPerWeek: 5,
    hoursPerDay: 3,
    schedule: "Evening: Reading, Writing, Listening, Speaking",
    totalClasses: 50,
    mockTests: 10,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCourse) => axiousPublic.post("/api/a1-courses", newCourse),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Course Added!",
        text: "✅ A1 course added successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["a1Courses"] });
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
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
        Add A1 Course
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Course Name</label>
          <input
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Fee (Tk)</label>
            <input
              name="fee"
              type="number"
              value={formData.fee}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Duration</label>
            <input
              name="duration"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Days per Week</label>
            <input
              name="daysPerWeek"
              type="number"
              value={formData.daysPerWeek}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Hours per Day</label>
            <input
              name="hoursPerDay"
              type="number"
              value={formData.hoursPerDay}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="col-span-2">
            <label className="block font-medium mb-1">Schedule</label>
            <input
              name="schedule"
              placeholder="Evening: Reading, Writing, Listening, Speaking"
              value={formData.schedule}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Total Classes</label>
            <input
              name="totalClasses"
              type="number"
              value={formData.totalClasses}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Mock Tests</label>
            <input
              name="mockTests"
              type="number"
              value={formData.mockTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Save A1 Course
        </button>
      </form>
    </div>
  );
}
