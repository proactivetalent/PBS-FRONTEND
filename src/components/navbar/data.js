export const navItems = [
  {
    name: "Our Services",
    submenu: [
      {
        name: "Services",
        link: "/services",
      },
      { name: "Owner Representative", link: "/owner-representative" },
      { name: "Property Management", link: "/property-management" },
      { name: "Expediting Services", link: "/expediting-services" },
      {
        name: "Local Laws",
        submenu: [
          {
            name: "Local Law 11",
            link: "/law/local-law",
          },
          {
            name: "Local Law Parking",
            link: "/law/local-law-parking",
          },
          { name: "Local Law 126(Parapet)", link: "/law/local-law-parapet" },
          { name: "Local Law 152", link: "/law/local-law-152" },
        ],
      },
      {
        name: "Inspection Services",
        submenu: [
          {
            name: "Inspection Services",
            link: "/inspection-services",
          },
          {
            name: "Boiler Inspection",
            link: "/inspection-services/boiler-inspection",
          },
          {
            name: "Sprinkler Hydrostatic inspection",
            link: "/inspection-services/sh-inspection",
          },
          {
            name: "Elevator Inspection",
            link: "/inspection-services/elevator-inspection",
          },
        ],
      },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Blogs", link: "/blog" },
      { name: "Press", link: "/" },
      { name: "Local Law Guide", link: "/law/local-law" },
      { name: "Alert System Guide", link: "/alert" },
    ],
  },
   { name: "Alert Systems", link: "/alert" },
  {
    name: "About Us",
    submenu: [
      { name: "About", link: "/about-us" },
      { name: "Our Team", link: "/about-us/our-team" },
      { name: "Our Values", link: "/about-us/our-values" },
    ],
  },
   { name: "Contact us", link: "/contacts" },
 {name: "Member Portal", link: `${process.env.NEXT_PUBLIC_API_URL}/portal/login`},
];
