'use client'
import React, { useState ,useEffect } from 'react'
import {getIdFromBoro} from '@/utils/borough'
import { CheckCheck, X } from 'lucide-react'

const PropertyList = ({ properties = [], entries = 10, search = '', loading = false }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => { setCurrentPage(1); }, [entries, search, properties]);
  // Prepare list with address strings
  const formatted = properties.map(prop => ({
    property: prop,
    addr: `${prop.bin} - ${prop.house_number} ${prop.stname} ${getIdFromBoro(parseInt(prop.boro))} ${prop.zipcode}`
  }));
  // Filter by search term
  const filtered = formatted.filter(({ addr }) => addr.toLowerCase().includes(search.toLowerCase()));
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / entries));
  const startIdx = (currentPage - 1) * entries;
  const current = filtered.slice(startIdx, startIdx + entries);
  return (
    <div className="relative">
      {loading && <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10"><div className="loader"/></div>}
      <>
      <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-[80vh] 2xl:min-h-[50vh] 3xl:min-h-[30vh] overflow-x-auto">
              <table className="text-[#D9D9D9] text-center w-full h-full">
                <thead>
                  <tr className="border-b-2 border-[#8AD5B7] text-[#8AD5B7] text-lg sm:text-xl lg:text-2xl font-semibold">
                    <th className="w-2/5 lg:px-2 py-6 border-r-2 border-[#8AD5B7]">Address</th>
                    <th className="w-1/5 lg:px-2 py-6 border-r-2 border-[#8AD5B7]">Sync Status</th>
                    <th className="w-1/5 lg:px-2 py-6">View</th>
                  </tr>
                </thead>
                <tbody>
                  {current.length > 0 ? (
                    current.map(({ property, addr }, idx) => (
                      <tr
                        key={property.id || idx}
                        className={`${idx !== current.length - 1 ? 'border-b-2' : ''} border-[#89A096] text-[#D9D9D9] text-lg font-semibold`}
                      >
                        <td className="w-2/5 px-2 py-6 border-r-2 border-[#8AD5B7]">
                          {addr}
                        </td>
                        <td className="w-1/5 px-2 py-6 border-r-2 border-[#8AD5B7] text-center">
                          {property.sync_at ? <CheckCheck color="#08fd0c" className='w-full flex justify-center' /> : <X color="#ff0000" className='w-full flex justify'/>}
                        </td>
                        <td className="w-1/5 px-2 py-6">
                          <button
                            disabled={loading}
                            onClick={() => console.log('view', property.id)}
                            className={loading ? 'opacity-50 cursor-not-allowed' : ''}
                          >View</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-6 text-[#89A096]">
                        No properties found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl px-2 py-8">
              <p>
                Showing {total ? startIdx + 1 : 0} to {Math.min(startIdx + entries, total)} of {total} entries
              </p>
              <div className="flex items-center gap-4">
                <button
                  className="hover:text-[#8AD5B7] disabled:text-gray-500"
                  onClick={() => !loading && setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={loading || currentPage <= 1}
                >
                  Previous
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button
                  className="hover:text-[#8AD5B7] disabled:text-gray-500"
                  onClick={() => !loading && setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={loading || currentPage >= totalPages}
                >
                  Next
                </button>
              </div>
            </div>
            </>
    </div>
   )
 }

 export default PropertyList