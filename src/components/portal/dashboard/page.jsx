"use client";
import React, { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import toast from 'react-hot-toast';
import { apiRequest } from '@/utils/csrfHandler'
import Sidebar from "@/components/navbar2/Sidebar";
import PropertyList from "@/components/member-portal/PropertyList";
import ManageProperties from "@/components/member-portal/ManageProperties";
import PropertySummary from "@/components/member-portal/PropertySummary";
import Settings from "@/components/member-portal/Settings";
import { getBoroId } from "@/utils/borough";

const Page = () => {
  // Dashboard API state lifted here
  const hasInit = useRef(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [entries, setEntries] = useState(20);
  const [search, setSearch] = useState("");  
  const [displayComponent, setDisplayComponent] = useState("Property List");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Settings state
  const [notificationSettings, setNotificationSettings] = useState(null);
  const [reminderSettings, setReminderSettings] = useState(null);

  const buttonList = [
    "Property List",
    "Manage Properties",
    "Property Summary",
    "Settings",
  ];

  // load user properties
  const loadProperties = async () => {
    setLoading(true);
    try {
      const json = await apiRequest('get', '/user/properties');
      setProperties(Array.isArray(json.data.data)
        ? json.data.data
          : []
      );
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // only run once, even in StrictMode
    if (hasInit.current) return;
    hasInit.current = true;
    // load properties once
    loadProperties();
    // load settings once
    //const keys = ['sent_by','dob','ecb','fdny','hpd','inspections','permits'];
    (async () => {
      try {
        const settings = await apiRequest('post', '/user/notify-settings');
        setNotificationSettings(settings.data.data);
        const reminders = await apiRequest('post', '/user/reminder-settings');
        setReminderSettings(reminders.data.data);
      } catch (err) {
        console.error('Failed loading settings', err);
      }
    })();
  }, []);

  // delete a property by id
  const deleteProperty = async (id) => {
    setLoading(true);
    try {
      const res = await apiRequest('delete', `/user/properties/id/${id}`);
      if(res.status === 200) {
        setProperties(Array.isArray(res.data.data) ? res.data.data : []);
        toast.success('Property deleted');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // search properties by address (house number and street name)
  const searchByAddress = async (street, house, borough) => {
    setIsSearching(true);
    try {
      const response = await apiRequest('post', '/property/search-by-address', {
        street,
        house_number: house,
        borough: getBoroId(borough)
      });

      if (response.status === 200) {
        setSearchResults(response.data.data || []);
      }
    } catch (e) {
      console.error('searchByAddress error', e);
      toast.error('Failed to search by address');
    } finally {
      setIsSearching(false);
    }
  };

  // search properties by BIN
  const searchByBIN = async (bin) => {
    setIsSearching(true);
    try {
      const response = await apiRequest('post', '/property/search-by-bin', {
        bin: bin
      });
      if (response.status === 200) {
        setSearchResults(response.data.data || []);
      }
    } catch (e) {
      console.error('searchByBIN error', e);
      toast.error('Failed to search by BIN');
    } finally {
      setIsSearching(false);
    }
  };
  // add a selected property to user's properties
  const addSelectedProperty = async (bin) => {
    setLoading(true);
    try {
      const response = await apiRequest('post', '/property/add', { 
        bin 
      });
      if (response.status === 200) {
        // Update properties with the new data
        if (response.data && Array.isArray(response.data.data)) {
          setProperties(response.data.data);
          toast.success('Property added successfully');
          setSearchResults([]); // Clear search results after adding
          setSearch(''); // Clear search input
        } else {
          // If we don't get an array back, reload the full properties list
          await loadProperties();
          toast.success('Property added successfully');
        }
      }
    } catch (e) {
      console.error('addSelectedProperty error:', e);
      toast.error(e.response?.data?.message || 'Failed to add property');
    } finally {
      setLoading(false);
    }
  };

  // update notification settings via JWT-protected API
  const updateNotificationSettings = async (payload) => {
    setLoading(true);
    try {
      const { data: response } = await apiRequest('post', '/user/notify-settings', payload);
      setNotificationSettings(response.data);
      return response.data;
    } catch (e) {
      console.error('Failed updating notifications', e);
      throw e;
    } finally {
      setLoading(false);
    }
  };
  // update reminder settings via JWT-protected API
  const updateReminderSettings = async (payload) => {
    setLoading(true);
    try {
      const { data: response } = await apiRequest('post', '/user/reminder-settings', payload);
      setReminderSettings(response.data);
      return response.data;
    } catch (e) {
      console.error('Failed updating reminders', e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#37403D] w-full min-h-screen">
      {loading && <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10"><div className="loader" /></div>}
      {/* Sidebar (Always Visible) */}
      <Sidebar />

      {/* Main Content Centered */}
      <div className="flex justify-center">
        <div className="pl-[10vw] lg:pl-[5vw] mx-auto pt-10 lg:pt-16 w-full">
          <h1 className="text-4xl md:text-5xl xl:text-[55px] font-conthrax font-semibold text-[#8AD5B7] w-full text-center pt-16 xl:pt-24 max-w-md sm:max-w-3xl mx-auto">
            PBS Member Portal
          </h1>
          <p className="text-center text-[#89A096] font-semibold text-lg xl:text-xl pt-3 xl:pt-5">
            Compliance Made Simple, Projects Done Right
          </p>

          <div className="w-[30%] xl:w-[20%] mx-auto bg-[#8AD5B7] h-2 my-6"></div>

          <h2 className="text-3xl md:text-4xl xl:text-[40px] font-conthrax font-semibold text-[#D9D9D9] w-full text-center pt-0 xl:pt-6">
            Dashboard
          </h2>

          <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 xl:pt-10">
            {buttonList.map((button, index) => (
              <button
                onClick={() => {
                  setDisplayComponent(button);
                }}
                key={index}
                className={`w-full lg:w-auto hover:bg-[#8AD5B7]  font-semibold text-lg xl:text-xl p-2 rounded-full shadow-md hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center ${
                  displayComponent === button
                    ? "bg-[#8AD5B7] text-[#1E2322]"
                    : "bg-[#2E3734] text-[#89A096]"
                }`}
              >
                {button}
              </button>
            ))}
          </div>
 
          <div className="w-[90%] mx-auto flex flex-col justify-center items-center mt-6">
            {(displayComponent === "Property List" || displayComponent === "Property Summary") && (
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl p-2 rounded-full mb-6">
              {/* Entries scroller */}
              <div className="flex items-center text-white p-2 rounded-md">
                <span className="mr-2 text-[#89A096]">Show</span>
                <select
                  disabled={loading}
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                  className="bg-[#2E3734] border border-[#8AD5B7] rounded-full px-3 py-1 text-[#89A096] outline-none overflow-y-hidden"
                >
                  {[10, 25, 50, 100].map((opt) => (
                    <option key={opt} value={opt} className="bg-[#2E3734] text-[#89A096]">
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="ml-2 text-[#89A096]">Entries</span>
              </div>
              {/* Search bar */}
              <div className="relative flex items-center">
                <input
                  disabled={loading}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="search"
                  className="bg-[#2E3734] rounded-full px-3 py-1 border border-[#8AD5B7]"
                />
                <X className="absolute right-4 cursor-pointer" onClick={()=> setSearch('')}/>
              </div>
            </div>
            )}

            {displayComponent == "Property List" && (
              <PropertyList
                properties={properties}
                entries={entries}
                search={search}
                loading={loading}
              />
            )}
            {displayComponent === "Manage Properties" && (             
               <ManageProperties
                searchByAddress={searchByAddress}
                searchByBIN={searchByBIN}
                addSelectedProperty={addSelectedProperty}
                searchResults={searchResults}
                isSearching={isSearching}
                ownedProperties={properties}
                onDelete={deleteProperty}
                entries={entries}
                search={search}
                onSearchChange={setSearch}
                onEntriesChange={setEntries}
                loading={loading}
              />
            )}
            {displayComponent == "Property Summary" && (
              <PropertySummary
                entries={entries}
                search={search}
                properties={properties}
                loading={loading}
              />
            )}
            {displayComponent == "Settings" && (
              <Settings
                notificationSettings={notificationSettings}
                reminderSettings={reminderSettings}
                onUpdateNotifications={updateNotificationSettings}
                onUpdateReminders={updateReminderSettings}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;