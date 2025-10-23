import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function StaffForm() {
  const [formData, setFormData] = useState({
    category: "Management",
    name: "",
    designation: "",
    photo: null,
  });

  const queryClient = useQueryClient();

  // Fetch existing staff
  const { data: staffList = [] } = useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/staff");
      return res.data;
    },
  });

  // Add staff
  const mutation = useMutation({
    mutationFn: async (newStaff) => {
      const fd = new FormData();
      fd.append("category", newStaff.category);
      fd.append("name", newStaff.name);
      fd.append("designation", newStaff.designation);
      if (newStaff.photo) fd.append("photo", newStaff.photo);
      return axiousPublic.post("/api/staff", fd);
    },
    onSuccess: () => {
      Swal.fire("Success!", "Staff added successfully.", "success");
      setFormData({
        category: "Management",
        name: "",
        designation: "",
        photo: null,
      });
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
    onError: () => {
      Swal.fire("Error!", "Failed to add staff.", "error");
    },
  });

  // Delete staff
  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/staff/${id}`),
    onSuccess: () => {
      Swal.fire("Deleted!", "Staff removed successfully.", "success");
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
    onError: () => {
      Swal.fire("Error!", "Failed to delete staff.", "error");
    },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
        Add Staff
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Management</option>
            <option>Teacher</option>
            <option>Employee</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
        >
          Save Staff
        </button>
      </form>

      <h2 className="text-xl font-bold mt-10 mb-4">Staff List</h2>
      <div className="flex flex-col gap-4">
        {staffList.map((item) => (
          <div
            key={item._id}
            className="border p-3 rounded flex items-center gap-4"
          >
            {item.photo && (
              <img
                src={`${axiousPublic.defaults.baseURL}/uploads/${item.photo}`}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full"
              />
            )}
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.designation}</p>
              <p className="text-gray-500 text-sm">{item.category}</p>
            </div>
            <button
              onClick={() => deleteMutation.mutate(item._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
