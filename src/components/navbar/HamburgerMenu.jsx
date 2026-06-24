import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { AlignJustify, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HamburgerMenu = ({ navItems }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const triggerRefs = useRef({});
  const router = useRouter();

  const closeDropdowns = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const closeAll = () => {
    setIsHamburgerOpen(false);
    closeDropdowns();
  };

  const handleHamburgerClick = () => {
    if (isHamburgerOpen) {
      closeDropdowns();
    }
    setIsHamburgerOpen((prev) => !prev);
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

  const navigateTo = (link, name) => {
    closeAll();
    if (name === "Member Login" || name === "Member Portal") {
      window.location.href = link;
    } else {
      router.push(link);
    }
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isHamburgerOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    }
  }, [isHamburgerOpen]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (openSubMenu !== null) {
          setOpenSubMenu(null);
        } else if (openMenu !== null) {
          setOpenMenu(null);
        } else if (isHamburgerOpen) {
          setIsHamburgerOpen(false);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;

      if (openSubMenu !== null) {
        const subKey = openSubMenu;
        setOpenSubMenu(null);
        const parentName = subKey.split("::")[0];
        triggerRefs.current[parentName]?.focus();
        return;
      }

      if (openMenu !== null) {
        const menuToFocus = openMenu;
        setOpenMenu(null);
        triggerRefs.current[menuToFocus]?.focus();
        return;
      }

      if (isHamburgerOpen) {
        setIsHamburgerOpen(false);
        hamburgerButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu, openSubMenu, isHamburgerOpen]);

  return (
    <div ref={menuRef} className="relative h-full">
      <button
        ref={hamburgerButtonRef}
        type="button"
        className="px-3 py-2 text-sm font-medium relative flex items-center h-full text-[#DCE2E2] hover:bg-[#37403D] hover:text-[#8AD5B7]"
        onClick={handleHamburgerClick}
        aria-label={isHamburgerOpen ? "Close menu" : "Open menu"}
        aria-expanded={isHamburgerOpen}
      >
        {isHamburgerOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
      </button>

      {isHamburgerOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-[60px] xl:top-[100px] right-0 w-full bg-[#37403D] text-[#DCE2E2] flex flex-col items-start p-6 z-50"
        >
          {navItems.map((item) => {
            const isOpen = openMenu === item.name;
            const hasSubmenu = !!item.submenu;

            if (item.name === "Member Portal") {
              return (
                <div key={item.name} className="w-full py-2">
                  <a
                    href={item.link}
                    className="block px-4 py-2 text-sm font-medium text-[#DCE2E2] hover:text-[#8AD5B7]"
                    onClick={closeAll}
                  >
                    {item.name}
                  </a>
                </div>
              );
            }

            if (!hasSubmenu) {
              return (
                <div key={item.name} className="w-full py-2">
                  <Link
                    href={item.link}
                    className="block px-4 py-2 text-sm font-medium text-[#DCE2E2] hover:text-[#8AD5B7]"
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.name} className="w-full py-2">
                <button
                  type="button"
                  ref={(el) => {
                    triggerRefs.current[item.name] = el;
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2 text-sm font-medium
                    ${isOpen ? "bg-[#37403D] text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                  onClick={() => toggleMenu(item.name)}
                  onKeyDown={(e) => handleTriggerKeyDown(e, item.name)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.name}
                  <svg
                    className={`h-4 w-4 ${isOpen ? "text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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

                {isOpen && (
                  <div className="pl-4 w-full space-y-2 mt-2">
                    {item.submenu.map((subItem) => {
                      const subKey = `${item.name}::${subItem.name}`;
                      const isSubOpen = openSubMenu === subKey;

                      return (
                        <div key={subItem.name} className="relative">
                          {subItem.submenu ? (
                            <button
                              type="button"
                              className={`w-full flex items-center justify-between px-4 py-2 text-sm
                                ${isSubOpen ? "bg-gray-100 text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                              onClick={() => toggleSubMenu(subKey)}
                              onKeyDown={(e) => handleSubTriggerKeyDown(e, subKey)}
                              aria-expanded={isSubOpen}
                              aria-haspopup="true"
                            >
                              {subItem.name}
                              <svg
                                className={`h-4 w-4 ${isSubOpen ? "text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transform: isSubOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
                              href={subItem.link}
                              className="block px-4 py-2 text-sm text-[#DCE2E2] hover:bg-gray-100 hover:text-[#1E232261]"
                              onClick={() => navigateTo(subItem.link, subItem.name)}
                            >
                              {subItem.name}
                            </Link>
                          )}

                          {subItem.submenu && isSubOpen && (
                            <div className="pl-4 w-full space-y-2 mt-2">
                              {subItem.submenu.map((nestedItem) => (
                                <Link
                                  key={nestedItem.name}
                                  href={nestedItem.link}
                                  className="block px-4 py-2 text-sm text-[#DCE2E2] hover:bg-gray-100 hover:text-[#1E232261]"
                                  onClick={() => navigateTo(nestedItem.link, nestedItem.name)}
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
      )}
    </div>
  );
};

export default HamburgerMenu;
