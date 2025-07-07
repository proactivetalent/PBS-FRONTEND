'use client';
import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const Settings = ({ notificationSettings, reminderSettings, onUpdateNotifications, onUpdateReminders, loading=false }) => {
   // Tab state: 'notification' or 'reminder'
   const [tab, setTab] = useState('notification');
   const [settings, setSettings] = useState({});

   // Sync local settings when props or tab change
   useEffect(() => {
     if (tab === 'notification' && notificationSettings) {
       setSettings(notificationSettings);
     }
     if (tab === 'reminder' && reminderSettings) {
       setSettings(reminderSettings);
     }
   }, [tab, notificationSettings, reminderSettings]);

   // Toggle boolean keys
  //  const handleToggle = (key) => {
  //    setSettings({ ...settings, [key]: !settings[key] });
  //  };
   // Set sent_by
   const handleSentBy = (val) => {
     setSettings({ ...settings, sent_by: val });
   };
   // Save changes
   const handleSave = async () => {
     //console.log('Saving settings:', settings);
     try {
       let updated;
       if (tab === 'notification') {
         updated = await onUpdateNotifications(settings);
+        toast.success('Notification settings saved');
       } else {
         updated = await onUpdateReminders(settings);
+        toast.success('Reminder settings saved');
       }
       // sync with updated values
       setSettings(updated);
     } catch (e) {
       console.error('Failed saving settings', e);
+      toast.error('Error saving settings');
     }
   };

   return (
     <>
       <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-screen mb-8">
         <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-3 xl:gap-6">
           <h2 className="font-conthrax font-semibold text-3xl xl:text-4xl text-[#D9D9D9]">
             {tab === 'notification' ? 'NOTIFICATIONS' : 'REMINDERS'}
           </h2>
           <div className="flex justify-center items-center gap-3 xl:gap-6">
             <button
               onClick={() => setTab('notification')}
               className={`w-full lg:w-auto p-3 rounded-full shadow-md font-semibold text-base xl:text-xl text-center cursor-pointer transition duration-300 ease-in-out flex items-center justify-center ${
                 tab === 'notification' ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087] hover:bg-[#8AD5B7] hover:text-[#1E2322]'
               }`}
             >
               Notifications
             </button>
             <button
               onClick={() => setTab('reminder')}
               className={`w-full lg:w-auto p-3 rounded-full shadow-md font-semibold text-base xl:text-xl text-center cursor-pointer transition duration-300 ease-in-out flex items-center justify-center ${
                 tab === 'reminder' ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087] hover:bg-[#8AD5B7] hover:text-[#1E2322]'
               }`}
             >
               Reminders
             </button>
           </div>
         </div>

         {/* Sent_by radio buttons */}
         <div className="py-4">
           <p className="text-[#89A096] font-semibold mb-2">Get notification by:</p>
           {['email', 'app', 'both'].map((opt) => {
             return <button
               key={opt}
               onClick={() => !loading && handleSentBy(opt)}
               disabled={loading}
               className={`mr-2 px-4 py-2 rounded ${settings.sent_by === opt ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087] hover:bg-[#8AD5B7] hover:text-[#1E2322]'}`}
             >
               {opt.charAt(0).toUpperCase() + opt.slice(1)}
             </button>
})}
         </div>

         {/* Boolean settings toggles */}
         {/* <div className="grid grid-cols-2 gap-4">
           {Object.entries(settings)
             .filter(([key]) => key !== 'sent_by')
             .map(([key, value]) => (
               <label key={key} className="flex items-center">
                 <input
                   type="checkbox"
                   checked={!!value}
                   onChange={() => handleToggle(key)}
                   className="mr-2"
                 />
                 <span className="text-[#D9D9D9] font-semibold">{key.toUpperCase()}</span>
               </label>
             ))}
         </div> */}

         <div className="mt-6">
           <button
             onClick={handleSave}
            disabled={loading}
             className="bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all"
           >
             Save Settings
           </button>
         </div>
       </div>
     </>
   );
 };

 export default Settings;
