import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="w-9/12 mx-auto mt-10 ">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Recent Achievements</h1>
        <p className="text-xl mt-4">
          Our Club members are making waves int he robotics community <br />
          with their innovative projects and competition wins
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-8">
        <div className="w-[300px] rounded-lg p-3 bg-[#e5772c] shadow-2xl">
          <h1 className="text-2xl font-bold ">
            National Robotics Championship
          </h1>
          <p className="mb-3">1st Place-Autonomous Robot Category</p>
          <Image
            src={"/robochamp.jpeg"}
            height={250}
            width={250}
            alt="prize"
            className="rounded-xl ml-3"
          />
          <p className="mt-3">
            Our team designed and built an autonomous robot that navigated
            complex terrains and completed tasks with precision
          </p>
          <p className="bg-white w-14 rounded-md flex justify-center items-center mt-3">
            2023
          </p>
        </div>
        <div className="w-[300px] rounded-lg p-3 bg-[#e5772c]">
          <h1 className="text-2xl font-bold ">
            National Robotics Championship
          </h1>
          <p className="mb-3">1st Place-Autonomous Robot Category</p>
          <Image
            src={"/robochamp.jpeg"}
            height={250}
            width={250}
            alt="prize"
            className="rounded-xl ml-3"
          />
          <p className="mt-3">
            Our team designed and built an autonomous robot that navigated
            complex terrains and completed tasks with precision
          </p>
          <p className="bg-white w-14 rounded-md flex justify-center items-center mt-3">
            2023
          </p>
        </div>
        <div className="w-[300px] rounded-lg p-3 bg-[#e5772c]">
          <h1 className="text-2xl font-bold ">
            National Robotics Championship
          </h1>
          <p className="mb-3">1st Place-Autonomous Robot Category</p>
          <Image
            src={"/robochamp.jpeg"}
            height={250}
            width={250}
            alt="prize"
            className="rounded-xl ml-3"
          />
          <p className="mt-3">
            Our team designed and built an autonomous robot that navigated
            complex terrains and completed tasks with precision
          </p>
          <p className="bg-white w-14 rounded-md flex justify-center items-center mt-3">
            2023
          </p>
        </div>
        <div className="w-[300px] rounded-lg p-3 bg-[#e5772c]">
          <h1 className="text-2xl font-bold ">
            National Robotics Championship
          </h1>
          <p className="mb-3">1st Place-Autonomous Robot Category</p>
          <Image
            src={"/robochamp.jpeg"}
            height={250}
            width={250}
            alt="prize"
            className="rounded-xl ml-3"
          />
          <p className="mt-3">
            Our team designed and built an autonomous robot that navigated
            complex terrains and completed tasks with precision
          </p>
          <p className="bg-white w-14 rounded-md flex justify-center items-center mt-3">
            2023
          </p>
        </div>
        <div className="w-[300px] rounded-lg p-3 bg-[#e5772c]">
          <h1 className="text-2xl font-bold ">
            National Robotics Championship
          </h1>
          <p className="mb-3">1st Place-Autonomous Robot Category</p>
          <Image
            src={"/robochamp.jpeg"}
            height={250}
            width={250}
            alt="prize"
            className="rounded-xl ml-3"
          />
          <p className="mt-3">
            Our team designed and built an autonomous robot that navigated
            complex terrains and completed tasks with precision
          </p>
          <p className="bg-white w-14 rounded-md flex justify-center items-center mt-3">
            2023
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <button type="button" className=" border-2 p-2 mt-5   ">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Achievements;
