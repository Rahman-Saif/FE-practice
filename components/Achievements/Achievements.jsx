"use client";

import Image from "next/image";
import React, { createContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Achievements = () => {
  const carouselItems = [
    {
      title: "Strategy Development",
      image: "/path/to/strategy-image.jpg",
      description: "Creating powerful online strategies",
    },
    {
      title: "Visual Identity Design",
      image: "/path/to/visual-identity-image.jpg",
      description: "Crafting unique brand visuals",
    },
    {
      title: "Social Media Branding",
      image: "/path/to/social-media-image.jpg",
      description: "Elevating your social media presence",
    },
    {
      title: "Rebranding Services",
      image: "/path/to/rebranding-image.jpg",
      description: "Refreshing your brand identity",
    },
  ];

  return (
    
    <div className="relative w-full py-12  backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="w-full"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFFFFF] to-[#0052D4] rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative p-1 bg-black/30 rounded-xl overflow-hidden">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
