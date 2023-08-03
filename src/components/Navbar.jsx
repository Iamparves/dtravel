import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white/5 backdrop-blur-md md:bg-transparent md:backdrop-blur-0">
      <div className="container flex  items-center justify-between py-3 md:py-5">
        <a href="#">
          <img className="h-6 md:h-auto" src={Logo} alt="DTravel" />
        </a>
        <ul
          className={`absolute left-0 top-full -z-10 flex w-full flex-col gap-0 divide-y divide-slate-200 bg-white p-4 text-sm font-medium text-[#777F96] transition-all duration-300 md:visible md:static md:z-auto md:w-auto md:translate-y-0 md:flex-row md:gap-6 md:divide-y-0 md:bg-transparent md:p-0 md:text-white/90 md:opacity-100 md:transition-none ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-full opacity-0"
          }`}
        >
          <li className="py-3 md:py-0">
            <a href="#">find a trip</a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#">destinations</a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#">why dtravel</a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#">contact</a>
          </li>
        </ul>
        <div className="flex gap-3">
          <a
            href="#"
            className="rounded-md border border-[#777F96] px-3 py-3 font-inter text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#777F96] md:px-5 md:py-4"
          >
            Create Account
          </a>
          <button
            className="text-3xl text-white md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {!isOpen ? <FiMenu /> : <MdClose />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
