"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {apiRequest} from '@/utils/csrfHandler';
import {useUser} from '@/context/UserContext';

const Page = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  useEffect(() => {
    const profile = async () => {
      setLoading(true);
      try {
        const response = await apiRequest('get', '/user/profile');
        if (response.data && response.data.data) {
          setProfileData(response.data.data);
        } else {
          console.error("No profile data found");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    }
    profile();
  }, []);

  return (
    <div className="relative bg-[#1E2322] text-white min-h-screen flex flex-col items-center p-6 pt-16 lg:">
      {loading && <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10"><div className="border-t-4 border-t-[#8AD5B7] border-transparent rounded-full w-12 h-12 animate-spin" /></div>}
      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src="/pics/LOGO.png" // Replace with actual PBS logo URL
          alt="PBS Logo"
          className="mr-2 w-[50px] h-[50px]"
        />
        <h1 className="text-3xl font-bold text-[#8AD5B7]">PROFILE</h1>
      </div>

      <div className="w-[50%] bg-[#8AD5B7] mx-auto h-2 my-10"></div>

      {/* Profile Section */}
      <div className="w-full max-w-2xl rounded-lg px-6 pb-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          {profileData.user?.photo ? <img src={process.env.NEXT_PUBLIC_API_URL + profileData.user?.photo} alt="dp" className="w-32 h-32 rounded-full"/> :<div className="w-32 h-32 bg-[#D9D9D9] rounded-full"></div>}
          <div className="text-left flex flex-col justify-center items-start gap-3">
            <div className="space-y-1">
              <p className="text-3xl xl:text-4xl font-semibold text-[#8AD5B7]">
                {user?.name}
              </p>
              <p className="text-sm xl:text-base text-[#89A096] font-normal">
                {user.email}
              </p>
            </div>
            <Link href="/portal/edit-profile">
              <button disabled={loading} className="bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[50%] bg-[#8AD5B7] mx-auto h-2 my-10"></div>

      {/* Subscription Info */}
      <div className="w-full max-w-2xl rounded-lg px-6 pb-6 text-left">
        <h3 className="text-2xl 2xl:text-3xl font-semibold mb-4 text-[#8AD5B7]">
          Subscription Info
        </h3>
        <div className="space-y-2">
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">Status</span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.subscription?.status ?? "Active"}
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">Plan</span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.subscription?.plan ?? "Basic"}
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">Ends</span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.subscription?.ends ?? "N/A"}
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">
              Member Since
            </span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.subscription?.memberSince ?? "N/A"}
            </span>
          </p>
        </div>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">
            Total Properties
          </span>{" "}
          <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
            {profileData?.totalProperties ?? "0"}
          </span>
        </p>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">Balance</span>{" "}
          <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
            {profileData?.balance ?? "$100.00"}
          </span>
        </p>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">Hearings</span>{" "}
          <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
            {profileData?.hearings}
          </span>
        </p>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">Help Center</span>
        </p>
      </div>

      {/* Help Center and Logout */}
      <div className="w-full max-w-2xl px-6 pb-6 text-left flex justify-end">
          <button onClick={() => {
            // Handle logout logic here
            localStorage.removeItem('pbsPortalUser');
            localStorage.removeItem('pbsPortalToken');
            setUser(null);
            setProfileData({});
            router.push("/login") // Redirect to login page
          }
} disabled={loading} className="bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
             Logout
           </button>
      </div>
    </div>
  );
};

export default Page;
