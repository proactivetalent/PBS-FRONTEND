import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { AlignJustify, X } from "lucide-react";
import { useRouter } from "next/navigation";

const HamburgerMenu = ({ navItems }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const mobileMenuRef = useRef(null);
  const router = useRouter();

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  // const handleHamburgerClick = () => {
    //   setIsHamburgerOpen(!isHamburgerOpen);
    // };
  
    // const handleMobileItemClick = (item, index) => {
    //   if (item.submenu) {
    //     setOpenDropdown(openDropdown === index ? null : index);
    //   } else {
    //     setIsHamburgerOpen(false);
    //     setOpenDropdown(null);
    //     setOpenSubDropdown(null);
    //     window.location.href = item.link;
    //   }
    // };
  
    // // Animate mobile menu and hamburger bars when isHamburgerOpen changes
    // useEffect(() => {
    //   // Initialize refs for burger bars
    //   if (burgerBarRefs.current.length === 0) {
    //     burgerBarRefs.current = Array(3).fill().map(() => null);
    //   }
  
    //   if (mobileMenuRef.current && burgerBarRefs.current.every(ref => ref)) {
    //     if (isHamburgerOpen) {
    //       gsap.to(mobileMenuRef.current, {
    //         x: 0,
    //         opacity: 1,
    //         duration: 0.5,
    //         ease: "power2.inOut",
    //       });
    //       gsap.to(burgerBarRefs.current[0], { y: 6, rotation: 45, duration: 0.3, ease: "power2.inOut" });
    //       gsap.to(burgerBarRefs.current[1], { opacity: 0, duration: 0.3, ease: "power2.inOut" });
    //       gsap.to(burgerBarRefs.current[2], { y: -6, rotation: -45, duration: 0.3, ease: "power2.inOut" });
    //     } else {
    //       gsap.to(mobileMenuRef.current, {
    //         x: "100%",
    //         opacity: 0,
    //         duration: 0.5,
    //         ease: "power2.inOut",
    //       });
    //       gsap.to(burgerBarRefs.current[0], { y: 0, rotation: 0, duration: 0.3, ease: "power2.inOut" });
    //       gsap.to(burgerBarRefs.current[1], { opacity: 1, duration: 0.3, ease: "power2.inOut" });
    //       gsap.to(burgerBarRefs.current[2], { y: 0, rotation: 0, duration: 0.3, ease: "power2.inOut" });
    //     }
    //   }
    // }, [isHamburgerOpen]);

  const handleMobileItemClick = (item, index) => {
    if (item.submenu) {
      setOpenDropdown(openDropdown === index ? null : index);
    } else {
      setIsHamburgerOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      if(item.name === "Member Login")
      window.location.href = item.link;
      else router.push(item.link);
    }
  };

  // Animate mobile menu when isHamburgerOpen changes
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

  // Combine menuItems and directLinks for dropdown
  const allItems = navItems;

  return (
    <div className="relative group h-full">
      <button
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
          {allItems.map((item, index) => (
            <div key={item.name} className="w-full py-2">
              <div
                className={`flex items-center justify-between px-4 py-2 text-sm font-medium cursor-pointer
                  ${openDropdown === index ? "bg-[#37403D] text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                onClick={() => handleMobileItemClick(item, index)}
              >
                {item.name}
                {item.submenu && (
                  <svg
                    className={`h-4 w-4 ${openDropdown === index ? "text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: openDropdown === index ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
              {item.submenu && openDropdown === index && (
                <div className="pl-4 w-full space-y-2 mt-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <div key={subItem.name} className="relative">
                      <div
                        className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer
                          ${openSubDropdown === subIndex ? "bg-gray-100 text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                        onClick={() => {
                          if (subItem.submenu) {
                            setOpenSubDropdown(openSubDropdown === subIndex ? null : subIndex);
                          } else {
                            setIsHamburgerOpen(false);
                            setOpenDropdown(null);
                            setOpenSubDropdown(null);
                            
                            // Use window.location.href for member login, Next.js router for everything else
                            if (subItem.name === "Member Login") {
                              window.location.href = subItem.link;
                            } else {
                              router.push(subItem.link);
                            }
                          }
                        }}
                      >
                        {subItem.name}
                        {subItem.submenu && (
                          <svg
                            className={`h-4 w-4 ${openSubDropdown === subIndex ? "text-[#8AD5B7]" : "text-[#DCE2E2]"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: openSubDropdown === subIndex ? "rotate(180deg)" : "rotate(0deg)" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>
                      {subItem.submenu && openSubDropdown === subIndex && (
                        <div className="pl-4 w-full space-y-2 mt-2">
                          {subItem.submenu.map((nestedItem) => (
                            <div
                              key={nestedItem.name}
                              className="px-4 py-2 text-sm text-[#DCE2E2] hover:bg-gray-100 hover:text-[#1E232261] cursor-pointer"
                              onClick={() => {
                                setIsHamburgerOpen(false);
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                                
                                // Use window.location.href for member login, Next.js router for everything else
                                if (nestedItem.name === "Member Login") {
                                  window.location.href = nestedItem.link;
                                } else {
                                  router.push(nestedItem.link);
                                }
                              }}
                            >
                              {nestedItem.name}
                            </div>
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
      )}
    </div>
  );
};

export default HamburgerMenu;