import Image from "next/image"

const Nav = () => {
  return (
    <div className="w-9/12 mx-auto ">
      <div className="flex justify-between items-center p-4">
        <div className="rclogo flex flex-row items-center">
          <Image src={"/buprc.png"} width={50} height={50} alt="Logo" />
          <p className="font-bold">BUP Robotics Club</p>
        </div>
        <div className="text-blue-600 ">
          <a href="#home" className="p-4 font-bold">
            Home
          </a>
          <a href="#faculty" className="p-4 font-bold">
            Faculty Advisor
          </a>
          <a href="#team" className="p-4 font-bold">
            Team
          </a>
          <a href="#events" className="p-4 font-bold">
            Events
          </a>
          <a href="#contacts" className="p-4 font-bold">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav
