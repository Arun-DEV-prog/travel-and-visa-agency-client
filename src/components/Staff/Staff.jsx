import React from "react";
import staffImg from "../../assets/staff.jpg";

const staffMembers = [
  {
    name: "Md Golam Kibria Bhuiyan",
    role: "Managing Director",
    image: staffImg, // replace with actual image path
  },
  {
    name: "Md Baharul Alam Bonny",
    role: "Director of Administration",
    image: staffImg,
  },
  {
    name: "Md Salahuddin",
    role: "Director of Administration",
    image: staffImg,
  },
];

const Staff = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Management
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50"
            >
              <div className="relative w-40 h-40 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
