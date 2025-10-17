import React, { useState, useEffect } from "react";
import { useLocation, Outlet, useMatch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { MdHeadsetMic, MdSpaceDashboard } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { TiCalendar } from "react-icons/ti";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { FaGears } from "react-icons/fa6";

const pathToTitle: Record<string, string> = {
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

  // Set Sidebar to collapsed by default on small screens
  const [open, setOpen] = useState(window.innerWidth >= 640);
  
  // Update Sidebar state on window resize
  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [subMenus, setSubMenus] = useState({
    inbox: false,
    settings: false,
  });

  const inboxMatch = useMatch({ path: "/inbox/*", end: false });
  const settingsMatch = useMatch({ path: "/settings/*", end: false });

  useEffect(() => {
    setSubMenus({
      inbox: !!inboxMatch,
      settings: !!settingsMatch,
    });
  }, [location.pathname]);

  const toggleSubMenu = (menu: 'inbox' | 'settings') => {
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
    { title: "Support", icon: <MdHeadsetMic />, path: "/support" },
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
    <div className="w-full flex flex-col sm:flex-row">
      <Sidebar
      open={open}
      setOpen={setOpen}
      subMenus={subMenus}
      toggleSubMenu={(key: string) => toggleSubMenu(key as "inbox" | "settings")}
      Menus={Menus}
      />
      <div className="h-screen flex-1 bg-zinc-100 flex flex-col">
      <Navbar selectedMenu={selectedMenu} />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default Layout;