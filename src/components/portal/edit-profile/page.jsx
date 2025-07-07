"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

export default function Page() {
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageError, setProfileImageError] = useState("");
  const [profileData, setProfileData] = useState({});
  const [oldData, setOldData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, setUser } = useUser();

  const handleSave = async (e) => {
    e.preventDefault();
    // validate fields
    setLoading(true);
    const errors = {};
    if (!profileData.name?.trim()) errors.name = "Name is required";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(profileData.email || ""))
      errors.email = "Invalid email address";
    if (!profileData.company?.trim()) errors.company = "Company is required";
    if (!profileData.address || profileData.address.length < 4)
      errors.address = "Address must be at least 4 characters";
    if (!/^[0-9]{10}$/.test(profileData.contact_number || ""))
      errors.contact_number = "Enter a 10-digit phone number";
    setFormErrors(errors);
    if (Object.keys(errors).length) {
      setLoading(false);
      return;
    }
    setOldData(profileData);
    try {
      // prepare multipart form data
      const formData = new FormData();
      Object.entries(profileData).forEach(([key, val]) =>
        formData.append(key, val)
      );
      if (profileImage) formData.append("image", profileImage);
      // send multipart/form-data with axios
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pbsPortalToken")}`,
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("Profile updated successfully");
        setUser({ ...response.data.user, memberuser: oldData.memberuser });
        localStorage.setItem(
          "pbsPortalUser",
          JSON.stringify({
            ...response.data.user,
            memberuser: oldData.memberuser,
          })
        );
        router.push("/portal/profile");
      } else {
        console.error("No data returned from update");
      }
    } catch (error) {
      setProfileData(oldData);
      console.error("Error updating profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setProfileData({
      name: user?.name || "",
      email: user?.email || "",
      company: user?.company || "string",
      address: user?.address || "minimum four letters",
      contact_number: user?.contact_number || "",
      photo: user?.photo || "",
    });
    setOldData(user);
  }, []);

  return (
    <form
      onSubmit={(e) => handleSave(e)}
      className = "relative bg-[#1E2322] text-white min-h-screen flex flex-col items-center p-6 pt-16 lg:"
    >
      {loading && <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10"><div className="border-t-4 border-[#8AD5B7] rounded-full w-12 h-12 animate-spin"/></div>}
      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src="/pics/LOGO.png" // Replace with actual PBS logo URL
          alt="PBS Logo"
          className="mr-2 w-[50px] h-[50px]"
        />
        <h1 className="text-3xl font-bold text-[#8AD5B7]">UPDATE PROFILE</h1>
      </div>

      <div className="w-[50%] bg-[#8AD5B7] mx-auto h-2 my-10"></div>

      {/* Profile Section */}
      <div className="w-full max-w-2xl rounded-lg text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Edit Profile Image input with styled label */}
          <div className="flex flex-col items-center">
            <div >
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) :  profileData?.photo ? <img src={process.env.NEXT_PUBLIC_API_URL + profileData?.photo} alt="dp" className="w-32 h-32 rounded-full"/> :<div className="w-32 h-32 bg-[#D9D9D9] rounded-full"></div>}
            </div>
            <label
              htmlFor="avatarUpload"
              className="mt-2 cursor-pointer text-[#89A096] font-semibold hover:text-[#8AD5B7]"
            >
              {profileImage ? "Change Profile Image" : "Edit Profile Image"}
            </label>
            <input
              id="avatarUpload"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                if (file) {
                  if (!["image/jpeg", "image/png"].includes(file.type)) {
                    setProfileImageError("Only PNG or JPEG allowed");
                    setProfileImage(null);
                    return;
                  }
                  if (file.size > 2_000_000) {
                    // 2MB
                    setProfileImageError("File must be under 2MB");
                    setProfileImage(null);
                    return;
                  }
                  setProfileImageError("");
                  setProfileImage(file);
                }
              }}
            />
            {profileImageError && (
              <p className="text-red-500 text-sm mt-1">{profileImageError}</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Data */}
      <div className="w-full max-w-2xl rounded-lg px-6 pyb-6 pt-10 text-left">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b-2 py-6 border-[#8AD5B7]">
              <th className="w-1/3 py-3 pr-4 text-[#8AD5B7] font-semibold text-xl text-center border-r-2 border-[#8AD5B7]">
                Value Option
              </th>
              <th className="w-2/3 py-3 pr-4 text-[#8AD5B7] font-semibold text-xl text-center">
                New Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 py-6 border-[#8AD5B7]">
              <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">
                User Name
              </td>
              <td className="w-2/3 py-6">
                <input
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  disabled={loading}
                  value={profileData.name ?? ""}
                  onChange={(e) => !loading && setProfileData({ ...profileData, name: e.target.value })}
                  className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
                />
              </td>
            </tr>
            <tr className="border-b-2 py-6 border-[#8AD5B7]">
              <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">
                Email
              </td>
              <td className="w-2/3 py-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  disabled={loading}
                  value={profileData.email ?? ""}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
                />
              </td>
            </tr>
            <tr className="border-b-2 py-6 border-[#8AD5B7]">
              <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">
                Company
              </td>
              <td className="w-2/3 py-6">
                <input
                  type="text"
                  placeholder="Enter your company name"
                  disabled={loading}
                  value={profileData?.company ?? "null"}
                  onChange={(e) =>
                    setProfileData({ ...profileData, company: e.target.value })
                  }
                  className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
                />
              </td>
            </tr>
            <tr className="border-b-2 py-6 border-[#8AD5B7]">
              <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">
                Address
              </td>
              <td className="w-2/3 py-6">
                <input
                  type="text"
                  placeholder="Enter your address (minimum four letters)"
                  disabled={loading}
                  value={profileData?.address ?? ""}
                  required
                  minLength={4}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                  className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
                />
              </td>
            </tr>
            <tr className="border-b-2 py-6 border-[#8AD5B7]">
              <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">
                Phone No
              </td>
              <td className="w-2/3 py-6">
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\d{10}"
                  maxLength={10}
                  required
                  title="Please enter a 10-digit phone number"
                  placeholder="Enter your phone number"
                  disabled={loading}
                  value={profileData?.contact_number ?? ""}
                  onChange={(e) => {
                    // allow only digits
                    const val = e.target.value.replace(/\D/g, "");
                    setProfileData({ ...profileData, contact_number: val });
                  }}
                  className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* show validation errors */}
        {Object.entries(formErrors).map(([field, msg]) => (
          <p key={field} className="text-red-500 text-sm mt-1">
            {msg}
          </p>
        ))}
      </div>

      {/* Help Center and Logout */}
      <div className="w-full max-w-2xl px-6 pb-6 pt-10 text-left flex justify-center gap-10">
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
         Save Profile
        </button>
        <button
          className="mt-6 bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all"
          type="button"
          onClick={() => {
            setProfileData(oldData);
            router.push("/portal/profile");
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
