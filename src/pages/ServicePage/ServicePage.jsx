import React from "react";
import { useParams } from "react-router";

const ServicePage = () => {
  const { country, visa } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {country} - {visa}
      </h1>
      <p className="mt-2 text-gray-600">
        This is the {visa} page for {country}.
      </p>
    </div>
  );
};

export default ServicePage;
