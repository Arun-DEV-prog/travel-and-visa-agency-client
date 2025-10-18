import React from "react";
import eng from "../../assets/693.jpg";

const EngineerVisa = () => {
  return (
    <div className="p-6 grid mt-20 md:grid-cols-2 gap-6">
      {/* Engineer Visa Card */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
        <img
          src={eng}
          alt="Engineer Visa"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3 text-gray-700">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Engineer Job Visa
          </h2>
          <p>
            <span className="font-semibold">
              Kushtia Japanese Language Center
            </span>
            <br />
            Processing Cost for Special IT Engineering Visa
            <br />
            <span className="font-semibold">Total Cost: 7 Lac BDT</span>
          </p>
          <p>
            In job visas you have to pay in two installments… First, 3 lac BDT
            after getting COE (Certificate of Eligibility) and the remaining 4
            lac BDT after getting your visa.
          </p>
          <p>
            If you don’t get your visa, you don’t have to pay the remaining
            amount. But remember, the first 3 lac BDT will not be refunded as it
            covers processing expenses.
          </p>
          <p>
            Applicants in Bangladesh who have already graduated can directly
            apply for this visa. Graduates with a{" "}
            <span className="font-semibold">BSc in CSE, EEE, Automobile</span>{" "}
            or other engineering fields are eligible.
          </p>
          <p>
            Those with skills in{" "}
            <span className="font-semibold">
              Programming, UI/UX Design, Frontend, Backend Development, AutoCAD
              (3D CAD)
            </span>{" "}
            and related areas are in high demand in Japan.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full">
            Apply Now
          </button>
        </div>
      </div>

      {/* Skill Visa Card */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
        <img src={eng} alt="Skill Visa" className="w-full h-48 object-cover" />
        <div className="p-6 space-y-3 text-gray-700">
          <h2 className="text-xl font-bold text-green-600 mb-2">Skill Visa</h2>
          <p>
            Many people confuse{" "}
            <span className="font-semibold">
              SSW (Specified Skilled Worker Visa)
            </span>{" "}
            with the <span className="font-semibold">Skill Visa</span>, but they
            are not the same.
          </p>
          <p>
            Individuals with{" "}
            <span className="font-semibold">5–10 years of experience</span> in
            sectors such as Restaurant Work, Caregiving, Automotive, IT, and
            other professions can apply for this visa.
          </p>
          <p>
            Japanese language proficiency is{" "}
            <span className="font-semibold">not mandatory</span>, but having
            knowledge of Japanese provides better job opportunities.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EngineerVisa;
