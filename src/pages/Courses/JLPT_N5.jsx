import React from "react";
import { useParams } from "react-router";
import axiousPublic from "../../hooks/axiousPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

const JLPT_N5 = () => {
  const { slug } = useParams();

  const {
    data: course,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["course", slug],
    queryFn: async () => {
      const res = await axiousPublic.get(`/course/${slug}`);
      return res.data;
    },
  });
  //console.log(course);
  if (isLoading) return <Loading />;
  return (
    <div className="max-w-5xl h-[1000px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course?.title}</h1>

      {course?.image && (
        <img
          src={course?.image}
          alt={course?.title}
          className="w-full h-100 primary-font object-cover rounded-lg mb-6"
        />
      )}

      <p className="text-gray-700 primary-font mb-4">{course?.description}</p>

      <div className="flex gap-6 mb-6">
        <p>
          <span className="font-semibold">Duration:</span> {course?.duration}
        </p>
        <p>
          <span className="font-semibold">Level:</span> {course?.level}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl primary-font font-semibold mb-2">Modules</h2>
        <ul className="list-disc list-inside space-y-1">
          {course?.modules?.map((module, i) => (
            <li className="primary-font" key={i}>
              {module}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl primary-font font-semibold mb-2">Outcomes</h2>
        <ul className="list-decimal list-inside space-y-1">
          {course?.outcomes?.map((outcome, i) => (
            <li className="primary-font" key={i}>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JLPT_N5;
