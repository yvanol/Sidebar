// src/components/Layout/Navbar.jsx
import React from "react";
import { FaBell } from "react-icons/fa";

const Navbar = ({ selectedMenu }) => {
  return (
    <div className="w-full h-[8ch] px-12 bg-zinc-50 shadow-md flex items-center justify-between">
      <div className="text-xl text-zinc-800 font-medium">{selectedMenu}</div>
      <div className="flex items-center gap-x-8">
        <button className="relative">
          <div className="w-5 h-5 bg-zinc-50 flex items-center justify-center absolute -top-1.5 -right-2.5 rounded-full p-0.5">
            <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-xs">
              3
            </span>
          </div>
          <FaBell className="text-xl" />
        </button>
        <div>
          <h1 className="text-xl">Reine Queen</h1>
          <p className="">Super Admin</p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_640.jpg"
          alt="profile img"
          className="w-11 h-11 rounded-full object-cover object-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;