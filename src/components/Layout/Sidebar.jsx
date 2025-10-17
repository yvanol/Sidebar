// src/components/Layout/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiSolidChevronLeft,
} from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";


const Sidebar = ({ open, setOpen, subMenus, toggleSubMenu, Menus }) => {
  return (
    <div
      className={`${open ? "w-72 p-5" : "w-20 p-4"
        } bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}
    >
      <div
        className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-50 border-2 rounded-md text-xl flex items-center justify-center ${!open && "rotate-180"
          } transition-all ease-in-out duration-300`}
        onClick={() => setOpen(!open)}
      >
        {open ? <BiSolidChevronLeft /> : <BiSolidChevronLeft />}
      </div>

      <div className="flex gap-x-4 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
          alt="logo"
          className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${open && "rotate-[360deg]"
            }`}
        />
        <h1
          className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ${!open && "scale-0"
            }`}
        >
          Admin Dashboard
        </h1>
      </div>

      <ul className="pt-6 space-y-0.5">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50 transition-all ease-in-out duration-300 ${Menu.gap ? "mt-9" : "mt-2"
              }`}
          >
            <div className="flex items-center justify-between gap-x-4">
              <NavLink
                to={Menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "bg-zinc-800/40" : ""
                  }`
                }
              >
                <span className="text-lg">{Menu.icon}</span>
                <span
                  className={`${!open && "hidden"
                    } origin-left ease-in-out duration-300`}
                >
                  {Menu.title}
                </span>
              </NavLink>
              {Menu.subMenu && (
                <span
                  className={`ml-auto cursor-pointer text-sm ${subMenus[Menu.key] ? "rotate-360" : ""
                    } transition-transform ease-in-out duration-300 ${!open ? "hidden" : ""
                    }`}
                  onClick={() => toggleSubMenu(Menu.key)}
                >
                  {subMenus[Menu.key] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </div>

            {Menu.subMenu && subMenus[Menu.key] && (
              <ul className="pl-3 pt-4 text-zinc-300">
                {Menu.subMenu.map((subMenu, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={subMenu.path}
                      className={({ isActive }) =>
                        `text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-zinc-800 rounded-lg block ${isActive ? "bg-zinc-800/40" : ""
                        }`
                      }
                    >
                      <FaChevronRight className="text-xs" />
                      {subMenu.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;