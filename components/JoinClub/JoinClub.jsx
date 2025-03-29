import Image from "next/image";
import React from "react";

const JoinClub = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-row items-center gap-4 py-12">
      <div className="w-1/2">
        <Image
          src={"/rccc.jpg"}
          alt=""
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="w-1/2 space-y-6 ">
        <h2 className="text-4xl font-bold text-gray-800">
          Join BUP Robotics Club
        </h2>
        <p className="text-lg ">
          Embark on an exiciting journey into the world of robotics.
          Learn,innovate, and create alongside passionate peers and experienced
          mentors .
        </p>
        <button
          className="bg-indigo-600 text-white px-8 py-3 
        rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out text-lg
        "
        >
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default JoinClub;
