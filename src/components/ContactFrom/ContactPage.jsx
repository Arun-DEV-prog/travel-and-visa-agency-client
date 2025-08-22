import React from "react";
import AgencyMap from "../AgencyMap/AgencyMap";

export default function ContactPage() {
  return (
    <div className="min-h-[500px] relative z-10 flex items-center justify-center bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 block w-full h-10 p-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="mt-1 block w-full h-10 p-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="mt-1 block w-full h-10 p-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="mt-1 block w-full h-10 p-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="mt-1 block w-full h-10 p-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-40 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg border h-[500px]">
          <AgencyMap />
        </div>
      </div>
    </div>
  );
}
