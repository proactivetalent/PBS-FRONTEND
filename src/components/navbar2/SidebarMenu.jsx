"use client";

// Importing required dependencies
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronDown } from "lucide-react"; // Icons for menu toggle indicators
import { gsap } from "gsap"; // GSAP for animations
import { SideBarData } from "./data"; // Sidebar data containing menu structure

// SidebarMenu component: A responsive sidebar with nested menus and animations
// Props:
// - setToggleMenu: Function to update the parent component's toggleMenu state
// - toggleMenu: Boolean to control sidebar visibility
const SidebarMenu = ({ setToggleMenu, toggleMenu }) => {
  // State to manage which main menu is open (null if none)
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // State to manage which nested submenu is open (null if none)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);

  // State to control sidebar visibility for animation purposes
  const [isVisible, setIsVisible] = useState(toggleMenu);

  // Ref for the sidebar container to apply animations
  const sidebarRef = useRef(null);

  // Ref array to store submenu containers for animation
  const submenuRefs = useRef([]);

  // Ref object to store nested submenu containers for animation
  const nestedSubmenuRefs = useRef([]);

  // Function to toggle a main menu (submenu) open or closed
  // Param: index - The index of the main menu item to toggle
  const toggleSubmenu = (index) => {
    // Toggle the submenu: if already open, close it (set to null); otherwise, open it
    const newIndex = openSubmenu === index ? null : index;
    setOpenSubmenu(newIndex);
    setOpenNestedSubmenu(null); // Close any open nested submenus when toggling a main menu

    // // Animate submenu items (slide in/out and fade in/out)
    // const submenuItems = submenuRefs.current[index]?.children;
    // if (submenuItems) {
    //   if (newIndex === index) {
    //     // Opening animation: slide in from left and fade in
    //     gsap.fromTo(
    //       submenuItems,
    //       { x: "-20px", opacity: 0 },
    //       {
    //         x: "0px",
    //         opacity: 1,
    //         duration: 0.3,
    //         stagger: 0.1,
    //         ease: "power2.out",
    //       }
    //     );
    //   } else {
    //     // Closing animation: slide out to left and fade out
    //     gsap.to(submenuItems, {
    //       x: "-20px",
    //       opacity: 0,
    //       duration: 0.3,
    //       stagger: 0.1,
    //       ease: "power2.in",
    //     });
    //   }
    // }
  };

  // Function to toggle a nested submenu (sub-submenu) open or closed
  // Params:
  // - submenuIndex: Index of the parent main menu
  // - nestedIndex: Index of the submenu item to toggle
  const toggleNestedSubmenu = (submenuIndex, nestedIndex) => {
    const key = `${submenuIndex}-${nestedIndex}`; // Unique key for nested submenu
    // Toggle the nested submenu: if already open, close it; otherwise, open it
    const newNestedIndex = openNestedSubmenu === key ? null : key;
    setOpenNestedSubmenu(newNestedIndex);

    // Animate nested submenu items (slide in/out and fade in/out)
    // const nestedSubmenuItems = nestedSubmenuRefs.current[key]?.children;
    // if (nestedSubmenuItems) {
    //   if (newNestedIndex === key) {
    //     // Opening animation: slide in from left and fade in
    //     gsap.fromTo(
    //       nestedSubmenuItems,
    //       { x: "-20px", opacity: 0 },
    //       {
    //         x: "0px",
    //         opacity: 1,
    //         duration: 0.3,
    //         stagger: 0.1,
    //         ease: "power2.out",
    //       }
    //     );
    //   } else {
    //     // Closing animation: slide out to left and fade out
    //     gsap.to(nestedSubmenuItems, {
    //       x: "-20px",
    //       opacity: 0,
    //       duration: 0.3,
    //       stagger: 0.1,
    //       ease: "power2.in",
    //     });
    //   }
    // }
  };

  // Effect to handle sidebar opening animation when toggleMenu changes
  useEffect(() => {
    if (toggleMenu && sidebarRef.current) {
      setIsVisible(true); // Make sidebar visible
      // Animate sidebar opening: slide in from left and fade in
      gsap.fromTo(
        sidebarRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [toggleMenu]);

  // Function to handle sidebar closing animation
  const handleClose = () => {
    if (sidebarRef.current) {
      // Animate sidebar closing: slide out to left and fade out
      gsap.to(sidebarRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false); // Hide sidebar after animation
          setToggleMenu(false); // Notify parent to update toggleMenu state
          setOpenSubmenu(null); // Reset main menu state
          setOpenNestedSubmenu(null); // Reset nested submenu state
        },
      });
    }
  };

  // // Effect to handle clicks outside the sidebar to close it (disabled)
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //       handleClose(); // Trigger the closing animation
  //     }
  //   };
  //   if (toggleMenu) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [toggleMenu]);

  // JSX: Render the sidebar with nested menus
  return (
    // Main sidebar container with fixed positioning and responsive width
    <div
      ref={sidebarRef}
      onMouseLeave={handleClose} // Hide sidebar on mouse leave with smooth animation
      className="fixed top-0 left-0 h-full w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-[#1E2322] z-50 flex flex-col items-center justify-start gap-3 lg:gap-6 pt-10"
      style={{ display: isVisible ? "flex" : "none" }} // Control visibility with state
    >
      {/* Sidebar title */}
      <h2 className="text-[#8AD5B7] text-base md:text-lg xl:text-xl font-semibold font-conthrax">
        {SideBarData.title}
      </h2>

      {/* Menu list container with scrolling */}
      <div className="flex flex-col items-center justify-start w-full h-[90%] overflow-y-auto custom-scrollbar">
        {/* Map through main menu items */}
        {SideBarData.menulist.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center"
          >
            {/* Divider for main menu item */}
            <div className="w-full mx-auto bg-[#8AD5B7] h-1 my-3"></div>
            <div className="flex flex-col w-full">
              {/* Main menu item with toggle functionality */}
              <div
                className="flex items-center justify-between w-full px-2 py-1 hover:bg-[#2E3734] transition-colors duration-200 cursor-pointer"
                onClick={() => item.hasmenu && toggleSubmenu(index)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={`${item.name} Icon`}
                    width={100}
                    height={100}
                    className="w-[24px] h-auto object-contain mr-2"
                  />
                  <span className="text-[#8AD5B7] text-xs md:text-sm xl:text-base font-semibold">
                    {item.name}
                  </span>
                </div>
                {/* Toggle arrow for main menu */}
                {item.hasmenu && (
                  openSubmenu === index ? (
                    <ChevronDown className="text-[#D9D9D9] w-4 h-4 ml-1" />
                  ) : (
                    <ChevronLeft className="text-[#D9D9D9] w-4 h-4 ml-1" />
                  )
                )}
              </div>
              {/* Submenu: Render if main menu is open */}
              {item.hasmenu && openSubmenu === index && (
                <div
                  className="flex flex-col w-full"
                  ref={(el) => (submenuRefs.current[index] = el)}
                >
                  {/* Map through submenu items */}
                  {item.submenu.map((subItem, subIndex) => (
                    <div className="w-full flex flex-col" key={subIndex}>
                      {/* Divider for submenu item */}
                      <div className="w-full mx-auto bg-[#89A096] h-0.5 my-3"></div>
                      {/* Submenu item with toggle functionality for nested submenu */}
                      <div
                        className="flex items-center justify-between w-full px-2 py-1 hover:bg-[#2E3734] transition-colors duration-200 cursor-pointer"
                        onClick={() =>
                          subItem.hasmenu && toggleNestedSubmenu(index, subIndex)
                        }
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={subItem.img}
                            alt={`${subItem.name} Icon`}
                            width={100}
                            height={100}
                            className="w-[20px] h-auto object-contain mr-2"
                          />
                          <span className="text-[#89A096] text-xs md:text-sm font-semibold">
                            {subItem.name}
                          </span>
                        </div>
                        {/* Toggle arrow for nested submenu */}
                        {subItem.hasmenu && (
                          openNestedSubmenu === `${index}-${subIndex}` ? (
                            <ChevronDown className="text-[#D9D9D9] w-4 h-4 ml-1" />
                          ) : (
                            <ChevronLeft className="text-[#D9D9D9] w-4 h-4 ml-1" />
                          )
                        )}
                      </div>
                      {/* Nested Submenu: Render if nested submenu is open */}
                      {subItem.hasmenu &&
                        openNestedSubmenu === `${index}-${subIndex}` && (
                          <div
                            className="flex flex-col w-full pl-4"
                            ref={(el) =>
                              (nestedSubmenuRefs.current[
                                `${index}-${subIndex}`
                              ] = el)
                            }
                          >
                            {/* Map through nested submenu items */}
                            {subItem.submenu.map((nestedItem, nestedIndex) => (
                              <div
                                className="w-full flex flex-col"
                                key={nestedIndex}
                              >
                                {/* Divider for nested submenu item */}
                                <div className="w-full mx-auto bg-[#89A096] h-0.5 my-3"></div>
                                {/* Nested submenu item */}
                                <div className="flex items-center gap-3 px-2 py-1 hover:bg-[#2E3734] transition-colors duration-200">
                                  <Image
                                    src={nestedItem.img}
                                    alt={`${nestedItem.name} Icon`}
                                    width={100}
                                    height={100}
                                    className="w-[16px] h-auto object-contain mr-2"
                                  />
                                  <span className="text-[#89A096] text-xs md:text-sm font-semibold">
                                    {nestedItem.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Bottom divider */}
        <div className="w-full mx-auto bg-[#8AD5B7] h-1 my-6"></div>
      </div>
    </div>
  );
};

export default SidebarMenu;