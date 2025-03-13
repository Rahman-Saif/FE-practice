import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-20 bg-black text-white p-8 ">
        <div className="col-span-1">
          <div className="flex flex-row gap-2 mt-4">
            <Image src="/buprc.png" width={30} height={30} />
            <h1 className="text-2xl font-bold ">BUP Robotics Club</h1>
          </div>
          <p className="mt-4">
            Innovate,Create,Automate.Join us in exploring the exciting world of
            robotics and technology
          </p>
          <div className="flex flex-row items-center gap-3 ">
            <p> Icon</p>
            <p> Icon</p>
            <p> Icon</p>
            <p> Icon</p>
          </div>
        </div>
        <div className="col-span-1 mt-4 ml-32">
          <h1 className='text-xl font-bold mb-2'>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Projects</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-span-1 mt-4">
          <h1 className='text-xl font-bold mb-2'>Contact Information</h1>
          <p>Mirpur Cantonment,Dhaka-1216,Bangladesh</p>
          <p>01987654</p>
          <p>robotics@bup.edu.bd</p>
        </div>
        <div className="col-span-1 mt-4">
          <h1 className='text-xl font-bold mb-2'>Subscribe to Our Newsletter</h1>
          <p>Stay updated with our latest news,events and achievements</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer
