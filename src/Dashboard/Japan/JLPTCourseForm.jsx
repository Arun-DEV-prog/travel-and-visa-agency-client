import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function JLPTCourseForm() {
  const [formData, setFormData] = useState({
    courseName: "",
    level: "N5",
    type: "Extensive",
    fee: 15000,
    duration: "4 Months",
    daysPerWeek: 5,
    hoursPerDay: 2,
    totalClasses: 90,
    mockTests: 16,
    jlptTests: 10,
    listeningExams: 15,
    speakingExams: 15,
  });
  //console.log(formData);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCourse) =>
      axiousPublic.post("/api/jlpt-courses", newCourse),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Course Added!",
        text: "✅ JLPT course added successfully.",
      });
      setFormData({
        courseName: "",
        level: "N5",
        type: "Extensive",
        fee: 15000,
        duration: "4 Months",
        daysPerWeek: 5,
        hoursPerDay: 2,
        totalClasses: 90,
        mockTests: 16,
        jlptTests: 10,
        listeningExams: 15,
        speakingExams: 15,
      });
      queryClient.invalidateQueries({ queryKey: ["jlptCourses"] });
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
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add JLPT Course
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold">Course Name</label>
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
          <label className="font-semibold">JLPT Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="N5">N5</option>
            <option value="N4">N4</option>
            <option value="N3">N3</option>
            <option value="N2">N2</option>
            <option value="N1">N1</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Course Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Extensive">Extensive</option>
            <option value="Intensive">Intensive</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="font-semibold">Fee (Tk)</label>
            <input
              name="fee"
              type="number"
              placeholder="Fee (Tk)"
              value={formData.fee}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Duration</label>
            <input
              name="duration"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Days Per Week</label>
            <input
              name="daysPerWeek"
              type="number"
              placeholder="Days / Week"
              value={formData.daysPerWeek}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Hours Per Day</label>
            <input
              name="hoursPerDay"
              type="number"
              placeholder="Hours / Day"
              value={formData.hoursPerDay}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Total Classes</label>
            <input
              name="totalClasses"
              type="number"
              placeholder="Total Classes"
              value={formData.totalClasses}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Mock Tests</label>
            <input
              name="mockTests"
              type="number"
              placeholder="Mock Tests"
              value={formData.mockTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">JLPT Tests</label>
            <input
              name="jlptTests"
              type="number"
              placeholder="JLPT Tests"
              value={formData.jlptTests}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Listening Exams</label>
            <input
              name="listeningExams"
              type="number"
              placeholder="Listening Exams"
              value={formData.listeningExams}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-semibold">Speaking Exams</label>
            <input
              name="speakingExams"
              type="number"
              placeholder="Speaking Exams"
              value={formData.speakingExams}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Saving..." : "Save Course"}
        </button>
      </form>
    </div>
  );
}
