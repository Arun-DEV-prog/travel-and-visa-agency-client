import React from "react";

const services = [
  {
    title: "TITP (Technical Intern Training Program)",
    description:
      "Comprehensive support for Technical Intern Training Program applicants, including documentation preparation, training, and placement with Japanese companies.",
    link: "#",
  },
  {
    title: "SSW (Specified Skilled Worker)",
    description:
      "End-to-end assistance for Specified Skilled Worker visa applications, helping qualified workers find opportunities in Japan's industries with labor shortages.",
    link: "#",
  },
  {
    title: "Student Visa",
    description:
      "Complete guidance for international students seeking to study in Japan, from school selection and application to visa processing and pre-departure orientation.",
    link: "#",
  },
  {
    title: "International Job Visa",
    description:
      "Professional support for skilled workers looking to secure employment in Japan, including job matching, interview preparation, and visa application assistance.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-green-600">Our</span>{" "}
          <span className="text-red-600">Services</span>
        </h2>
        <p className="text-gray-600 mb-12">
          We offer comprehensive support for various pathways to work and study
          in Japan.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-green-600 font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
