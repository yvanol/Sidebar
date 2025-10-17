// src/components/Layout/index.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Outlet, useMatch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { MdHeadsetMic, MdSpaceDashboard } from "react-icons/md"; // Updated icon
import { BiChat } from "react-icons/bi";
import { TiCalendar } from "react-icons/ti";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { FaGears } from "react-icons/fa6";

const pathToTitle = {
  "/dashboard": "Dashboard",
  "/inbox": "Inbox",
  "/inbox/requested": "Requested Messages",
  "/inbox/unread": "Unread Messages",
  "/inbox/all": "All Messages",
  "/calendar": "Calendar",
  "/tables": "Tables",
  "/analytics": "Analytics",
  "/support": "Support",
  "/settings": "Settings",
  "/settings/general": "General",
  "/settings/security": "Security",
  "/settings/notifications": "Notifications",
};

const Layout = () => {
  const location = useLocation();
  const selectedMenu = pathToTitle[location.pathname] || "Dashboard";

  const [open, setOpen] = useState(true);
  const [subMenus, setSubMenus] = useState({
    inbox: false,
    settings: false,
  });

  // ✅ Safe hook usage
  const inboxMatch = useMatch({ path: "/inbox/*", end: false });
  const settingsMatch = useMatch({ path: "/settings/*", end: false });

  useEffect(() => {
    setSubMenus({
      inbox: !!inboxMatch,
      settings: !!settingsMatch,
    });
  }, [location.pathname]);

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const Menus = [
    { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/dashboard" },
    {
      title: "Inbox",
      icon: <BiChat />,
      gap: true,
      subMenu: [
        { title: "Requested Messages", path: "/inbox/requested" },
        { title: "Unread Messages", path: "/inbox/unread" },
        { title: "All Messages", path: "/inbox/all" },
      ],
      key: "inbox",
      path: "/inbox",
    },
    { title: "Calendar", icon: <TiCalendar />, path: "/calendar" },
    { title: "Tables", icon: <FiTable />, path: "/tables" },
    { title: "Analytics", icon: <GoGraph />, path: "/analytics" },
    { title: "Support", icon: <MdHeadsetMic />, path: "/support" }, // Updated icon
    {
      title: "Setting",
      icon: <FaGears />,
      subMenu: [
        { title: "General", path: "/settings/general" },
        { title: "Security", path: "/settings/security" },
        { title: "Notifications", path: "/settings/notifications" },
      ],
      key: "settings",
      path: "/settings",
    },
  ];

  return (
    <div className="w-full flex">
      <Sidebar
        open={open}
        setOpen={setOpen}
        subMenus={subMenus}
        toggleSubMenu={toggleSubMenu}
        Menus={Menus}
      />
      <div className="h-screen flex-1 bg-zinc-100 flex flex-col">
        <Navbar selectedMenu={selectedMenu} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
