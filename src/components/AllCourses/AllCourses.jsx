import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import axiousPublic from "../../hooks/axiousPublic";
import Loading from "../Loading/Loading";

const AllCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiousPublic.get("/courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load courses</p>
    );
  if (!courses || courses.length === 0)
    return (
      <p className="text-center mt-10 text-gray-500">No courses available</p>
    );

  return (
    <div className="max-w-6xl  mx-auto px-4 py-8">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Our Courses</h1>

      <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg hover:bg-gray-200 shadow-md flex flex-col overflow-hidden"
          >
            {/* Course Image */}
            {course.image && (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4">
                  {course.description?.length > 100
                    ? course.description.slice(0, 100) + "..."
                    : course.description}
                </p>
              </div>
              <Link
                to={`/courses/${course.slug}`}
                className="mt-auto inline-block bg-[#b40e14] text-white px-4 py-2 rounded hover:bg-red-700 text-center"
              >
                Course Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
