import React, { useEffect, useState } from "react";
import axiousPublic from "../../hooks/axiousPublic";

export default function ActivitiesList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axiousPublic
      .get("/api/activities")
      .then((res) => {
        // Sort by newest first
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setActivities(sorted);
      })
      .catch((err) => console.error("Error fetching activities:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-40 py-8 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🌏 Recent Activities
      </h1>

      {activities.map((activity) => (
        <div
          key={activity._id}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          {/* Left side — Photos */}
          <div className="md:w-1/2 grid grid-cols-2 gap-2 p-2">
            {activity.photos && activity.photos.length > 0 ? (
              activity.photos.map((photo, index) => (
                <img
                  key={index}
                  src={`https://agency-server-five.vercel.app/uploads/${photo}`}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-48 object-cover rounded"
                />
              ))
            ) : (
              <div className="col-span-2 flex items-center justify-center bg-gray-100 text-gray-500 h-48 rounded">
                No Image
              </div>
            )}
          </div>

          {/* Right side — Details */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {activity.country}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                📅 {new Date(activity.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-700 mt-3">{activity.description}</p>
            </div>

            {/* Event types */}
            <div className="mt-4 space-y-2">
              {activity.academic && (
                <p>
                  <span className="font-semibold">Academic:</span>{" "}
                  {activity.academic}
                </p>
              )}
              {activity.cultural && (
                <p>
                  <span className="font-semibold">Cultural:</span>{" "}
                  {activity.cultural}
                </p>
              )}
              {activity.career && (
                <p>
                  <span className="font-semibold">Career:</span>{" "}
                  {activity.career}
                </p>
              )}
              {activity.community && (
                <p>
                  <span className="font-semibold">Community:</span>{" "}
                  {activity.community}
                </p>
              )}
              {activity.online && (
                <p>
                  <span className="font-semibold">Online:</span>{" "}
                  {activity.online}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {activities.length === 0 && (
        <p className="text-center text-gray-500">No activities found.</p>
      )}
    </div>
  );
}
