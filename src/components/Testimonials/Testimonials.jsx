import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ariyana Azad Roja",
    role: "Tokyo International University | Digital Business and Innovation.",
    image: "/graduates/roja.jpg", // replace with actual image path
    feedback:
      "The academy's guidance was instrumental in helping me achieve my academic goals in Japan.",
    rating: 5,
  },
  {
    name: "Md Murad Sarker",
    role: "Student visa to Japan",
    image: "/graduates/murad.jpg",
    feedback:
      "Great courses at an affordable price. Highly recommended for Japanese learners!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Words from Our Graduates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-gray-800 text-white p-8 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              {/* Profile Image */}
              <div className="flex justify-center -mt-16">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center mt-4 mb-4 text-yellow-400">
                {Array(t.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              {/* Feedback */}
              <p className="italic text-center mb-6">{t.feedback}</p>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-center">{t.name}</h3>
              <p className="text-center text-gray-300">{t.role}</p>

              {/* Quote Icon */}
              <FaQuoteRight className="absolute bottom-4 right-4 text-red-500 text-3xl opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
