import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 h-full w-full flex flex-col items-center p-4">
      {/* Header */}

      <div className="relative w-full max-w-md">
        <div className="fixed top-4 left-[38%]">
          <button
            onClick={() => navigate("/")}
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
        <div className="absolute top-32 left-4 flex items-center gap-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/b54f/d858/f5e14f76f0793df709ce9bfe5e5f284e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F8EFZaa43X~VhEEfRsEglJDRMTzHxfryVgZpQr4867nnq~eRK2PoxpDYPhNmWuAwD~U~EO6q2wjlxPnmI1N5EQt5ubA8xkxbbiod6DmBGyQzNrBhaDkihT1L7PZy6nQGXxCdZJk33f1sFk4LP9I20QmSXaFs87hDjq-01nwMXmcj8PsfMA9GX1bPWHtJq6mxKQ4w~ftMK-OeZ9~GS61vYBncZ859QZzdeH16hP4S4123dgvRs8TJhHakYxvrql63NNAsnXYa~~5YkkhF7M4g1AcT0ybU8roBS-MmWt4yDwPXZ6s1llYiTkEr8ecDNk0D6TXt7B8gdtyBR-IbT~kwdw__"
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <button
            onClick={() => navigate("/editProfile")}
            className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-semibold shadow-sm"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* User Info */}
      <div className="w-full max-w-md text-center mt-16">
        <p className="text-xl font-bold text-gray-800">Sakshi Agarwal</p>
        <p className="text-sm text-gray-600">
          Just someone who loves designing, sketching, and finding beauty in the
          little things 💕
        </p>
      </div>

      {/* My Posts */}
      <div className="w-full max-w-md mt-6">
        <p className="text-lg font-bold text-gray-800">My Posts</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Post 1 */}
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/3d74/8cb4/2f8d406fbe46243a0c8ca283df76b831?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nurIcN7U3Pj-mQTI5znZ0r0XZmglGN3lO2scvCDwhScQhQ5bqw9HMB21Xip9zGwX1ROtH73gRXAY58YmZeHB6jX06RBj-1jWFamJ4FkigJLuJ8MHQNk8CP7iNXmdSCZSl1t9ECR~xHyfZlfFs534LSvUGZpCHJsQUG6bEsxk48KBAI-KAwoUr0fAECY87zPdAeAnGbJcgA6r829l9XFZY6UXxCRf6Pwz-oBkVL4iiKe9jh56~B0MIyBBCkM-zjOISBXrDk8ZBPhG88L2swqzUgSsQV0svZ3~ng8tLqopInr8XeEbj8gX2b8nI7VW2jEpuVWQWnJC6RRzfy80VlhPrw__"
              alt="Post 1"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white text-sm">
              <p>Design meet</p>
              <p>❤️ 67</p>
            </div>
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
              1/2
            </div>
          </div>

          {/* Post 2 */}
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/5760/ca9b/faaae9e15a4924b85a62195848d258eb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgr6Wra0WPGzs6sWMLl31nt-rgcxXTCbcpc8NutoNz3mB2Ihe7CthDExE4I12DA3j6Ue2sVZfHC8Z4bPMh15-QxJgiMJj8oRzsoezjCsbDNPOpvtM9sEc4x3Nd08IsJBGk~tZv2uc1s2YBygRd49VdrAri4X-PNc5Yai5MpH~U7lWkoFUDk44NQU7cxMNpfAyrsEH1z0g7yQQd-F~UE20vSJuSWMbGubz5QOEttI8qS-h4gN7RrZEiWHYbFDKGqAx2rcL~cuOyG7oFDwVG6IrLRslM9IkpnXUU-gnUXpJ5DRdsK8yx3ea~X4dgQ8FQ~9S7gO3gh47lLaO42aWw9WtA__"
              alt="Post 2"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white text-sm">
              <p>Working on a B2B...</p>
              <p>❤️ 40</p>
            </div>
          </div>

          {/* Post 3 */}
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/6bcc/3cfe/0044c8f832b54e5947d3c8f2607cc9ec?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dzPI9TYKLk1RPPaly-qTM1AGp-xs7vVs~6biEHJI2U0K43C4x0iCAxLGMxFF~wCmypbBXnRbofL12a4ZBTxIV5DtnuIULa0oh-Cpzd7cMWKas07Va7-JRdIjeCILdqGtmT9awz9akTxSdafV77zDYh2DUSQjwV3XE2ZxIihShfy-KDwi-0d4c~08jusDBDVGg1q0H-QECVZQdUOc3sZOusTrvpWyxDSlj5ZXBPduWLWIv6zBRAX0mF9NZui8m0X2dV3nA~3zdz0HI2DuLIBfXSFzd9PIDEWcAGuxsnHspDjwhh1TvK-pxiLJV7SAOEBtqLZqw1PpxukYJYrc~rngCw__"
              alt="Post 3"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white text-sm">
              <p>Parachute</p>
              <p>❤️ 65</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}

      <div className="fixed bottom-4 right-[38%]">
        <button
          onClick={() => navigate("/createPost")}
          className="bg-black text-white p-4 rounded-full shadow-lg text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
