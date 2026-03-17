import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navItems } from "./data";
import { gsap } from "gsap";

const HorizontalMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const CLOSE_DELAY_MS = 300;

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  const handleMouseEnter = (index, hasSubmenu) => {
    clearCloseTimeout();
    setOpenDropdown(index);
    
    if (hasSubmenu && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }, CLOSE_DELAY_MS);
  };

  const handleSubMouseEnter = (subIndex) => {
    setOpenSubDropdown(subIndex);
  };

  const handleSubMouseLeave = () => {
    // Don't close subdropdown immediately
  };

  return (
    <nav className="flex items-center text-[#DCE2E2] h-full">
      <div className="w-full h-full">
        <div className="flex items-center justify-center gap-1 h-full">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(index, !!item.submenu)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name !== "Member Portal" ? (
                <Link
                  href={item.link || "#"}
                  className={`
                    px-5 py-2 h-full flex items-center gap-2
                    text-sm xl:text-base font-medium font-poppins
                    transition-all duration-300 ease-out
                    relative group
                    ${openDropdown === index 
                      ? "text-[#8AD5B7]" 
                      : "text-[#DCE2E2] hover:text-[#8AD5B7]"
                    }
                  `}
                >
                  <span className="relative">
                    {item.name}
                    <span 
                      className={`
                        absolute -bottom-1 left-0 h-0.5 bg-[#8AD5B7]
                        transition-all duration-300 ease-out
                        ${openDropdown === index ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </span>
                  
                  {item.submenu && (
                    <svg
                      className={`
                        h-4 w-4 transition-transform duration-300 ease-out
                        ${openDropdown === index ? "rotate-180" : "rotate-0"}
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
              ) : (
                <a 
                  href={item.link}
                  className="
                    ml-4 px-6 py-2.5 
                    text-sm xl:text-base font-semibold font-poppins
                    rounded-full bg-[#8AD5B7] text-[#37403D]
                    transition-all duration-300 ease-out
                    hover:bg-[#7BC4A6] hover:shadow-lg hover:scale-105
                    active:scale-95
                  "
                >
                  {item.name}
                </a>
              )}

              {/* Dropdown Menu */}
              {item.submenu && openDropdown === index && (
                <div 
                  ref={dropdownRef}
                  className="
                    absolute top-full left-1/2 -translate-x-1/2 mt-1
                    w-64 bg-[#37403D]/100 backdrop-blur-sm
                    rounded-xl shadow-2xl 
                    border border-[#37403D]
                    py-2 z-50
                  "
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <div
                      key={subItem.name}
                      className="relative"
                      onMouseEnter={() => handleSubMouseEnter(subIndex)}
                    >
                      <Link
                        href={subItem.link || "#"}
                        className="
                          flex items-center justify-between
                          px-4 py-2.5 mx-2 rounded-lg
                          text-sm font-medium font-poppins text-[#DCE2E2]
                          transition-all duration-200
                          hover:bg-[#8AD5B7] hover:text-[#37403D]
                          group
                        "
                      >
                        <span>{subItem.name}</span>
                        {subItem.submenu && (
                          <svg
                            className={`
                              h-4 w-4 transition-transform duration-200
                              ${openSubDropdown === subIndex ? "-rotate-90" : "rotate-0"}
                            `}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </Link>

                      {/* Nested Dropdown - Now appears on the right */}
                      {subItem.submenu && openSubDropdown === subIndex && (
                        <div className="
                          absolute left-full top-0 ml-1
                          w-56 bg-[#37403D]/100 backdrop-blur-sm
                          rounded-xl shadow-2xl 
                          border border-[#37403D]
                          py-2 z-50
                        ">
                          {subItem.submenu.map((nestedItem) => (
                            <Link
                              key={nestedItem.name}
                              href={nestedItem.link || "#"}
                              className="
                                block px-4 py-2.5 mx-2 rounded-lg
                                text-sm font-medium font-poppins text-[#DCE2E2]
                                transition-all duration-200
                                hover:bg-[#8AD5B7] hover:text-[#37403D]
                              "
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
    </nav>
  );
};

export default HorizontalMenu;