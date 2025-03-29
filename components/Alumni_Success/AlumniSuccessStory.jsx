import Image from "next/image";
import React from "react";

const AlumniSuccessStory = () => {
  return (
    <div className="mx-auto w-[90%] flex flex-row gap-4">
      <div
        className="w-1/2 p-10 rounded-lg transition-all duration-[2000ms] ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        hover:bg-gradient-to-r hover:from-indigo-300/30 hover:via-purple-300/30 hover:to-pink-300/30 hover:backdrop-blur-sm"
      >
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src="/rccc.jpg"
            alt=""
            className="object-cover h-[350px] w-full"
          />
        </div>
      </div>
      <div
        className="w-1/2 p-10 rounded-lg transition-all duration-[2000ms] ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        hover:bg-gradient-to-r hover:from-indigo-300/30 hover:via-purple-300/30 hover:to-pink-300/30 hover:backdrop-blur-sm"
      >
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src="/rccc.jpg"
            alt=""
            className="object-cover h-[350px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccessStory;
