import React from "react";
import { FaBell } from "react-icons/fa";

// Define props interface
interface NavbarProps {
  selectedMenu: string;
}

const Navbar: React.FC<NavbarProps> = ({ selectedMenu }) => {
  return (
    <div className="w-full h-[8ch] px-4 sm:px-12 bg-zinc-50 shadow-md flex items-center justify-between">
      <div className="text-lg sm:text-xl text-zinc-800 font-medium">{selectedMenu}</div>
      <div className="flex items-center gap-x-4 sm:gap-x-8">
        <button className="relative">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-zinc-50 flex items-center justify-center absolute -top-1 -right-2 sm:-top-1.5 sm:-right-2.5 rounded-full p-0.5">
            <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-[10px] sm:text-xs">
              3
            </span>
          </div>
          <FaBell className="text-lg sm:text-xl" />
        </button>
        <div className="hidden sm:block">
          <h1 className="text-lg sm:text-xl">Reine Queen</h1>
          <p className="text-sm">Super Admin</p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_640.jpg"
          alt="profile img"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover object-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;