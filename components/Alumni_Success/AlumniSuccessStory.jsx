import Image from "next/image";
import React from "react";

const AlumniSuccessStory = () => {
  return (
    <div className="w-9/12 mx-auto my-10">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-2">Alumni Success</h1>
        <p className="text-xl mb-4 ">
          Our former members have gone on to achieve great things in the field
          of <br /> robotics and technology
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[300px] h-[300px] text-center bg-[#e5772c] rounded-2xl p-4 shadow-2xl text-white">
          <div className="flex justify-center items-center  ">
            <Image
              src="/robochamp.jpeg"
              alt="robochamp"
              width={64}
              height={64}
              className="rounded-full object-cover mt-3"
            />
          </div>

          <h1 className="mt-2 font-bold">Rahima Khan</h1>
          <p className="mt-2">Robotics Engineer </p>
          <p>
            My journey in robotics began at bup robotics club.The skills and
            experience i gained there were instrumental in landing my dream job
          </p>
          <button className="mt-6 text-xl">LinkedIn</button>
        </div>
        <div className="w-[300px] h-[300px] text-center bg-[#e5772c] rounded-2xl p-4 shadow-2xl text-white">
          <div className="flex justify-center items-center  ">
            <Image
              src="/robochamp.jpeg"
              alt="robochamp"
              width={64}
              height={64}
              className="rounded-full object-cover mt-3"
            />
          </div>

          <h1 className="mt-2 font-bold">Rahima Khan</h1>
          <p className="mt-2">Robotics Engineer </p>
          <p>
            My journey in robotics began at bup robotics club.The skills and
            experience i gained there were instrumental in landing my dream job
          </p>
          <button className="mt-6 text-xl">LinkedIn</button>
        </div>
        <div className="w-[300px] h-[300px] text-center bg-[#e5772c] rounded-2xl p-4 shadow-2xl text-white">
          <div className="flex justify-center items-center  ">
            <Image
              src="/robochamp.jpeg"
              alt="robochamp"
              width={64}
              height={64}
              className="rounded-full object-cover mt-3"
            />
          </div>

          <h1 className="mt-2 font-bold">Rahima Khan</h1>
          <p className="mt-2">Robotics Engineer </p>
          <p>
            My journey in robotics began at bup robotics club.The skills and
            experience i gained there were instrumental in landing my dream job
          </p>
          <button className="mt-6 text-xl">LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccessStory;
