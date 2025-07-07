import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { menuItems, directLinks } from "./data";
import { useEffect } from "react";
import gsap from "gsap";

/**
 * HamburgerMenu Component
 *
 * A responsive mobile navigation menu that slides in from the right side of the screen.
 * Features include:
 * - Animated hamburger icon that transforms when clicked
 * - Slide-in animation for the menu panel
 * - Expandable dropdown submenus with smooth animations
 * - Navigation handling with Next.js router
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls whether the menu is currently open or closed
 * @param {Function} props.setIsOpen - Function to update the open/closed state of the menu
 * @returns {JSX.Element} The rendered HamburgerMenu component
 */
const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  /**
   * State to track which dropdown submenu is currently active/expanded
   * @type {[string|null, Function]} State and setter for the active dropdown
   */
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  /**
   * Animation variants for the main menu panel
   * Controls the slide-in/out animation from the right side
   * @type {Object}
   */
  const menuVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  /**
   * Animation variants for dropdown submenus
   * Controls the fade and slide animations when expanding/collapsing
   * @type {Object}
   */
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

  /**
   * Animation variants for individual submenu items
   * Controls the fade and slide animations for each item
   * @type {Object}
   */
  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, delay: 0.1 },
    },
    closed: { opacity: 0, x: -20 },
  };

  /**
   * Handles clicks on menu items
   * If the item has a submenu, it toggles the dropdown
   * If the item is a direct link, it navigates to that page and closes the menu
   *
   * @param {Object} item - The menu item that was clicked
   * @param {string} item.name - The name of the menu item
   * @param {string} [item.link] - The link to navigate to (if not a dropdown)
   * @param {Array} [item.submenu] - Array of submenu items (if a dropdown)
   */
  const handleItemClick = (item) => {
    if (item.submenu) {
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    } else {
      setIsOpen(false);
      router.push(item.link);
    }
  };

  const burgerRef = useRef(null);

  useEffect(() => {
    if (burgerRef.current) {
      gsap.to(burgerRef.current, {
        top: "35px", // lifts the hamburger up
        scrollTrigger: {
          trigger: burgerRef.current,
          start: "top top", // Starts when the top of the header reaches the top of the viewport
          end: "+=10", // Ends after scrolling 10px
          scrub: true, // Smooth animation that follows scroll position
        },
      });
    }
  });

   // Combine menuItems and directLinks, with menuItems first
  const allItems = [...menuItems, ...directLinks];

  return (
    <div className="w-screen h-full "> 
      {/* Hamburger Icon Button */}
      <button
        className="h-full w-full relative z-50 flex flex-col items-end justify-center pr-6 space-y-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        ref={burgerRef}
      >
        {/* Animated Hamburger Icon Bars */}
        {[30, 20, 30].map((width, index) => (
          <motion.div
            key={index}
            initial={{ width }}
            animate={{ width: isOpen ? (index % 2 === 0 ? 20 : 30) : width }}
            className="h-1 bg-[#dce2e1] rounded-md"
            transition={{ type: "spring", stiffness: 100 }}
          />
        ))}
      </button>

      {/* Slide-in Menu Panel */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "tween", duration: 0.5 }}
        className="fixed top-0 right-0 w-1/2 lg:h-full bg-black text-white flex flex-col items-start pt-20 overflow-y-auto"
        aria-hidden={!isOpen}
      >
        <div className="w-full p-6 space-y-6 bg-black rounded-lg">
        {/* Menu Items */}
        {allItems.map((item) => (
          <div key={item.name} className="w-full">
            {/* Menu Item Header */}
            <motion.div
              className="text-lg font-medium cursor-pointer flex justify-between items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleItemClick(item)}
              role="button"
              aria-expanded={activeDropdown === item.name}
              aria-controls={item.submenu ? `submenu-${item.name}` : undefined}
            >
              {item.name}
              {/* Dropdown Indicator Arrow */}
              {item.submenu && (
                <motion.span
                  className="text-sm ml-2"
                  animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  ▼
                </motion.span>
              )}
            </motion.div>

            {/* Submenu Dropdown (conditionally rendered) */}
            <AnimatePresence>
              {item.submenu && activeDropdown === item.name && (
                <motion.div
                  id={`submenu-${item.name}`}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                  className="pl-4 w-full space-y-4 mt-2"
                  role="menu"
                  aria-label={`${item.name} submenu`}
                >
                  {/* Submenu Items */}
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.name}
                      className="relative"
                      onMouseLeave={() => subItem.submenu && setActiveSubDropdown(null)}
                    >
                      <motion.div
                        className="text-base cursor-pointer flex justify-between items-center"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        role="menuitem"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (subItem.submenu) {
                            setActiveSubDropdown(
                              activeSubDropdown === subItem.name ? null : subItem.name
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
                          <motion.span
                            className="ml-2"
                            animate={{ rotate: activeSubDropdown === subItem.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden="true"
                          >
                            ▼
                          </motion.span>
                        )}
                      </motion.div>
                      <AnimatePresence>
                        {subItem.submenu && activeSubDropdown === subItem.name && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="pl-4 space-y-2 mt-2"
                            role="menu"
                            aria-label={`${subItem.name} submenu`}
                          >
                            {subItem.submenu.map((child) => (
                              <motion.div
                                key={child.name}
                                className="text-base cursor-pointer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                role="menuitem"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
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
          </div>
        ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
