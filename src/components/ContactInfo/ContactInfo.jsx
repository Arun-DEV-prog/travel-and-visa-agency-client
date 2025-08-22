import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
const ContactInfo = () => {
  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {/* Phone */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl">
              <FaPhoneAlt />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-700">+880 1325-661767</p>
          <p className="text-gray-700">+880 1715-458036</p>
          <p className="text-gray-700">+880 1913-727202</p>
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl">
              <FaEnvelope />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-700">jalc.bd2024@gmail.com</p>
        </div>

        {/* Opening Hours */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl">
              <FaClock />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p className="text-gray-700">Sunday - Thursday : 10am to 8pm</p>
          <p className="text-gray-700">Friday : Closed</p>
        </div>

        {/* Address */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl">
              <FaMapMarkerAlt />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-700">
            A-61/4 (1st Floor), Ali Market, <br />
            Khilkhet Bazar Road, Bottola, <br />
            Khilkhet, Dhaka-1229
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
