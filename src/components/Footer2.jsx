import React from 'react'
import Link from 'next/link'

const Footer2 = () => {
    const links = [
        { name: "PBS Homepage", link: "/" },
        { name: "Owner Representative", link: "/owner-representative" },
        { name: "Inspection Services", link: "/inspection-services" },
        { name: "Local Law 11", link: "/law/local-law" },
        { name: "Local Law 126 (Parking)", link: "/law/local-law-parking" },
        { name: "Local Law 152", link: "/law/local-law-152" },
        { name: "Boiler Inspection", link: "/inspection-services/boiler-inspection" },
        { name: "Local Law 126 (Parapet)", link: "/law/local-law-parapet" },
        { name: "Property Management", link: "//property-management" },
        { name: "Sprinkler Hydrostatic inspection", link: "/inspection-services/sh-inspection" },
        { name: "Elevator Inspection", link: "/inspection-services/elevator-inspection" },
        { name: "Expediting Services", link: "/expediting-services" },
    ]

  return (
    <div className='bg-[#1E2322] pl-[12vw] lg:px-[7vw] w-full flex flex-col  justify-center items-center py-6 relative'>
          <span className='absolute bottom-5 right-5 text-[#89A096] font-semibold text-xl xl:text-2xl'>2025*</span>
              <h3 className='text-[#D9D9D9] font-semibold text-xl xl:text-2xl w-full'>Services & Resources</h3>
              <div className='flex flex-wrap w-full items-center justify-start gap-4 mt-4 xl:mt-6'>
              {links.map((link, index) => {
                  return (
                      <Link key={index} href={link.link} className='text-[#89A096] font-semibold text-lg xl:text-xl hover:text-[#8AD5B7]'>
                          {link.name}
                      </Link>
                  )
              })}
              </div>
          </div>
  )
}

export default Footer2