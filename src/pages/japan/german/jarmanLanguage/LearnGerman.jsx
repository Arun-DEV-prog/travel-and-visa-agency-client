import React from "react";

const LearnGerman = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "Learning the German language is not merely about mastering a new language; it is about opening the door to a new life. Germany, one of the world’s most powerful economies, along with other German-speaking countries such as Switzerland, Austria, Liechtenstein and Luxembourg, offers endless opportunities for education, training and career advancement.",
    },
    {
      title: "Higher Education",
      content:
        "German universities rank among the best in the world. Most universities conduct their programs in German, offering opportunities for Bachelor’s, Master’s, and PhD studies either free of charge or at a very low cost.",
    },
    {
      title: "Ausbildung (Vocational Training Program)",
      content:
        "The Ausbildung program is Germany’s most popular and practical education system, combining classroom study with hands-on work experience.",
      points: [
        "Duration: Usually 2 to 3.5 years",
        "Students work at an organization for several days per week and attend vocational school (Berufsschule) on the remaining days",
        "Monthly stipend: €900 to €1,400 during training",
        "Government-recognized certificate and excellent job placement upon completion",
      ],
      sectors: [
        "Healthcare (Nursing, Elderly Care)",
        "Hotel and Restaurant Management",
        "Electrical and Mechanical Engineering",
        "IT and Software Technology",
        "Logistics, Automobile, and Construction",
      ],
      benefits: [
        "Earn a salary while studying",
        "High chances of permanent employment after course completion",
        "Easy access to work permits and permanent residency (PR)",
        "No tuition fees",
      ],
    },
    {
      title: "Opportunity Card (Chancenkarte)",
      content:
        "The Opportunity Card is a points-based visa system introduced in 2024 for qualified non-EU citizens to legally enter Germany and look for employment.",
      points: [
        "Stay in Germany for 6 to 12 months to search for a job",
        "Eligibility based on education, language proficiency, work experience, age, and connection to Germany",
        "Requirements: recognized qualification, German knowledge (A1–B1), sufficient financial means",
      ],
      benefits: [
        "Legal permission to stay to find employment",
        "Option to convert into Work Permit upon securing a job",
        "Long-term residence opportunities with family",
      ],
    },
    {
      title: "Au Pair Program",
      content:
        "A cultural exchange program for young individuals (18–26), living with a German family, assisting in childcare, and immersing in German language and culture. Host families provide accommodation, meals, and a monthly allowance.",
    },
    {
      title: "Voluntary Social and Environmental Programs",
      content:
        "Participants work in hospitals, elderly care homes, childcare centers, or environmental organizations, gaining professional experience and language skills while contributing to society.",
      programs: [
        "FSJ (Freiwilliges Soziales Jahr): Voluntary social service year",
        "BFD (Bundesfreiwilligendienst): Federal voluntary service",
        "FÖJ (Freiwilliges Ökologisches Jahr): Voluntary ecological year focused on nature and environment conservation",
      ],
    },
    {
      title: "Family Reunion",
      content:
        "Proficiency in German significantly increases the chances of obtaining a family or spouse visa. A spouse must complete at least A1 level.",
    },
    {
      title: "Work Permit & Permanent Residency (PR)",
      content:
        "Language proficiency, especially B1 level, opens doors to career advancement and long-term settlement.",
    },
    {
      title: "High-Paying Jobs",
      content:
        "Knowledge of German creates access to lucrative positions in engineering, IT, healthcare, banking, and research.",
    },
    {
      title: "Citizenship",
      content:
        "German language skills are required for naturalization after long-term residence. B1 level is needed.",
    },
    {
      title: "Conclusion",
      content:
        "The German language is your key to a future filled with education, professional growth, financial stability, and permanent residency. Learning German could be the first step toward turning your dreams into reality.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20 md:mt-36">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Learning German: Opportunities & Career Pathways
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {section.content}
            </p>

            {section.points && (
              <ul className="list-disc list-inside text-gray-700 mb-3">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {section.sectors && (
              <>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Popular Sectors:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-3">
                  {section.sectors.map((sector, i) => (
                    <li key={i}>{sector}</li>
                  ))}
                </ul>
              </>
            )}

            {section.benefits && (
              <>
                <h3 className="font-semibold text-gray-800 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-3">
                  {section.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}

            {section.programs && (
              <>
                <h3 className="font-semibold text-gray-800 mb-2">Programs:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-3">
                  {section.programs.map((program, i) => (
                    <li key={i}>{program}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnGerman;
