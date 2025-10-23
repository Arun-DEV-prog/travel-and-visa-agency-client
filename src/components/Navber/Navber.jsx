import React, { useEffect, useState } from "react";
import { Menu as MenuIcon, X as XIcon, ArrowRight } from "lucide-react";
import logo from "../../assets/bg remove logo.png";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Navber() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  // Helper to open modal dynamically
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.showModal();
  };

  const closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.close();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  shadow-md ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* === Top Section (Logo + Hamburger) === */}
        <div
          className={`flex justify-between items-center px-4 transition-all duration-500 ${
            scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
          }`}
        >
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <span className="text-xl font-semibold">
              <span className="italic primary-font text-[#b40e14]">
                Monowara
              </span>{" "}
              Group
            </span>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <XIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* === Desktop Menu === */}
        <div className="hidden lg:block bg-[#aad6ec] mb-5 px-20">
          <ul className="flex justify-between  items-center text-lg primary-font">
            <li className=" tex">
              <Link to="/" className="hover:text-[#b40e14]">
                Home
              </Link>
            </li>

            <li>
              <button
                className="text-black hover:text-[#b40e14]"
                onClick={() => openModal("modal_japan")}
              >
                Japan
              </button>
            </li>
            <li>
              <button
                className="text-black hover:text-[#b40e14]"
                onClick={() => openModal("modal_germany")}
              >
                Germany
              </button>
            </li>
            <li>
              <button
                className="text-black hover:text-[#b40e14]"
                onClick={() => openModal("modal_korea")}
              >
                South Korea
              </button>
            </li>

            <li>
              <button
                className="text-black hover:text-[#b40e14]"
                onClick={() => openModal("modal_about")}
              >
                About us
              </button>
            </li>

            <li>
              <Link to="/contact-us" className="hover:text-[#b40e14]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-[#b40e14]">
                Events
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="hover:text-[#b40e14]">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="btn btn-sm bg-[#b40e14] hover:bg-red-700 text-white rounded-lg"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* === Mobile Menu (Dropdown) === */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-inner border-t border-gray-200 animate-slideDown">
            <ul className="flex flex-col space-y-4 p-5 text-lg font-medium primary-font">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="hover:text-[#b40e14]"
              >
                Home
              </Link>

              <button
                onClick={() => {
                  openModal("modal_japan");
                  handleLinkClick();
                }}
                className="text-left text-black hover:text-[#b40e14]"
              >
                Japan
              </button>

              <button
                onClick={() => {
                  openModal("modal_germany");
                  handleLinkClick();
                }}
                className="text-left text-black hover:text-[#b40e14]"
              >
                Germany
              </button>

              <button
                onClick={() => {
                  openModal("modal_korea");
                  handleLinkClick();
                }}
                className="text-left text-black hover:text-[#b40e14]"
              >
                South Korea
              </button>

              <Link
                to="/about-us"
                onClick={handleLinkClick}
                className="hover:text-[#b40e14]"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                onClick={handleLinkClick}
                className="hover:text-[#b40e14]"
              >
                Contact Us
              </Link>
              <Link
                to="/notice"
                onClick={handleLinkClick}
                className="hover:text-[#b40e14]"
              >
                Events
              </Link>
              <Link
                to="/gallery"
                onClick={handleLinkClick}
                className="hover:text-[#b40e14]"
              >
                Gallery
              </Link>
              <Link
                to="/dashboard"
                onClick={handleLinkClick}
                className="hover:text-[#b40e14]"
              >
                Dashboard
              </Link>

              <Link
                to="/login"
                onClick={handleLinkClick}
                className="w-full text-center py-2 rounded bg-[#b40e14] text-white hover:bg-red-700 transition"
              >
                Login
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* === Existing Modals (unchanged) === */}

      {/* JAPAN Modal */}
      <dialog
        id="modal_japan"
        className="modal z-[9999] fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div className="modal-box max-w-6xl w-11/12 bg-white text-black rounded-2xl shadow-2xl p-10 max-h-[90vh] overflow-y-auto relative">
          <form method="dialog">
            <button className="btn btn-lg btn-circle btn-ghost absolute right-4 top-4 text-gray-600 hover:text-red-600 transition">
              ✕
            </button>
          </form>
          <h3 className="font-extrabold text-4xl md:text-5xl mb-10 text-center text-[#b40e14]">
            Japanese Language
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-3xl font-semibold mb-4 text-[#b40e14]">
                Explore Japan
              </h4>
              <Link
                onClick={() => closeModal("modal_japan")}
                to="/whyjapan?"
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Why Japan? <ArrowRight />
              </Link>
              <Link
                to="/whyjapan-language?"
                onClick={() => closeModal("modal_japan")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Why Japanese Language? <ArrowRight />
              </Link>
            </div>
            <div>
              <h4 className="text-3xl font-semibold mb-6 text-[#b40e14]">
                Course Description
              </h4>
              <ul className="flex flex-col space-y-5 text-lg font-medium">
                <Link
                  to="jpltN5"
                  onClick={() => closeModal("modal_japan")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  JLPT N5
                </Link>
                <Link
                  to="NATcourse"
                  onClick={() => closeModal("modal_japan")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  NAT Course Description
                </Link>
                <Link
                  to="N4course"
                  onClick={() => closeModal("modal_japan")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  JLPT N4
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </dialog>

      {/* GERMANY Modal */}
      <dialog
        id="modal_germany"
        className="modal z-[9999] fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div className="modal-box max-w-6xl w-11/12 bg-white text-black rounded-2xl shadow-2xl p-10 max-h-[90vh] overflow-y-auto relative">
          <form method="dialog">
            <button className="btn btn-lg btn-circle btn-ghost absolute right-4 top-4 text-gray-600 hover:text-red-600 transition">
              ✕
            </button>
          </form>
          <h3 className="font-extrabold text-4xl md:text-5xl mb-10 text-center text-[#b40e14]">
            German Language
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-3xl font-semibold mb-4 text-[#b40e14]">
                Explore German
              </h4>
              <Link
                to="/whygerman?"
                onClick={() => closeModal("modal_germany")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Why Germany? <ArrowRight />
              </Link>
              <Link
                to="/whygerman-language?"
                onClick={() => closeModal("modal_germany")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Why German Language? <ArrowRight />
              </Link>
            </div>
            <div>
              <h4 className="text-3xl font-semibold mb-6 text-[#b40e14]">
                Course Description
              </h4>
              <ul className="flex flex-col space-y-5 text-lg font-medium">
                <Link
                  to="A1course"
                  onClick={() => closeModal("modal_germany")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  A1: BEGINNER
                </Link>
                <Link
                  to="A2course"
                  onClick={() => closeModal("modal_germany")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  A2: Elementary
                </Link>
                <Link
                  to="B1course"
                  onClick={() => closeModal("modal_germany")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  B1: Intermediate
                </Link>
                <Link
                  to="B2course"
                  onClick={() => closeModal("modal_germany")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  B2: Upper Intermediate
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </dialog>

      {/* KOREA Modal */}
      <dialog
        id="modal_korea"
        className="modal z-[9999] fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div className="modal-box max-w-6xl w-11/12 bg-white text-black rounded-2xl shadow-2xl p-10 max-h-[90vh] overflow-y-auto relative">
          <form method="dialog">
            <button className="btn btn-lg btn-circle btn-ghost absolute right-4 top-4 text-gray-600 hover:text-red-600 transition">
              ✕
            </button>
          </form>
          <h3 className="font-extrabold text-4xl md:text-5xl mb-10 text-center text-[#b40e14]">
            South Korea
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-3xl font-semibold mb-4 text-[#b40e14]">
                Explore South Korea
              </h4>
              <Link
                to="/whyKorea?"
                onClick={() => closeModal("modal_korea")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Why South Korea? <ArrowRight />
              </Link>
              <Link
                to="/whyKorea-Language?"
                onClick={() => closeModal("modal_korea")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Why Korean Language? <ArrowRight />
              </Link>
            </div>
            <div>
              <h4 className="text-3xl font-semibold mb-6 text-[#b40e14]">
                Course Description
              </h4>
              <ul className="flex flex-col space-y-5 text-lg font-medium">
                <Link
                  to="Topik1course"
                  onClick={() => closeModal("modal_korea")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  TOPIK I
                </Link>
                <Link
                  to="Topik2course"
                  onClick={() => closeModal("modal_korea")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  TOPIK II
                </Link>
                <Link
                  to="EpsTopikcourse"
                  onClick={() => closeModal("modal_korea")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  EPS-TOPIK
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
      <dialog
        id="modal_about"
        className="modal z-[9999] fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div className="modal-box max-w-6xl w-11/12 bg-white text-black rounded-2xl shadow-2xl p-10 max-h-[90vh] overflow-y-auto relative">
          <form method="dialog">
            <button className="btn btn-lg btn-circle btn-ghost absolute right-4 top-4 text-gray-600 hover:text-red-600 transition">
              ✕
            </button>
          </form>
          <h3 className="font-extrabold text-4xl md:text-5xl mb-10 text-center text-[#b40e14]">
            About us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Link
                to="staff"
                onClick={() => closeModal("modal_about")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Staff <ArrowRight />
              </Link>
              <Link
                to="/whyKorea-Language?"
                onClick={() => closeModal("modal_korea")}
                className="text-2xl font-medium flex items-center gap-2 hover:text-[#b40e14] transition"
              >
                Goal <ArrowRight />
              </Link>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 text-lg font-medium">
                <Link
                  to="History"
                  onClick={() => closeModal("modal_about")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  History
                </Link>
                <Link
                  to="activites"
                  onClick={() => closeModal("modal_about")}
                  className="hover:underline hover:text-[#b40e14] transition"
                >
                  Activities
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
