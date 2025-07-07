import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "../../../src/components/navbar/data";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const HorizontalMenu = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const menuRef = useRef(null);

  const handleItemHover = (item) => {
    if (item.submenu) {
      setActiveDropdown(item.name);
    }
  };

  const handleItemClick = (item) => {
    if (item.submenu) {
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    } else {
      setIsOpen(false);
      router.push(item.link);
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, delay: 0.1 },
    },
    closed: { opacity: 0, x: -20 },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav
      className={`w-[87%] xl:w-[85%] absolute top-0 h-[100px] lg:flex items-center justify-end gap-5 xl:gap-6 2xl:gap-8 right-2 xl:right-6 z-50`}
      role="navigation max-w-[70vw]"
      aria-label="Main navigation"
    >
      {menuItems.map((item, index) => (
        <motion.div
          className={`${
            index === menuItems.length - 1
              ? "text-[#37403D] hover:text-[#EAEEEE] bg-[#8AD5B7] rounded-full p-2 flex-shrink-0"
              : "text-[#EAEEEE] hover:text-[#8AD5B7]"
          } text-xs xl:text-sm 2xl:text-lg font-semibold cursor-pointer relative`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleItemClick(item)}
          role="button"
          aria-expanded={activeDropdown === item.name}
          aria-controls={item.submenu ? `submenu-${item.name}` : undefined}
          key={index}
          onMouseEnter={() => handleItemHover(item)}
        >
          {item.name}
          <AnimatePresence>
            {item.submenu && activeDropdown === item.name && (
              <motion.div
                id={`submenu-${item.name}`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={dropdownVariants}
                onMouseLeave={() => setActiveDropdown(null)}
                ref={menuRef}
                className="absolute top-6 bg-gray-800 text-[#EAEEEE] rounded-md shadow-lg p-4 mt-3 text-base space-y-2"
                role="menu"
                aria-label={`${item.name} submenu`}
              >
                {item.submenu.map((subItem) => (
                  <div
                    key={subItem.name}
                    className="relative"
                    onMouseLeave={() =>
                      subItem.submenu && setActiveSubDropdown(null)
                    }
                  >
                    <motion.div
                      className="cursor-pointer hover:text-[#8AD5B7] text-nowrap font-medium flex items-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      role="menuitem"
                      onMouseEnter={() =>
                        subItem.submenu
                          ? setActiveSubDropdown(subItem.name)
                          : null
                      }
                      onClick={() => {
                        if (subItem.submenu) {
                          setActiveSubDropdown(
                            activeSubDropdown === subItem.name
                              ? null
                              : subItem.name
                          );
                        } else {
                          setIsOpen(false);
                          setActiveDropdown(null);
                          setActiveSubDropdown(null);
                          router.push(subItem.link);
                        }
                      }}
                    >
                      {subItem.name}
                      {subItem.submenu && (
                        <svg
                          className="w-3 h-3 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                          />
                        </svg>
                      )}
                    </motion.div>
                    <AnimatePresence>
                      {subItem.submenu &&
                        activeSubDropdown === subItem.name && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="text-[#EAEEEE] rounded-md p-4 mt-0 ml-2 space-y-2"
                            role="menu"
                            aria-label={`${subItem.name} submenu`}
                          >
                            {subItem.submenu.map((child) => (
                              <motion.div
                                key={child.name}
                                className="cursor-pointer hover:text-[#8AD5B7] text-nowrap font-medium"
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                role="menuitem"
                                onClick={() => {

                                  setActiveSubDropdown(null);
                                  router.push(child.link);
                                }}
                              >
                                {child.name}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </nav>
  );
};

export default HorizontalMenu;
