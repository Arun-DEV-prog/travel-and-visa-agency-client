import React from "react";

const GermanyOverview = () => {
  const sections = [
    {
      title: "Geographical Location",
      content: [
        "Germany is a beautiful and strategically significant country situated in the center of Europe.",
        "It is bordered by the North Sea and Denmark to the north, the Alps and Austria to the south, Poland and the Czech Republic to the east, and France, Belgium, and the Netherlands to the west.",
        "This ideal location makes Germany the hub of European trade, industry and transportation.",
      ],
    },
    {
      title: "Heritage and Culture",
      content: [
        "Germany is a land of deep-rooted traditions—the birthplace of poetry, music, philosophy, science and the arts.",
        "Names like Goethe, Bach, Beethoven, and Einstein are not just German pride, but global icons.",
        "Every city is rich with historic landmarks, museums and cultural festivals, reflecting the nation’s graceful blend of heritage and modern life.",
      ],
    },
    {
      title: "A Strong Economy",
      content: [
        "Germany is Europe’s largest economy and the fourth largest in the world.",
        "The label “Made in Germany” stands for excellence and reliability.",
        "The country leads globally in industries such as automobile manufacturing, engineering, IT, chemicals, and renewable energy.",
        "Its workplaces ensure safety, legality and high social protection, making Germany one of the best destinations for skilled professionals.",
      ],
    },
    {
      title: "Education System",
      content: [
        "Germany offers one of the finest education systems in the world.",
        "Most public universities charge no tuition fees, or only minimal fees, while maintaining globally recognized academic standards.",
        "The renowned Dual Ausbildung System uniquely combines theoretical learning with practical training, giving students real-world skills and strong career prospects.",
      ],
    },
    {
      title: "Healthcare System",
      content: [
        "Germany’s healthcare system is among the most advanced and efficient in the world.",
        "Every citizen and resident is covered by health insurance, ensuring universal access to medical care.",
        "Doctors, nurses and healthcare professionals enjoy high respect and excellent working conditions, making the healthcare sector one of the most stable and rewarding fields in Germany.",
      ],
    },
    {
      title: "Employment Opportunities",
      content: [
        "Due to a shortage of skilled workers, Germany regularly creates new opportunities for foreign professionals.",
        "Visa programs such as the Ausbildung Visa, Opportunity Card, and Job Seeker Visa allow young people from Bangladesh and other countries to work and build careers in Germany.",
        "Work conditions, salaries, holidays, and social benefits are legally regulated, ensuring stability and dignity in professional life.",
      ],
    },
    {
      title: "Tourism Industry",
      content: [
        "Germany is one of the world’s top tourist destinations, attracting more than 37 million international visitors annually.",
        "It ranks among the top ten countries for global tourism, earning an average of over 40 billion USD per year.",
        "From Berlin, Munich, Neuschwanstein Castle, Black Forest, Rhine Valley, to Heidelberg — Germany offers a perfect blend of history, nature, culture, and modernity.",
      ],
    },
    {
      title: "Culture and Society",
      content: [
        "German society is known for its hard work, honesty and discipline.",
        "Values such as respect for time, responsibility and integrity define the German way of life.",
        "People maintain a balance between work, family, and nature, making life harmonious and fulfilling.",
        "Festivals, music, theater, and sports are vibrant reflections of Germany’s dynamic culture.",
      ],
    },
    {
      title: "Judicial System",
      content: [
        "Germany’s judicial system is a global symbol of fairness, transparency and independence.",
        "German courts are often called the “Guardians of Justice”, protecting citizens’ fundamental rights.",
        "Every individual, regardless of race, religion, gender, or economic status, is treated equally before the law.",
        "Many nations have modeled their own legal frameworks after Germany’s example.",
      ],
    },
    {
      title: "Living Standards and Lifestyle",
      content: [
        "Germany offers a high quality of life built on safety, order and well-being.",
        "Clean environments, modern infrastructure, efficient transportation, and strong social welfare systems ensure a peaceful and dignified lifestyle.",
        "Foreign residents are welcomed with hospitality, equality and fairness.",
      ],
    },
    {
      title: "Conclusion",
      content: [
        "Germany is more than just a country; it is a beacon of opportunity, progress and humanity.",
        "Whether your goal is education, employment, research, or permanent settlement, Germany promises a future that is bright, secure and full of possibilities.",
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-30 md:mt-35">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Explore Germany: Opportunities, Culture, and Lifestyle
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GermanyOverview;
