import React from "react";
import student from "../../assets/student.jpg";
import student2 from "../../assets/student2.jpg";

const StudentVise = () => {
  return (
    <section className="container mx-auto mt-20 px-6 py-12">
      {/* TOP: Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <img
          src={student}
          alt="Kushtia Japanese Language Center"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <img
          src={student2}
          alt="Students in Japan"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* BOTTOM: Text content */}
      <div className="space-y-5 text-gray-700">
        <p className="primary-font">
          <strong>1.</strong> The minimum requirement to apply for a student
          visa in Japan is passing H.S.C (Higher Secondary Certificate) or a
          Diploma for those who studied in the technical stream.
        </p>
        <p className="primary-font">
          <strong>2.</strong> Through Monowara Group & Japanese Language Center,
          students can learn Japanese for 4 months and then apply to a Japanese
          language school.
        </p>
        <p className="primary-font">
          <strong>3.</strong> Students who go to Japan after completing HSC in
          Bangladesh can enroll in a Japanese language school. After finishing
          the language program, they can get admission to a Japanese university
          or college. After graduating, they can obtain a job under the{" "}
          <em>Engineer / Humanities / International Services</em> category.
          After working for 5 years on this visa, they can apply for Japanese
          citizenship.
        </p>
        <p className="primary-font">
          <strong>4.</strong> Students who have completed Honours (Bachelor’s)
          or Master’s in Bangladesh and then go to Japan for a language course
          can, after completing the program, directly obtain a job visa under
          the <em>Engineer / Humanities / International Services</em> category.
          After working for 5 years, they can apply for Japanese citizenship.
        </p>
        <p className="primary-font">
          <strong>5.</strong> After arriving in Japan, Monowara Group & Japanese
          Language Centerwill provide maximum support in finding both part-time
          and full-time jobs.
        </p>
        <p className="primary-font">
          <strong>6.</strong> Students who complete HSC and go to Japan but do
          not wish to continue further studies after the language course can
          apply for an SSW job visa with the support of the Kushtia Japanese
          Language Center’s head office in Japan, provided they pass the
          Japanese Language N4 level.
        </p>
        <p className="primary-font">
          <strong>7.</strong> Students who have completed a B.Sc. in IT in
          Bangladesh and go to Japan through Monowara Group & Japanese Language
          Center will receive full support in securing a good IT job after
          completing the Japanese language course, under the{" "}
          <em>Engineer / Humanities / International Services</em> visa category.
        </p>
        <p className="primary-font">
          <strong>Additional Support:</strong> Monowara Group & Japanese
          Language Center also helps students in Japan with:
        </p>
        <ul className="list-disc ml-6 primary-font">
          <li>SIM cards to contact family immediately after arrival.</li>
          <li>Accommodation support for those without school hostels.</li>
          <li>Part-time jobs (28 hours/week, earning ~100,000 BDT/month).</li>
          <li>Halal food arrangements where available.</li>
        </ul>
      </div>
    </section>
  );
};

export default StudentVise;
