import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import first from "../../assets/japan.jpg";
import second from "../../assets/slider-2.jpg";
import third from "../../assets/man-aboard.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      image: first,
      title: "Welcome to Japan Training Center",
      desc: "Master Japanese language with expert instructors and prepare yourself for study, work, and cultural exchange opportunities in Japan.",
      button: "Join Language Classes",
    },
    {
      image: second,
      title: "Study and Work in Japan",
      desc: "We provide complete guidance for admission, student visa processing, and career opportunities in Japan’s top institutions and industries.",
      button: "Apply for Admission",
    },
    {
      image: third,
      title: "Your Gateway to Japan",
      desc: "From JLPT exam preparation to visa consultation, we support your journey step by step to achieve your dream of living in Japan.",
      button: "Start Visa Process",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[90vh] w-full bg-center bg-cover flex items-center justify-center md:justify-start"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 max-w-2xl px-6 md:px-16 text-white text-center md:text-left">
                <h2 className="text-3xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-4 text-base md:text-lg">{slide.desc}</p>
                <button className="px-6 py-3 mt-6 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
