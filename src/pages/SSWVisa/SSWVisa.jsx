import React from "react";
import worker from "../../assets/worker.jpg";
import team from "../../assets/team-process-creation.jpg";

const SSWVisa = () => {
  return (
    <div className="p-6 mt-15 grid md:grid-cols-2 gap-6">
      {/* SSW Visa Card */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
        <img
          src={worker}
          alt="Specified Skilled Worker Visa"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3 text-gray-700">
          <h2 className="text-xl font-bold primary-font text-blue-600 mb-2">
            Visa (Specified Skilled Worker Visa)
          </h2>
          <p className=" primary-font">
            Kushtia Japanese Language Center is a Japan government-approved SSW
            support company.
          </p>
          <p className=" primary-font">
            You can apply for this visa in{" "}
            <span className="font-semibold">14 sectors</span>. Foreign nationals
            already residing in Japan can apply through Kushtia Japanese
            Language Center. From Bangladesh, you can directly apply only in{" "}
            <span className="font-semibold">
              2 sectors (Caregiver and Agriculture)
            </span>
            . Other sectors, including Hotels and Restaurants, can be accessed
            by going to Japan on a student visa and applying with the support of
            Kushtia Japanese Language Center’s Japan head office.
          </p>
          <p className=" primary-font">
            <span className="font-semibold">No educational qualifications</span>{" "}
            are required for the SSW visa. If you study Japanese up to{" "}
            <span className="font-semibold">N4 level</span> at Kushtia Japanese
            Language Center and pass the sector-specific exam, you can go
            directly to Japan on an SSW visa.
          </p>
          <p className=" primary-font">
            After working for <span className="font-semibold">10 years</span> on
            this visa, you will be eligible to apply for Japanese citizenship.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full">
            Apply Now
          </button>
        </div>
      </div>

      {/* TITP Visa Card */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
        <img
          src={team}
          alt="Technical Intern Training Program"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3 text-gray-700">
          <h2 className="text-xl font-bold  primary-font text-green-600 mb-2">
            TITP (Technical Intern Training Program)
          </h2>
          <p className=" primary-font">
            <span className="font-semibold">No educational qualifications</span>{" "}
            are required to apply for this visa.
          </p>
          <p className=" primary-font">
            After learning Japanese for{" "}
            <span className="font-semibold">3–4 months</span>, you can apply to
            Japanese companies.
          </p>
          <p className=" primary-font">
            You can work for <span className="font-semibold">3 years</span>{" "}
            under this visa and then convert it to an SSW visa. Kushtia Japanese
            Language Center will provide maximum support.
          </p>
          <p className=" primary-font">
            You will receive{" "}
            <span className="font-semibold">lifelong support</span> from Kushtia
            Japanese Language Center in Japan, in any region, for all facilities
            and issues.
          </p>
          <p className=" primary-font">
            The approximate salary ranges from{" "}
            <span className="font-semibold">120,000 BDT to 150,000 BDT</span>.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SSWVisa;
