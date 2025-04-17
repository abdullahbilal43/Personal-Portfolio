import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Requested a custom Property site — they nailed it!. Fast, clean, and exactly how I envisioned it. Truly impressed by the quality and dedication.",
  },
  {
    image: "/t-avt-2.png",
    name: "Georgia Brown",
    position: "Customer",
    message:
      "A perfect blend of professionalism and user-friendly design. The medical site is easy to navigate and builds trust instantly. Ideal for connecting with patients and managing appointments smoothly.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "The Figma designs were clean, organized, and developer-friendly. Every component was thoughtfully structured for smooth handoff. A perfect foundation for building a modern and consistent UI.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
    navigation
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    className="min-h-[400px]" // ✅ allow dynamic height with a min-height fallback
  >
    {testimonialData.map((person, i) => (
      <SwiperSlide key={i}>
        <div className="flex flex-col  items-center md:flex-row gap-x-8 h-full px-4 sm:px-8 md:px-16 py-8">
          {/* avatar, name, position */}
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 mb-6 md:mb-0">
            <div className="flex flex-col justify-center text-center">
              <div className="mb-2 mx-auto">
                <Image
                  src={person.image}
                  width={100}
                  height={100}
                  alt={person.name}
                />
              </div>
              <div className="text-lg">{person.name}</div>
              <div className="text-[12px] uppercase font-extralight tracking-widest">
                {person.position}
              </div>
            </div>
          </div>
  
          {/* quote & message */}
          <div className="flex-1 flex flex-col justify-center relative xl:pl-20">
            <div className="mb-4">
              <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
            </div>
            <div className="xl:text-lg text-center md:text-left px-2 sm:px-0">
              {person.message}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  
  );
};

export default TestimonialSlider;
