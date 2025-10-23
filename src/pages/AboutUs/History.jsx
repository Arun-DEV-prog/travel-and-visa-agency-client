import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../hooks/axiousPublic";

export default function History() {
  // Fetch history data
  const {
    data: historyList = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/history");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load history.</p>
    );

  return (
    <div className="max-w-6xl mx-auto mt-30 md:mt-40 space-y-10">
      {historyList.map((item) => (
        <div key={item._id} className="border rounded-lg shadow p-4">
          {/* Top: Two photos side by side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img
              src={`${axiousPublic.defaults.baseURL}/uploads/${item.photos.photo1}`}
              alt="Photo 1"
              className="w-full h-90 object-cover rounded"
            />
            <img
              src={`${axiousPublic.defaults.baseURL}/uploads/${item.photos.photo2}`}
              alt="Photo 2"
              className="w-full h-90 object-cover rounded"
            />
          </div>
          {/* Bottom: Description */}
          <p className="text-gray-800">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
