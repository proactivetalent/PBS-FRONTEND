"use client";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Sidebar = () => {
  const iconList = [
    "/pics/alert-sidebar/sidebar/alert-sidebar-1.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-2.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-3.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-4.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-5.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-6.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-7.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-8.png",
    "/pics/alert-sidebar/sidebar/alert-sidebar-9.png",
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-screen w-[10vw] lg:w-[5vw] bg-[#1E2322] z-50 flex flex-col items-center justify-around gap-10">
      {/* Burger Icon */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="text-[#D9D9D9] p-2 flex-shrink-0 h-[60px] lg:h-[100px] flex items-center"
      >
        <Menu className="lg:w-8 w-6 h-6 lg:h-8" />
      </button>

      {/* Icon List */}
        <SidebarMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
     
        <div className="flex flex-col items-center justify-start gap-6 xl:gap-5 w-full h-full" onMouseOver={() => setToggleMenu(true)}>
          {iconList.map((icon, index) => (
            <Image
              src={icon}
              alt={`Icon ${index + 1}`}
              width={100}
              height={100}
              className="mx-auto object-contain w-1/3 h-auto"
              key={index}
            />
          ))}
        </div>
      
    </div>
  );
};

export default Sidebar;
