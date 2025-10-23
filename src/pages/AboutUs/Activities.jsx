import React from "react";
import im1 from "../../assets/student.jpg";
import im2 from "../../assets/student2.jpg";

export default function Activities() {
  return (
    <div className="max-w-6xl mx-auto mt-35 space-y-8 p-4">
      {/* Top: Two images in 2-column grid */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src={im1} // Replace with your actual image URL or axiosPublic link
          alt="Language Teaching"
          className="w-full h-48 object-cover rounded"
        />
        <img
          src={im2} // Replace with your actual image URL or axiosPublic link
          alt="Visa Processing"
          className="w-full h-48 object-cover rounded"
        />
      </div>

      {/* Bottom: Description */}
      <div className="text-gray-800 space-y-4">
        <p>
          In our institution, a large number of students have already completed
          Japanese Language Proficiency Levels N5 and N4, and are currently
          studying or working in Japan under Student Visa and SSW Visa programs.
        </p>
        <p>
          Many others who have passed N5/N4 are in the process of completing the
          necessary documentation for Student and SSW Visas to Japan. At
          present, over a hundred students are enrolled in the Japanese Language
          N5/N4 courses.
        </p>
        <p>
          Several students who have passed German Language Level B1 are now
          undergoing Ausbildung training programs in Germany. Others who have
          successfully completed B1 are waiting to travel to Germany in the
          upcoming session for the Ausbildung Visa Program. Currently, more than
          a hundred students are enrolled in German Language Courses (A1, A2 and
          B1 levels).
        </p>
        <p>
          We offer comprehensive language training programs in German, Japanese
          and Korean languages.
        </p>
      </div>
    </div>
  );
}
