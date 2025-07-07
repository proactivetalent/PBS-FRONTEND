import React, { useState, useRef } from "react";
import Link from "next/link";
import { navItems } from "./data";
import { gsap } from "gsap";

const HorizontalMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const lineRefs = useRef([]);
  const arrowRefs = useRef([]);

  const handleMouseEnter = (index, hasSubmenu) => {
    setOpenDropdown(index);
    const line = lineRefs.current[index];
    if (line) {
      gsap.to(line, {
        width: "100%",
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
        transformOrigin: "left",
      });
    }
  };

  const handleMouseLeave = () => {
    if (openDropdown !== null) {
      const line = lineRefs.current[openDropdown];
      if (line) {
        gsap.to(line, {
          width: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          transformOrigin: "right",
        });
      }
    }
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    setOpenSubDropdown(subIndex);
    const arrow = arrowRefs.current[subIndex];
    if (arrow) {
      gsap.to(arrow, { rotation: 180, duration: 0.3, ease: "power2.inOut" });
    }
  };

  const handleSubMouseLeave = () => {
    if (openSubDropdown !== null) {
      const arrow = arrowRefs.current[openSubDropdown];
      if (arrow) {
        gsap.to(arrow, { rotation: 0, duration: 0.3, ease: "power2.inOut" });
      }
    }
    setOpenSubDropdown(null);
  };

  return (
    <nav className="inline-flex items-center text-[#DCE2E2] h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center justify-evenly h-full">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group h-full"
                onMouseEnter={() => handleMouseEnter(index, !!item.submenu)}
                onMouseLeave={handleMouseLeave}
              >
                {item.name !== "Member Login" && <Link
                  href={item.link || "#"}
                  className={`px-3 py-2 text-base xl:text-lg 2xl:text-xl font-medium relative transition-all duration-300 ease-in-out flex items-center h-full ${
                    item.submenu
                      ? openDropdown === index
                        ? "bg-[#37403D] text-[#8AD5B7]"
                        : "text-[#DCE2E2] hover:bg-[#37403D] hover:text-[#8AD5B7]"
                      : "text-[#DCE2E2] hover:text-[#8AD5B7]"
                  }`}
                >
                  {item.name}
                  <span
                    ref={(el) => (lineRefs.current[index] = el)}
                    className={`absolute ${
                      item.submenu ? "top-0" : "bottom-1"
                    } left-0 h-1 bg-[#8AD5B7] ${
                      openDropdown === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ width: 0 }}
                  />
                </Link>
}

                {item.name == "Member Login" && <a href={item.link}  className={`px-3 py-2 text-base xl:text-lg 2xl:text-xl font-medium relative transition-all duration-300 ease-in-out flex items-center h-full text-[#DCE2E2] hover:text-[#8AD5B7]`}>
                   {item.name}
                    <span
                    ref={(el) => (lineRefs.current[index] = el)}
                    className={`absolute ${
                      item.submenu ? "top-0" : "bottom-1"
                    } left-0 h-1 bg-[#8AD5B7] ${
                      openDropdown === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ width: 0 }}
                  /> 
                </a>}

                {item.submenu && openDropdown === index && (
                  <div className="absolute -left-[15vw] w-[40vw] bg-[#37403D] rounded-md shadow-lg z-10 p-3">
                    {item.submenu.map((subItem, subIndex) => (
                      <div
                        key={subItem.name}
                        className="relative"
                        onMouseEnter={() => handleSubMouseEnter(subIndex)}
                        onMouseLeave={handleSubMouseLeave}
                      >
                        <Link
                          href={subItem.link || "#"}
                          className="flex items-center gap-2 justify-between px-4 py-2 text-sm text-[#DCE2E2] hover:bg-gray-100 hover:text-[#8AD5B7]"
                        >
                          {subItem.name}
                          {subItem.submenu && (
                            <svg
                              ref={(el) => (arrowRefs.current[subIndex] = el)}
                              className="h-4 w-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </Link>
                        {subItem.submenu && openSubDropdown === subIndex && (
                          <div className="mt-0 pl-4 w-full shadow-lg z-10">
                            {subItem.submenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.name}
                                href={nestedItem.link || "#"}
                                className="block px-4 py-2 text-sm text-[#DCE2E2] hover:text-[#1E232261] hover:bg-gray-100"
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalMenu;