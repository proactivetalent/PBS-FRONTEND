import React, { useState, useRef, useEffect } from 'react'
import { boroughs, getBoroId, getIdFromBoro } from '@/utils/borough';
import { X, Check, Search, ChevronDown } from 'lucide-react'
import toast from 'react-hot-toast';

const ManageProperties = ({
  searchByAddress,
  searchByBIN,
  addSelectedProperty,
  searchResults = [],
  isSearching = false,
  ownedProperties,
  onDelete,
  entries = 10,
  search = '',
  onSearchChange,
  onEntriesChange,
  loading = false,
}) => {
  const [activeTab, setActiveTab] = useState('Add Property with Address');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [borough, setBorough] = useState('');
  const [binQuery, setBinQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showStreetMenu, setShowStreetMenu] = useState(false);
  const [showBinMenu, setShowBinMenu] = useState(false);
  
  const menuRef = useRef(null);

  // Reset pagination on loading state
  useEffect(() => {
    if (loading) setCurrentPage(1);
  }, [loading]);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowStreetMenu(false);
        setShowBinMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle property selection from street search
  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setStreet(`${property.zipcode} ${property.stname}`);
    setShowStreetMenu(false);
  };

  // Handle property selection from BIN search
  const handleBinPropertySelect = (property) => {
    setSelectedProperty(property);
    setBinQuery(`${property.bin}: ${property.zipcode} ${property.stname}`);
    setShowBinMenu(false);
  };

  // Search as user types street name
  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (house && borough && street) {
        searchByAddress(street, house, borough);

      }
    }, 1000);
    return () => clearTimeout(searchTimer);
  }, [street, house, borough]);

  // Search as user types BIN
  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (binQuery && !binQuery.includes(':')) {
        searchByBIN(binQuery);
      }
    }, 1000);
    return () => clearTimeout(searchTimer);
  }, [binQuery]);

  // Handle final property addition
  const handleAddProperty = async () => {
    if (!selectedProperty || !selectedProperty.bin) {
      toast.error('Please select a property first');
      return;
    }
    try {
      await addSelectedProperty(selectedProperty.bin);
      setSelectedProperty(null);
      setStreet('');
      setHouse('');
      setBorough('');
      setBinQuery('');
    } catch (error) {
      console.error('Add property error:', error);
    }
  };

  // filter by address text for owned properties list
  const term = (search || '').toLowerCase()
  const filtered = ownedProperties.filter((p) => {
    const addr = `${p.house_number} ${p.stname} ${getIdFromBoro(p.boro)}`
    return !term || addr.toLowerCase().includes(term)
  })

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / entries))
  const startIdx = (currentPage - 1) * entries
  const current = filtered.slice(startIdx, startIdx + entries)

  const buttonList = [
    'Add Property with Address',
    'Add Property with BIN Number',
    'Add Property For Me',
    'Delete Property',
  ];

  return (
    <div className="relative" ref={menuRef}>
      {loading && <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10"><div className="loader"/></div>}
      <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-screen mb-8">
        {/* Tab buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6">
          {buttonList.map(tab => (
            tab === 'Add Property For Me' ? (
              <a 
                href={`${process.env.NEXT_PUBLIC_API_URL}/property-add`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 rounded-full text-center font-semibold flex justify-center items-center ${activeTab===tab ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087]'}`}
              >
                {tab}
              </a>
            ) : ( 
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedProperty(null);
                  setStreet('');
                  setHouse('');
                  setBorough('');
                  setBinQuery('');
                }}
                className={`p-2 rounded-full text-center font-semibold ${activeTab===tab ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087]'}`}
              >
                {tab}
              </button>
            )
          ))}
        </div>

        <div className='h-1.5 bg-[#8AD5B7] my-6'></div>

        {/* Add by Address */}
        {activeTab === 'Add Property with Address' && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#89A096] font-semibold mb-2">House Number</label>
                <input
                  disabled={loading || isSearching}
                  type="text"
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                  className="w-full bg-[#2E3734] border border-[#8AD5B7] rounded-lg px-4 py-2 text-[#D9D9D9]"
                  placeholder="Enter house number"
                />
              </div>
               <div>
                <label className="block text-[#89A096] font-semibold mb-2">Borough</label>
                <div className="relative">
                  <select
                    disabled={loading || isSearching}
                    value={borough}
                    onChange={(e) => setBorough(e.target.value)}
                    className="w-full bg-[#2E3734] border border-[#8AD5B7] rounded-lg px-4 py-2 text-[#D9D9D9] appearance-none"
                  >
                    <option value="">Select Borough</option>
                    {boroughs.map((name,index) => (
                      <option key={index} value={name}>{name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-[#8AD5B7] pointer-events-none" />
                </div>
              </div>

               <div>
                <label className="block text-[#89A096] font-semibold mb-2">Street Name</label>
                <div className="relative" ref={menuRef}>
                  <input
                    disabled={loading || isSearching}
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    onClick={() => setShowStreetMenu(true)}
                    className="w-full bg-[#2E3734] border border-[#8AD5B7] rounded-lg px-4 py-2 text-[#D9D9D9]"
                    placeholder="Enter street name"
                  />
                  <ChevronDown className="absolute right-3 top-3 text-[#8AD5B7]" />
                  {showStreetMenu && searchResults.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-[#2E3734] border border-[#8AD5B7] rounded-lg max-h-60 overflow-y-auto">
                      {searchResults.map((property,index) => (
                        <div
                          key={index}
                          onClick={() => handlePropertySelect(property)}
                          className="px-4 py-2 hover:bg-[#37403D] cursor-pointer text-[#D9D9D9]"
                        >
                          {property.bin}:{property.zipcode} {property.stname}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isSearching && <div className="text-center text-[#8AD5B7]">Searching...</div>}
            <button
              disabled={loading || isSearching || !selectedProperty}
              onClick={handleAddProperty}
              className="w-full bg-[#8AD5B7] text-[#37403D] font-semibold py-2 rounded-lg hover:bg-[#7AC4A6] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Property
            </button>
          </div>
        )}

        {/* Add by BIN */}
        {activeTab === 'Add Property with BIN Number' && (
          <div className="space-y-6">
            <div className="relative" ref={menuRef}>
              <label className="block text-[#89A096] font-semibold mb-2">BIN Number</label>
              <input
                disabled={loading || isSearching}
                type="text"
                value={binQuery}
                onChange={(e) => setBinQuery(e.target.value)}
                onClick={() => setShowBinMenu(true)}
                className="w-full bg-[#2E3734] border border-[#8AD5B7] rounded-lg px-4 py-2 text-[#D9D9D9]"
                placeholder="Enter BIN number"
              />
              <ChevronDown className="absolute right-3 top-11 text-[#8AD5B7]" />
              {showBinMenu && searchResults.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-[#2E3734] border border-[#8AD5B7] rounded-lg max-h-60 overflow-y-auto">
                  {searchResults.map((property,index) => (
                    <div
                      key={index}
                      onClick={() => handleBinPropertySelect(property)}
                      className="px-4 py-2 hover:bg-[#37403D] cursor-pointer text-[#D9D9D9]"
                    >
                      {property.bin}: {property.zipcode} {property.stname}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {isSearching && <div className="text-center text-[#8AD5B7]">Searching...</div>}
            <button
              disabled={loading || isSearching || !selectedProperty}
              onClick={handleAddProperty}
              className="w-full bg-[#8AD5B7] text-[#37403D] font-semibold py-2 rounded-lg hover:bg-[#7AC4A6] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Property
            </button>
          </div>
        )}

        {/* Delete Single */}
         {activeTab === 'Delete Property' && (
          <>
            {/* entries + search row */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center w-full text-[#89A096] font-semibold mb-4">
              <div className="flex items-center">
                <span className="mr-2">Show</span>
                <select
                  disabled={loading}
                  value={entries}
                  onChange={(e) => {
                    onEntriesChange(Number(e.target.value));
                  }}
                  className="bg-[#2E3734] border border-[#8AD5B7] rounded-full px-3 py-1 text-[#89A096]"
                >
                  {[10, 25, 50, 100].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="ml-2">entries</span>
              </div>
              <div className="relative">
                <input
                  disabled={loading}
                  type="text"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search"
                  className="bg-[#2E3734] rounded-full px-4 py-1 border border-[#8AD5B7] text-[#89A096]"
                />
                <X
                  className="absolute right-2 top-1 cursor-pointer text-[#89A096]"
                  onClick={() => onSearchChange('')}
                />
              </div>
            </div>

             {/* table */}
            <div className="overflow-x-auto">
              <table className="w-full text-[#D9D9D9] text-center">
                <thead>
                  <tr className="">
                    <th className="px-2 py-3 border-2 border-[#8AD5B7]">ADDRESS</th>
                    <th className="px-2 py-3 border-2 border-[#8AD5B7]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {current.map((p, i) => (
                    <tr
                      key={p.id || i}
                      className={i % 2 === 0 ? 'bg-[#2E3734]' : ''}
                    >
                      <td className="border-2 border-[#8AD5B7] py-3 text-left px-2">
                        {p.house_number} {p.stname},{' '}
                        {boroughs[p.boro] || getIdFromBoro(p.boro)}
                      </td>
                      <td className="border-2 border-[#8AD5B7] py-3">
                        <button
                          onClick={() => !loading && onDelete(p.id)}
                          disabled={loading}
                          className="px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {current.length === 0 && (
                    <tr>
                      <td
                        colSpan={2}
                        className="py-6 text-[#89A096]"
                      >
                        No properties found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

              {/* pagination footer */}
            <div className="flex justify-between items-center mt-4 text-[#89A096] font-semibold">
              <div>
                Showing{' '}
                {total === 0 ? 0 : startIdx + 1} to{' '}
                {Math.min(startIdx + entries, total)} of {total} entries
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => !loading && setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={loading}
                  className="disabled:text-gray-500 hover:text-[#8AD5B7]"
                >
                  Previous
                </button>
                <span>
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => !loading && setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={loading}
                  className="disabled:text-gray-500 hover:text-[#8AD5B7]"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ManageProperties