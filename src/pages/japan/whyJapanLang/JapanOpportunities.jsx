import React from "react";

const JapanOpportunities = () => {
  const sections = [
    {
      title: "Education and Scholarship Opportunities",
      content: [
        "Many prestigious universities in Japan such as The University of Tokyo, Osaka University and Kyoto University offer scholarships for international students.",
        "Having Japanese language proficiency at levels N5 to N2 allows applicants to apply for major scholarship programs such as MEXT Scholarship and JASSO Scholarship.",
        "In many cases, a specific level of Japanese proficiency is a prerequisite for university admission.",
      ],
    },
    {
      title: "Job Opportunities (SSW, TITP, Skilled Worker Program)",
      content: [
        "**Specified Skilled Worker (SSW) Visa**: Candidates must have at least N5–N4 level Japanese proficiency. SSW allows work in 16 sectors including caregiving, factories, construction, agriculture, hotels, restaurants, electronics, shipbuilding, food processing, hospitals, and cleaning services.",
        "**Key Benefits of SSW Visa:**",
        "• Direct Employment in Japan without middlemen.",
        "• Attractive salary: 200,000–250,000 yen/month (~BDT 160,000–200,000) with overtime, housing, insurance, and family reunion opportunities.",
        "• Long-Term Stay: Valid for 5 years, upgrade to SSW-2 for permanent residency and family reunion.",
        "• Career Growth: Experience in Japan enhances career prospects locally and internationally.",
        "• Government-Approved and Safe: Regulated and legal program.",
        "• Equal Opportunities for Women: Demand in caregiving, hospitality, food processing, and cleaning.",
      ],
    },
    {
      title: "Technical Intern Training Program (TITP)",
      content: [
        "TITP allows foreign youth to travel to Japan for training and skill development.",
        "Key Benefits:",
        "• Skill Development in sectors like nursing, agriculture, construction, machinery, electronics, and food processing.",
        "• Salary: 100,000–150,000 yen/month (~BDT 70,000–120,000) plus overtime, accommodation, insurance, and medical coverage.",
        "• Legally Protected Program: Monitored by the Japanese government.",
        "• Pathway After TITP: Many transition to SSW for long-term work.",
        "• International Exposure: Gain global work experience and cross-cultural understanding.",
        "• Program Duration: 1 to 5 years.",
      ],
    },
    {
      title: "Student Visa",
      content: [
        "One of the most popular routes for Bangladeshi students.",
        "• World-Class Education: Universities focus on technology, research, and practical learning. Popular fields: Science, Engineering, Hospitality, IT, Nursing, Business.",
        "• Part-Time Work: Up to 28 hours/week during term, 40 hours/week during holidays (~900–1,200 yen/hour).",
        "• Accommodation & Support: Dormitories, apartments, International Student Support Centers.",
        "• Scholarships: MEXT, JASSO, tuition waivers, and monthly stipends.",
        "• Health Insurance: Covers up to 70% of medical expenses.",
        "• Cultural & Language Experience: Improves skills and future career opportunities.",
        "• Post-Graduation Employment: Can transition to Work Visa (SSW/Engineer/Specialist) with N2/N1 proficiency.",
        "• Pathway to PR: Work, pay taxes, and apply for Permanent Residency.",
        "• Visa Duration: Initially 1 year, renewable.",
      ],
    },
    {
      title:
        "Engineer / Specialist in Humanities / International Services (ESHIS) Visa",
      content: [
        "Types of Visa:",
        "• Engineer Visa: IT, Mechanical, Electrical, Civil, Robotics, Research.",
        "• Specialist in Humanities: Marketing, Accounting, Management, Business Consulting, Logistics.",
        "• International Services: Language teachers, translators, tourism, international business.",
      ],
    },
    {
      title: "Long-Term and Global Opportunities",
      content: [
        "• Permanent Residency or Citizenship: Achievable with long-term work and N2/N1 proficiency.",
        "• Employment in Bangladesh: Japanese companies seek Japanese-proficient employees as trainers, translators, travel/call center staff.",
        "• Freelancing & Online Work: Translation, content creation, YouTube, subtitles.",
        "• Cultural & Travel Advantages: Easier navigation and deeper appreciation of Japanese culture.",
        "• High Salary & Career Growth: Translators/Interpreters earn BDT 50,000–150,000 in Bangladesh, 150,000–250,000 yen/month in Japan (~BDT 100,000–150,000+).",
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20 md:mt-35">
      <h1 className="text-3xl font-bold mb-6 primary-font text-center text-gray-800">
        Japan Opportunities for Students & Workers
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl text-center primary-font font-semibold mb-4 text-blue-600">
              {section.title}
            </h2>
            <ul className="list-disc primary-font list-inside space-y-2 text-gray-700">
              {section.content.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JapanOpportunities;
