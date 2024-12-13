import React, { useState } from "react";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  serverTimestamp,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [caption, setCaption] = useState(
    "Surrounded by nature's beauty, finding peace in every leaf, breeze, and sunset 🌿 #NatureVibes #OutdoorEscape #EarthLover"
  );

  const navigate = useNavigate();

  const backToHome = () => navigate("/");

//   const fetchPostById = async (id) => {
//     try {
//       const postRef = doc(db, "kowshiksammangi@gmail.com", id); // "posts" is your collection
//       const docSnap = await getDoc(postRef);

//       if (docSnap.exists()) {
//         console.log(docSnap.data()); // This will give you the post data
//       } else {
//         console.log("No such document!");
//       }
//     } catch (error) {
//       console.error("Error getting document: ", error);
//     }
//   };

  const onCreatePost = async () => {
    const postData = {
      text: caption,
      images: [
        "https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__",
      ], // Placeholder images
      videoUrl: null, // Dummy video URL
      timestamp: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(
        collection(db, "kowshiksammangi@gmail.com"),
        postData
      );

      // Retrieve the document ID
    //   const postId = docRef.id;
    //   console.log("Post added successfully with ID:", postId);
    //   fetchPostById("iHOGOB2ikLc8zjUOuNxr");

      navigate("/");
    } catch (e) {
      console.error("Error adding posts: ", e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[375px] h-[812px] bg-white font-sans shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center border-b">
          <button onClick={backToHome} className="text-black">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-black text-lg font-semibold">New post</h1>
        </div>

        {/* Content */}
        <div className="absolute top-[72px] left-0 right-0 bottom-0 px-4">
          {/* Image Preview */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__"
              alt="Nature landscape"
              className="object-cover"
            />
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <span className="bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                1
              </span>
              <button className="bg-black/50 p-2 rounded-md">
                <Trash2 className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Add More Photos Button */}
          <button
            variant="outline"
            className="w-full flex items-center gap-2 mb-4"
          >
            <Plus className="h-4 w-4" />
            Add more Photos
          </button>

          {/* Caption */}
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full min-h-[100px] text-base resize-none border-0 focus:ring-0 focus:outline-none"
          />

          {/* Create Button */}
          <button
            onClick={onCreatePost}
            className="absolute bottom-8 left-4 right-4 bg-black text-white hover:bg-black/90 rounded-full py-6 text-base font-medium"
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}
