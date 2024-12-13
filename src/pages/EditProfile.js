import React from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 h-screen w-full flex flex-col items-center p-4">
      {/* Header */}
      <div className="relative w-full max-w-md">
        <div className="fixed top-4 left-[38%]">
          <button
            onClick={() => navigate("/userProfile")}
            className="bg-black text-white p-4 rounded-full shadow-lg text-2xl"
          >
            ←
          </button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/d4b7/bb5d/bd8b3943a763e1d2e13b607efc1e224e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1pL5l3UkYsKUQu~NsQFaKRw7PlByESy7RxouuE3Hwmt3DSbVicU-RffRXt9ZbYvCf3TLgPf5e4FtpcGWpE~-hBjPWqgdRQ9FQaz9A4AidFggdpWXL8jGK~xF4R~y3IE0OIAtPPpzBuNvjkBXcS~LqiXBJcffEiSHIMsAezKcO2ZH5TdVX53gdtO2kvCSCGUvGCYbJKMPOaU~jH5fyJ03dWX8il2084C80kpIvu7LU1IgyXmN-lvDqmd-VORxD5y355D~n4HWpvJiRa9K9wrDttiGafSz1jqjW1ka-ncrIoiN-SvTyM-wJ8n3LMNUfkbbAACRvCHNe2DNemxjt3eQw__"
          alt="Banner"
          className="w-full h-40 rounded-t-lg object-cover"
        />
        <div className="flex justify-end">
          <button className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
            ✏️ Edit
          </button>
        </div>
        <div className="absolute top-32 left-4 flex items-center gap-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/b54f/d858/f5e14f76f0793df709ce9bfe5e5f284e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F8EFZaa43X~VhEEfRsEglJDRMTzHxfryVgZpQr4867nnq~eRK2PoxpDYPhNmWuAwD~U~EO6q2wjlxPnmI1N5EQt5ubA8xkxbbiod6DmBGyQzNrBhaDkihT1L7PZy6nQGXxCdZJk33f1sFk4LP9I20QmSXaFs87hDjq-01nwMXmcj8PsfMA9GX1bPWHtJq6mxKQ4w~ftMK-OeZ9~GS61vYBncZ859QZzdeH16hP4S4123dgvRs8TJhHakYxvrql63NNAsnXYa~~5YkkhF7M4g1AcT0ybU8roBS-MmWt4yDwPXZ6s1llYiTkEr8ecDNk0D6TXt7B8gdtyBR-IbT~kwdw__"
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <button className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
            ✏️
          </button>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="w-full max-w-md text-center mt-16">
        <p className="text-xl font-bold text-gray-800">Edit Profile</p>

        <div className="mt-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg mt-4"
          />

          {/* Bio */}
          <textarea
            placeholder="Tell us something about yourself"
            className="w-full p-3 border border-gray-300 rounded-lg mt-4"
            rows="4"
          ></textarea>

          {/* Save Changes Button */}
          <button className="mt-6 bg-blue-500 text-white p-3 rounded-full w-full">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
