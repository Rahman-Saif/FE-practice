import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="w-9/12 mx-auto my-10">
      <div className="text-center">
        <h1 className="font-bold mt-10 text-4xl">Upcoming Events</h1>
        <p className="text-xl mt-4">
          Join us for these exciting events and workshops to enhance your
          robotics <br /> skills and knowledge
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="w-[500px] h-[230px] bg-[#123b77] p-4 text-white rounded-2xl text-center">
          <h1 className="font-bold text-2xl mb-2 text-center">
            Robotics Workshop Series
          </h1>
          <p className="mb-1">
            Learn the fundamentals of robotics and programming
          </p>
          <p className="mb-1">May 15-20,2025</p>
          <p>
            A comprehensive workshop series covering robot design,sensor
            integration, programming and practical application
          </p>
          <div className="flex justify-center items-center mt-4 ">
            <button className="border-white border-2 p-1 rounded-md">
              Register Now
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[230px] bg-[#123b77] p-4 text-white rounded-2xl text-center">
          <h1 className="font-bold text-2xl mb-2">Robotics Workshop Series</h1>
          <p className="mb-1">
            Learn the fundamentals of robotics and programming
          </p>
          <p className="mb-1">May 15-20,2025</p>
          <p>
            A comprehensive workshop series covering robot design,sensor
            integration, programming and practical application
          </p>
          <div className="flex justify-center items-center mt-4 ">
            <button className="border-white border-2 p-1 rounded-md">
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="bg-[#123b77] text-white p-2 rounded-md">View All Events</button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
