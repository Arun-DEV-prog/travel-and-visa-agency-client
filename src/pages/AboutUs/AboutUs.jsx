import React from "react";
import sideImg from "../../assets/aboutImg.png";

export default function AboutUs() {
  return (
    <section className="relative bg-white py-16 min-h-screen px-6 md:px-12 overflow-hidden">
      {/* Background Circle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e5e7eb_1px,_transparent_1px)] bg-[length:60px_60px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={sideImg} // 👉 replace with your actual image path
            alt="About Us"
            className="max-h-[620px] object-contain z-10"
          />
        </div>

        {/* Right Side Content */}
        <div className="z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Monowara Group Training Center is one of the leading Japanese
            language training center in Bangladesh. It offers an easy learning
            method for Bangladeshi students. The courses are designed especially
            for the Bangladeshi students.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Monowara Group Training Center has an extraordinary learning method
            to make each of the students eloquent in Japanese language. This
            easiest method ensures highest skill in Japanese Language.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At the same time, Monowara Group Training Center ensures the
            suitable course fee for all the students of Bangladesh.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801715458036"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7 z-50"
        >
          <path d="M12 2C6.48 2 2 6.03 2 11.39c0 2.01.65 3.88 1.76 5.43L2 22l5.43-1.69c1.48.81 3.19 1.27 5.02 1.27 5.52 0 10-4.47 10-9.99C22 6.03 17.52 2 12 2zm.06 15.19h-.01c-1.72 0-3.41-.46-4.88-1.34l-.35-.21-2.89.91.94-2.82-.23-.36c-.98-1.55-1.5-3.31-1.5-5.11 0-5.06 4.19-9.18 9.34-9.18 2.49 0 4.83.97 6.59 2.73 1.76 1.76 2.74 4.11 2.74 6.61 0 5.07-4.19 9.17-9.35 9.17zm5.2-6.9c-.28-.14-1.65-.81-1.91-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.09-.16.18-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.41-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-.99.97-.99 2.36s1.02 2.74 1.16 2.93c.14.19 2 3.05 4.86 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.25-.19-.53-.33z" />
        </svg>
      </a>
    </section>
  );
}
