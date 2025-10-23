import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function NATCourseForm() {
  const [formData, setFormData] = useState({
    courseName: "",
    level: "Beginner",
    fee: 12000,
    duration: "3 Months",
    daysPerWeek: 5,
    hoursPerDay: 2,
    totalClasses: 60,
    mockTests: 16,
    jlptTests: 10,
    listeningExams: 15,
    speakingExams: 15,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCourse) => axiousPublic.post("/api/nat-courses", newCourse),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Course Added!",
        text: "✅ NAT course added successfully.",
      });
      setFormData({
        courseName: "",
        level: "Beginner",
        fee: 12000,
        duration: "3 Months",
        daysPerWeek: 5,
        hoursPerDay: 2,
        totalClasses: 60,
        mockTests: 16,
        jlptTests: 10,
        listeningExams: 15,
        speakingExams: 15,
      });
      queryClient.invalidateQueries({ queryKey: ["natCourses"] });
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
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
        Add NAT Course
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Course Name */}
        <div>
          <label className="block font-medium mb-1">Course Name</label>
          <input
            name="courseName"
            placeholder="e.g., NAT Extensive Beginner"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Level */}
        <div>
          <label className="block font-medium mb-1">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-medium mb-1">
              Fee (Tk) - {formData.level}
            </label>
            <input
              name="fee"
              type="number"
              value={formData.fee}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Duration - {formData.level}
            </label>
            <input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Days / Week - {formData.level}
            </label>
            <input
              name="daysPerWeek"
              type="number"
              value={formData.daysPerWeek}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Hours / Day - {formData.level}
            </label>
            <input
              name="hoursPerDay"
              type="number"
              value={formData.hoursPerDay}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Total Classes - {formData.level}
            </label>
            <input
              name="totalClasses"
              type="number"
              value={formData.totalClasses}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Mock Tests - {formData.level}
            </label>
            <input
              name="mockTests"
              type="number"
              value={formData.mockTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              JLPT Quality Question Solve Tests - {formData.level}
            </label>
            <input
              name="jlptTests"
              type="number"
              value={formData.jlptTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Listening Exams - {formData.level}
            </label>
            <input
              name="listeningExams"
              type="number"
              value={formData.listeningExams}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Speaking Exams - {formData.level}
            </label>
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
          className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Saving..." : "Save NAT Course"}
        </button>
      </form>
    </div>
  );
}
