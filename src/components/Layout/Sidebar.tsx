import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

// Define types for Menu and SubMenu
interface SubMenu {
  title: string;
  path: string;
}

interface Menu {
  title: string;
  icon: React.ReactNode;
  path: string;
  gap?: boolean;
  subMenu?: SubMenu[];
  key?: string;
}

// Define props interface
interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  subMenus: { [key: string]: boolean };
  toggleSubMenu: (key: string) => void;
  Menus: Menu[];
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, subMenus, toggleSubMenu, Menus }) => {
  return (
    <div
      className={`${
        open ? "w-64 sm:w-72 p-3 sm:p-5" : "w-16 sm:w-20 p-2 sm:p-4"
      } bg-zinc-900 h-screen pt-6 sm:pt-8 relative duration-300 ease-in-out`}
    >
      <div
        className={`absolute cursor-pointer -right-3 sm:-right-4 top-9 w-7 sm:w-8 h-7 sm:h-8 p-0.5 bg-zinc-50 border-zinc-50 border-2 rounded-md text-lg sm:text-xl flex items-center justify-center ${
          !open && "rotate-180"
        } transition-all ease-in-out duration-300`}
        onClick={() => setOpen(!open)}
      >
        <BiSolidChevronLeft />
      </div>

      <div className="flex gap-x-3 sm:gap-x-4 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
          alt="logo"
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-300 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-zinc-50 origin-left font-semibold text-lg sm:text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Admin Dashboard
        </h1>
      </div>

      <ul className="pt-4 sm:pt-6 space-y-0.5">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex flex-col rounded-md py-2 sm:py-3 px-3 sm:px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50 transition-all ease-in-out duration-300 ${
              Menu.gap ? "mt-7 sm:mt-9" : "mt-1 sm:mt-2"
            }`}
          >
            <div className="flex items-center justify-between gap-x-3 sm:gap-x-4">
              <NavLink
                to={Menu.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center gap-2 ${isActive ? "bg-zinc-800/40" : ""}`
                }
              >
                <span className="text-base sm:text-lg">{Menu.icon}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left ease-in-out duration-300 text-sm sm:text-base`}
                >
                  {Menu.title}
                </span>
              </NavLink>
              {Menu.subMenu && (
                <span
                  className={`ml-auto cursor-pointer text-xs sm:text-sm ${
                    subMenus[Menu.key!] ? "rotate-360" : ""
                  } transition-transform ease-in-out duration-300 ${
                    !open ? "hidden" : ""
                  }`}
                  onClick={() => toggleSubMenu(Menu.key!)}
                >
                  {subMenus[Menu.key!] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </div>

            {Menu.subMenu && subMenus[Menu.key!] && (
              <ul className="pl-2 sm:pl-3 pt-3 sm:pt-4 text-zinc-300">
                {Menu.subMenu.map((subMenu, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={subMenu.path}
                      className={({ isActive }: { isActive: boolean }) =>
                        `text-xs sm:text-sm flex items-center gap-x-1 sm:gap-x-2 py-2 sm:py-3 px-2 hover:bg-zinc-800 rounded-lg block ${
                          isActive ? "bg-zinc-800/40" : ""
                        }`
                      }
                    >
                      <FaChevronRight className="text-[10px] sm:text-xs" />
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