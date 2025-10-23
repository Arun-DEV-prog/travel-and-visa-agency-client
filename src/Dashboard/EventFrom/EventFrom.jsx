import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";
// ✅ FIXED import name

export default function EventForm() {
  const [formData, setFormData] = useState({
    country: "",
    description: "",
    academic: "",
    cultural: "",
    career: "",
    community: "",
    online: "",
    photos: [],
  });

  const queryClient = useQueryClient();

  // ✅ Fetch activities
  const { data: activities = [] } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/activities");
      return res.data;
    },
  });

  // ✅ Add new activity
  const mutation = useMutation({
    mutationFn: async (data) => {
      const fd = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "photos") {
          for (let file of value) fd.append("photos", file);
        } else fd.append(key, value);
      });
      return axiousPublic.post("/api/activities", fd);
    },
    onSuccess: () => {
      Swal.fire("✅ Added!", "Activity added successfully", "success");
      queryClient.invalidateQueries(["activities"]);
      setFormData({
        country: "",
        description: "",
        academic: "",
        cultural: "",
        career: "",
        community: "",
        online: "",
        photos: [],
      });
    },
    onError: () => Swal.fire("❌ Error", "Failed to add activity", "error"),
  });

  // ✅ Delete activity
  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/activities/${id}`),
    onSuccess: () => {
      Swal.fire("🗑 Deleted!", "Activity deleted successfully", "success");
      queryClient.invalidateQueries(["activities"]);
    },
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Add Activity</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="font-semibold">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Country</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="South Korea">South Korea</option>
          </select>
        </div>

        <textarea
          name="description"
          placeholder="Short description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>

        {["academic", "cultural", "career", "community", "online"].map(
          (field) => (
            <div key={field}>
              <label className="font-semibold capitalize">{field} Events</label>
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                rows="3"
              ></textarea>
            </div>
          )
        )}

        <div>
          <label className="font-semibold">Photos (max 5)</label>
          <input
            type="file"
            name="photos"
            multiple
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Activity
        </button>
      </form>

      {/* Display existing activities */}
      <h3 className="text-xl font-bold mt-8 mb-4">Existing Activities</h3>
      <div className="space-y-4">
        {activities.map((item) => (
          <div key={item._id} className="border p-3 rounded bg-gray-50">
            <p className="font-semibold">{item.country}</p>
            <p className="text-sm">{item.description}</p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {item.photos?.map((photo, i) => (
                <img
                  key={i}
                  src={`https://agency-server-five.vercel.app${photo}`}
                  alt="activity"
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>

            <button
              onClick={() => deleteMutation.mutate(item._id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
