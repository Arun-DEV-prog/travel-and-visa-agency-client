import React, { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiousPublic from "../../hooks/axiousPublic";

export default function HistoryForm() {
  const [formData, setFormData] = useState({
    description: "",
    photo1: null,
    photo2: null,
  });

  const queryClient = useQueryClient();

  // ✅ Fetch history (v5 object form)
  const { data: historyList = [] } = useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/history");
      return res.data;
    },
  });

  // ✅ Mutation to add history
  const mutation = useMutation({
    mutationFn: async (newData) => {
      const fd = new FormData();
      fd.append("description", newData.description);
      fd.append("photo1", newData.photo1);
      fd.append("photo2", newData.photo2);
      return axiousPublic.post("/api/history", fd);
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "History Added!",
        text: "✅ History entry added successfully.",
      });
      setFormData({ description: "", photo1: null, photo2: null });
      queryClient.invalidateQueries({ queryKey: ["history"] });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "❌ Something went wrong. Please try again.",
      });
    },
  });

  // ✅ Mutation to delete history
  const deleteMutation = useMutation({
    mutationFn: (id) => axiousPublic.delete(`/api/history/${id}`),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "✅ History entry deleted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["history"] });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "❌ Could not delete. Try again.",
      });
    },
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
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
        Add History Entry
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Enter history description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Photo 1</label>
          <input
            type="file"
            name="photo1"
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Photo 2</label>
          <input
            type="file"
            name="photo2"
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Save History
        </button>
      </form>

      <h2 className="text-xl font-bold mt-10 mb-4">History List</h2>
      <div className="flex flex-col gap-4">
        {historyList.map((item) => (
          <div key={item._id} className="border p-3 rounded">
            <p>{item.description}</p>
            <div className="flex gap-2 mt-2">
              <img
                src={`${axiousPublic.defaults.baseURL}/uploads/${item.photos.photo1}`}
                alt="Photo 1"
                className="w-32 h-32 object-cover"
              />
              <img
                src={`${axiousPublic.defaults.baseURL}/uploads/${item.photos.photo2}`}
                alt="Photo 2"
                className="w-32 h-32 object-cover"
              />
            </div>
            <button
              onClick={() => deleteMutation.mutate(item._id)}
              className="bg-red-500 text-white mt-2 p-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
