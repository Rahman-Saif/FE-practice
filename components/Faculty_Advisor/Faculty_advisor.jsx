import Image from "next/image";
import React from "react";

const Faculty_advisor = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-row items-center gap-8 py-12">
      <div className="w-1/2">
        <Image
          src={"/rccc.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="w-1/2 space-y-6">
        <div className="w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Dr. John Doe</h2>
          <div className="space-y-3">
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Position:</span> Associate
              Professor
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Email:</span> john.doe@bup.edu.bd
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Department:</span> ICT
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Office:</span> Room 307, Academic
              Building
            </p>
          </div>

          {/* University Logos */}
          <div className="flex gap-4 pt-4">
            <Image
              src="/buprc.png"
              alt="BUP Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src="/buprc.png"
              alt="Department Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Course Information */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Courses</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Robotics Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty_advisor;
