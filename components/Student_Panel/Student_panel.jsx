import Image from "next/image";
import React from "react";

const Student_panel = () => {
  return (
    <div className="w-[90%] mx-auto py-12">
      <div className="grid grid-cols-3 gap-4">
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden
        hover:shadow-xl transition-shadow duration-300
        "
        >
          <Image
            src={"/public/rccc.jpg"}
            alt=""
            width={400}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-gray-900 italic">President</p>
            <p className="text-gray-600 italic">
              "Innovation distinguishes between a leader and a follower."
            </p>
            <a
              href="https://linkedin.com/in/johnsmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" /> */}
            </a>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden
        hover:shadow-xl transition-shadow duration-300
        "
        >
          <Image
            src={"/public/rccc.jpg"}
            alt=""
            width={400}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-gray-900 italic">President</p>
            <p className="text-gray-600 italic">
              "Innovation distinguishes between a leader and a follower."
            </p>
            <a
              href="https://linkedin.com/in/johnsmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" /> */}
            </a>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden
        hover:shadow-xl transition-shadow duration-300
        "
        >
          <Image
            src={"/public/rccc.jpg"}
            alt=""
            width={400}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-gray-900 italic">President</p>
            <p className="text-gray-600 italic">
              "Innovation distinguishes between a leader and a follower."
            </p>
            <a
              href="https://linkedin.com/in/johnsmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_panel;
