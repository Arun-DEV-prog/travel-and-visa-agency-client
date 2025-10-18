import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../../assets/bg remove logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src={logo} // replace with your logo path
              alt="Logo"
              className="h-10"
            />
            <h2 className="text-xl font-bold text-red-500">
              Monowara Group
              <span className="block text-green-500 text-sm">
                Japanies Language TRAINING CENTER
              </span>
            </h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Monowara Group Training Center is a leading Japanese language school
            in Bangladesh, offering comprehensive language courses and cultural
            programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Admission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Links
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
          <ul className="space-y-1 text-sm">
            <li>Sunday: 10:00 - 19:00</li>
            <li>Monday: 10:00 - 19:00</li>
            <li>Tuesday: 10:00 - 19:00</li>
            <li>Wednesday: 10:00 - 19:00</li>
            <li>Thursday: 10:00 - 19:00</li>
            <li>Friday: Closed</li>
            <li>Saturday: 10:00 - 19:00</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="text-sm">
            <strong>Address:</strong> Advanced Jaman Center(3rd Floor),Ghonapara
            Mor,Gopalganj
          </p>
          <p className="mt-2 text-sm">
            <strong>Phone:</strong>+8801763669952 <br />
          </p>
          <p className="mt-2 text-sm">
            <strong>Email:</strong> monowarahtt17@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © 2025 Monowara Group Training Center . All rights reserved.
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/8801715458036"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
}
