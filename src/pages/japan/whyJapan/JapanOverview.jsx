import React from "react";

export default function JapanOverview() {
  const sections = [
    {
      title: "Why Japan?",
      content: `Japan, a remarkable nation in East Asia, is globally admired for its technology, culture, education, human values, and discipline.`,
    },
    {
      title: "Geographical Location",
      content: `Japan is an island nation in East Asia, located along the Pacific Ocean. It is surrounded by numerous small and large islands, bordered by Russia in the north, the Korean Peninsula and China in the west, and the Philippines and the Pacific Ocean to the south.

Blessed with natural beauty, mountains, rivers, forests, and seas, Japan stands as one of the most picturesque countries in the world. Its strategic location has made it a global hub for trade, maritime transport and technological advancement.`,
    },
    {
      title: "Tradition and Culture",
      content: `Japan is a nation where ancient traditions and modernity walk hand in hand. From the courage of the Samurai and the elegance of the tea ceremony to the beauty of the kimono and the serenity of Buddhist and Shinto temples, Japanese culture is a living tapestry of art and refinement. Renowned writers like Haruki Murakami, legendary filmmakers such as Akira Kurosawa, and Nobel Prize–winning scientists reflect Japan’s creative brilliance. Its art, music, anime, and traditional festivals make Japan a vibrant stage of culture and inspiration.`,
    },
    // ... add other sections
  ];

  return (
    <div className="max-w-7xl min-h-screen mx-auto p-6 mt-40 primary-font space-y-16">
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Decorative Dot / Number */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white text-xl font-bold">
              {idx + 1}
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-90 flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-red-700">
                {section.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line text-lg">
                {section.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
