import Image from "next/image";

const Nav = () => {
  return (
    <nav className="w-[90%] ml-10 flex items-center justify-between px-6 py-4   ">
      <div className="flex items-center">
        <Image src={"/buprc.png"} width={100} height={100} alt="logo" />
      </div>
      <div className="flex flex-row gap-8">
        <a
          href="#"
          className="text-[#0c2699] text-lg font-bold hover:text-gray-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#0c2699] text-lg font-bold hover:text-gray-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-[#0c2699] text-lg font-bold hover:text-gray-300"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-[#0c2699] text-lg font-bold hover:text-gray-300"
        >
          Contact
        </a>
      </div>
      <div>
        <button className="text-white px-6 py-2 rounded-md bg-[#0c2699]">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Nav;
