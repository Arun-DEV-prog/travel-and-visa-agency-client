import React from "react";

const SouthKoreaOverview = () => {
  const sections = [
    {
      title: "Geographical Location",
      content:
        "South Korea is located on the Korean Peninsula in East Asia, bordered by the East Sea (Sea of Japan) to the east, the Yellow Sea to the west, and North Korea to the north. Its capital, Seoul, is one of the world’s most modern and dynamic cities, where technology and culture coexist seamlessly. Strategically positioned, Korea serves as a vital commercial link between Asia, Europe and the Americas.",
    },
    {
      title: "Heritage and Culture",
      content:
        "With thousands of years of history, South Korea proudly preserves the legacy of the Goryeo and Joseon dynasties. Ancient palaces, Buddhist temples, and the traditional attire Hanbok symbolize its deep-rooted cultural heritage. Today, K-pop, Korean dramas and cinema have become global phenomena, spreading the 'Hallyu' or Korean Wave across the world.",
    },
    {
      title: "Strong Economy",
      content:
        "South Korea boasts the 13th-largest economy in the world and is a pioneer in high-tech industries. Global brands like Samsung, Hyundai, LG, Kia, and SK Group reflect Korea’s industrial and economic strength. The country leads in robotics, electronics, biotechnology, and automotive innovation, offering safe, modern, and well-regulated working environments that uphold workers’ rights.",
    },
    {
      title: "Education System",
      content:
        "Korea’s education system ranks among the most competitive and effective globally. Students are nurtured with discipline, determination, and innovation, preparing them for global excellence. Renowned universities such as Seoul National University, KAIST, Yonsei, and Korea University attract thousands of international students. Ample opportunities exist for scholarships, exchange programs, and Korean language training.",
    },
    {
      title: "Healthcare Sector",
      content:
        "South Korea offers world-class healthcare, combining modern medical technology, advanced infrastructure, and highly trained professionals. Universal health insurance ensures affordable and accessible treatment for all. Its hospitals are global leaders in fields like cancer treatment, organ transplantation, and plastic surgery.",
    },
    {
      title: "Employment Opportunities",
      content:
        "South Korea provides diverse employment pathways for foreigners through various programs.",
      programs: [
        "EPS (Employment Permit System)",
        "D-2 Student Visa",
        "D-4 Language Visa",
        "E-7 Skilled Worker Visa",
      ],
      conclusion:
        "High salaries, modern workplaces, and strong labor protection make Korea a preferred destination for skilled professionals from Bangladesh and around the world.",
    },
    {
      title: "Society and Culture",
      content:
        "Korean society is deeply rooted in respect, harmony, and discipline. Family values, education, and responsibility hold great importance. The Korean spirit of hospitality, known as 'Jeong (정)', reflects warmth, sincerity, and compassion. Social unity and hard work are considered the foundations of success in Korean life.",
    },
    {
      title: "Judicial System",
      content:
        "Korea’s judiciary is independent, transparent, and justice-oriented. The Supreme Court of Korea and the Constitutional Court uphold democracy, rule of law, and human rights. Every citizen is equal before the law, and anti-corruption measures are strictly enforced. This fairness and accountability make Korea a model of democratic governance.",
    },
    {
      title: "Living Standards",
      content:
        "South Korea offers a safe, modern, and technologically advanced lifestyle. Smart cities, efficient public transport, clean environments, and digital services make it one of the most livable countries in the world. Foreign residents enjoy equal opportunities, respect, and access to modern public facilities.",
    },
    {
      title: "Tourism",
      content:
        "Korea is one of the world’s most popular travel destinations, attracting 17–20 million international visitors annually and generating over USD 30 billion in tourism revenue. From Seoul, Busan, and Jeju Island to Gyeongbokgung Palace, Namsan Tower, and Insadong, the country blends history, nature, and modernity into a unique cultural experience.",
    },
    {
      title: "Conclusion",
      content:
        "South Korea is not just a country; it is a symbol of perseverance, respect, innovation and progress. Whether your goal is education, employment, research, or cultural experience, Korea offers a safe, dignified, and promising future for all who seek it.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 mt-25 md:mt-36">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
          South Korea: A Nation of Progress, Innovation & Culture
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-blue-500"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-700 mb-3 leading-relaxed">
                {section.content}
              </p>

              {section.programs && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Employment Programs:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 mb-3">
                    {section.programs.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.conclusion && (
                <p className="text-gray-700 italic">{section.conclusion}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SouthKoreaOverview;
