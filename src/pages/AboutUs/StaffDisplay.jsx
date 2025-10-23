import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiousPublic from "../../hooks/axiousPublic";
import Loading from "../../components/Loading/Loading";

export default function StaffDisplay() {
  // Fetch staff data
  const {
    data: staffList = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const res = await axiousPublic.get("/api/staff");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load staff.</p>
    );

  // Helper: Filter by category
  const getByCategory = (category) =>
    staffList.filter((s) => s.category === category);

  const categories = ["Management", "Teacher", "Employee"];

  return (
    <div className="max-w-6xl mx-auto mt-25 md:mt-38 space-y-12 p-4">
      {categories.map((category) => {
        const group = getByCategory(category);
        if (!group.length) return null; // Skip empty categories

        return (
          <div key={category}>
            <h2 className="text-2xl text-center font-bold mt-6 mb-6 border-b-2 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {group.map((staff) => (
                <div
                  key={staff._id}
                  className="border p-4 rounded-lg shadow flex flex-col items-center text-center"
                >
                  {staff.photo && (
                    <img
                      src={`${axiousPublic.defaults.baseURL}/uploads/${staff.photo}`}
                      alt={staff.name}
                      className="w-32 h-32 object-cover rounded-full mb-4"
                    />
                  )}
                  <p className="font-semibold text-lg">{staff.name}</p>
                  <p className="text-gray-600">{staff.designation}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
