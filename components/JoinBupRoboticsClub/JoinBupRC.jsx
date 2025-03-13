import Image from 'next/image'
import React from 'react'

const JoinBupRC = () => {
  return (
   <div className="w-9/12 mx-auto mt-10">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">BUP Robotics Club</h1>
            <p className="text-xl mb-4">
              Innovate,Create,Automate.Join un in exploring the exciting <br />{" "}
              world of robotics and Technology
            </p>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-[#123b77] p-3 rounded-md text-white ">
                Upcoming Events
              </button>
              <button type="button" className="bg-[#123b77] p-3 rounded-md text-white " >
                Meet Our Team
              </button>
            </div>
          </div>
          <div>
            <Image
              src={"/rccc.jpg"}
              height={500}
              width={500}
              alt="banner"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
  )
}

export default JoinBupRC
