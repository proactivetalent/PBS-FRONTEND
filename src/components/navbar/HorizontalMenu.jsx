import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navItems } from "./data";
import { gsap } from "gsap";

const HorizontalMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const triggerRefs = useRef({});

  const closeMenus = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (subKey) => {
    setOpenSubMenu((prev) => (prev === subKey ? null : subKey));
  };

  const handleTriggerKeyDown = (e, menuName) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu(menuName);
    }
  };

  const handleSubTriggerKeyDown = (e, subKey) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSubMenu(subKey);
    }
  };

  useEffect(() => {
    if (openMenu !== null && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [openMenu]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenus();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && openMenu !== null) {
        const menuToFocus = openMenu;
        closeMenus();
        triggerRefs.current[menuToFocus]?.focus();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  return (
    <nav ref={navRef} className="flex items-center text-[#DCE2E2] h-full">
      <div className="w-full h-full">
        <div className="flex items-center justify-center gap-1 h-full">
          {navItems.map((item) => {
            const isOpen = openMenu === item.name;
            const hasSubmenu = !!item.submenu;

            return (
              <div
                key={item.name}
                className="relative h-full flex items-center"
              >
                {item.name === "Member Portal" ? (
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
                ) : hasSubmenu ? (
                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[item.name] = el;
                    }}
                    onClick={() => toggleMenu(item.name)}
                    onKeyDown={(e) => handleTriggerKeyDown(e, item.name)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`
                      px-5 py-2 h-full flex items-center gap-2
                      text-sm xl:text-base font-medium font-poppins
                      transition-all duration-300 ease-out
                      relative group
                      ${isOpen ? "text-[#8AD5B7]" : "text-[#DCE2E2] hover:text-[#8AD5B7]"}
                    `}
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        className={`
                          absolute -bottom-1 left-0 h-0.5 bg-[#8AD5B7]
                          transition-all duration-300 ease-out
                          ${isOpen ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </span>

                    <svg
                      className={`
                        h-4 w-4 transition-transform duration-300 ease-out
                        ${isOpen ? "rotate-180" : "rotate-0"}
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="
                      px-5 py-2 h-full flex items-center gap-2
                      text-sm xl:text-base font-medium font-poppins
                      transition-all duration-300 ease-out
                      relative group text-[#DCE2E2] hover:text-[#8AD5B7]
                    "
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        className="
                          absolute -bottom-1 left-0 h-0.5 bg-[#8AD5B7]
                          transition-all duration-300 ease-out
                          w-0 group-hover:w-full
                        "
                      />
                    </span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasSubmenu && isOpen && (
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
                    {item.submenu.map((subItem) => {
                      const subKey = `${item.name}::${subItem.name}`;
                      const isSubOpen = openSubMenu === subKey;

                      return (
                        <div key={subItem.name} className="relative">
                          {subItem.submenu ? (
                            <button
                              type="button"
                              onClick={() => toggleSubMenu(subKey)}
                              onKeyDown={(e) => handleSubTriggerKeyDown(e, subKey)}
                              aria-expanded={isSubOpen}
                              aria-haspopup="true"
                              className="
                                w-full flex items-center justify-between
                                px-4 py-2.5 mx-2 rounded-lg
                                text-sm font-medium font-poppins text-[#DCE2E2]
                                transition-all duration-200
                                hover:bg-[#8AD5B7] hover:text-[#37403D]
                              "
                            >
                              <span>{subItem.name}</span>
                              <svg
                                className={`
                                  h-4 w-4 transition-transform duration-200
                                  ${isSubOpen ? "-rotate-90" : "rotate-0"}
                                `}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          ) : (
                            <Link
                              href={subItem.link || "#"}
                              onClick={closeMenus}
                              className="
                                flex items-center justify-between
                                px-4 py-2.5 mx-2 rounded-lg
                                text-sm font-medium font-poppins text-[#DCE2E2]
                                transition-all duration-200
                                hover:bg-[#8AD5B7] hover:text-[#37403D]
                              "
                            >
                              <span>{subItem.name}</span>
                            </Link>
                          )}

                          {/* Nested Dropdown */}
                          {subItem.submenu && isSubOpen && (
                            <div
                              className="
                                absolute left-full top-0 ml-1
                                w-56 bg-[#37403D]/100 backdrop-blur-sm
                                rounded-xl shadow-2xl 
                                border border-[#37403D]
                                py-2 z-50
                              "
                            >
                              {subItem.submenu.map((nestedItem) => (
                                <Link
                                  key={nestedItem.name}
                                  href={nestedItem.link || "#"}
                                  onClick={closeMenus}
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
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default HorizontalMenu;
