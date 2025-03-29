import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Banner = () => {
  return (
    <div className={inter.className}>
      <div className="h-[calc(100vh-160px)]  flex flex-col  items-center justify-center  ">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-8">
            Welcome To BUP Robotics Club
          </h1>
          <p className="text-6xl mb-4">Innovate,Create and Build The Future</p>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300 ">
            Get Started
          </button>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
