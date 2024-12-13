import { useState, useEffect } from "react";
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

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const navigate = useNavigate();

  const goToCreatePost = () => navigate("/createPost"); // Redirect to home page after alert

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      // setUserDetails(user);
      const querySnapshot = await getDocs(
        collection(db, "kowshiksammangi@gmail.com")
      );
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push({
          id: doc.id, // Add the document ID
          ...doc.data(), // Spread the post data
        });
      });
      // console.log(postsData);
      setIsLoading(false);
      setPosts(postsData); // Set the posts with ID included
    } catch (e) {
      console.error("Error fetching posts: ", e);
    }
  };

  // const fetchPostById = async (id) => {
  //   try {
  //     const postRef = doc(db, "posts", id); // "posts" is your collection
  //     const docSnap = await getDoc(postRef);

  //     if (docSnap.exists()) {
  //       console.log(docSnap.data()); // This will give you the post data
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.error("Error getting document: ", error);
  //   }
  // };

  const togglePopup = (each) => {
    if (each !== undefined) {
      setLinkUrl(each.text);
    }
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderIsLoading = () => (
    <div className="flex justify-center align-center h-100 w-100">
      <h1>Loading...</h1>
    </div>
  );

  const renderPosts = () => {
    return (
      <div className="bg-gray-300 h-full w-full flex flex-col items-center p-4">
        {/* Header */}
        <div className="w-full max-w-md bg-white rounded-lg p-4 shadow-md flex items-center gap-3">
          <button onClick={()=>navigate('/userProfile')}>
            <img
              src="https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
          </button>
          <div>
            <p className="text-gray-800 font-semibold">Welcome Back,</p>
            <p className="text-black font-bold">kowshiksammangi</p>
          </div>
        </div>

        {/* Feed Title */}
        <div className="w-full max-w-md mt-6 text-xl font-bold text-gray-800">
          Feeds
        </div>

        {/* ///////////// Popup */}

        {isPopupVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm shadow-lg relative">
              <button
                onClick={() => togglePopup()}
                className="absolute top-2 right-2 text-gray-600 font-bold"
              >
                ×
              </button>
              <p className="text-lg font-semibold mb-4">Share post</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Twitter",
                  "Facebook",
                  "Reddit",
                  "Discord",
                  "WhatsApp",
                  "Messenger",
                  "Telegram",
                  "Instagram",
                ].map((platform) => (
                  <button
                    key={platform}
                    className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-md hover:bg-gray-200"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {platform}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Page Link</p>
                <input
                  type="text"
                  value={`https://www.arnav/feed` + linkUrl}
                  readOnly
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* //////////////////////////////////////////////////isPopupVisible */}

        {/* Posts */}
        <div className="w-full max-w-md flex flex-col gap-6 mt-4">
          {/* Post 1 */}

          {posts.map((each) => (
            <div key={each.id} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center gap-3">
                <img
                  src='https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__'
                  alt="Aarav"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Aarav</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700">
                {each.text}🗽
                <span className="text-blue-600"> #NYC #Travel</span>
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <img
                  src={each.images[0]}
                  alt="City 1"
                  className="w-full rounded-lg"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/468d/f99b/7970153da6c5da9091d49a21a3df94d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTRgY3WrDWlaoslry-eYF3fMJ4St1g4vXUXYKQTWfiLhADDGNG4ssWovpgYCE0SeDXU2lMpluhSzWlOHgc4rq~pBPooYrUKJ-kpocKTIaBr586Zx6sg5hL0h8xzu~GMEIDMEawloExVwD0dse5znk0grXsRc8QxaMgJu5JsZRjUOER3KniJgZkcwE89OZS7QhXk8mo775A~TWsp6T3TmRaEVHyFHcvixzEEOYnNWpdi83eENYiWOryf8aQCpKrYsr5cmS-8uSk2Jf65M9mIK7W8CdD8c-t9yu5oeBOusor~lQtClgV1bSeEMxb7cRMDY-RRbMVpj~lU7dviAcI~BQA__"
                  alt="City 2"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className="text-gray-600 flex items-center gap-1">❤️ 67</p>
                <button
                  onClick={() => togglePopup(each)}
                  className="text-blue-600 font-semibold"
                >
                  Share
                </button>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-3">
              <img src={null} alt="Aarav" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-gray-800 font-semibold">Aarav</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="mt-3 text-gray-700">
              Just arrived in New York City! Excited to explore the sights,
              sounds, and energy of this amazing place. 🗽
              <span className="text-blue-600"> #NYC #Travel</span>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <img
                src="https://s3-alpha-sig.figma.com/img/2d65/288d/6161e095f4e9428169a9591f38f270dd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a9W5~YZfVTV7w2hOtzRDvdJnfVgPARqw-cJiAAqgwVUfemU5uQHFt8Xsu6rsf2xarztpLht4lv3x0B18QULcAY7kKBw90grHgYLD4awr6cUZzaAzA8h5gyz3nmLZd4h3VKJNdamKKWCota92GjT2~0cgKiuUCRV80hp6VxqftSxWYBqTnIFV5UqT3YcSQZ23ra-kTG8atAWxTS8x6l1R68EaEY3dEQSz0DP1iDGNSfAqp2a7NGtAX4E79Y1jnAPflsg3O6J59Z9KSF8IjSa7HqkRe1qlZSPX8mkkGz1s3Onu3y~rxtA1fFM6A7-j9XwNA-3HXgP5FrbiqJKms2aXbg__"
                alt="City 1"
                className="w-full rounded-lg"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/468d/f99b/7970153da6c5da9091d49a21a3df94d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTRgY3WrDWlaoslry-eYF3fMJ4St1g4vXUXYKQTWfiLhADDGNG4ssWovpgYCE0SeDXU2lMpluhSzWlOHgc4rq~pBPooYrUKJ-kpocKTIaBr586Zx6sg5hL0h8xzu~GMEIDMEawloExVwD0dse5znk0grXsRc8QxaMgJu5JsZRjUOER3KniJgZkcwE89OZS7QhXk8mo775A~TWsp6T3TmRaEVHyFHcvixzEEOYnNWpdi83eENYiWOryf8aQCpKrYsr5cmS-8uSk2Jf65M9mIK7W8CdD8c-t9yu5oeBOusor~lQtClgV1bSeEMxb7cRMDY-RRbMVpj~lU7dviAcI~BQA__"
                alt="City 2"
                className="w-full rounded-lg"
              />
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-600 flex items-center gap-1">❤️ 67</p>
              <button
                onClick={togglePopup}
                className="text-blue-600 font-semibold"
              >
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Floating Button */}

        <div className="fixed bottom-4 right-[38%]">
        <button
          onClick={goToCreatePost}
          className="bg-black text-white p-4 rounded-full shadow-lg text-2xl"
        >
          +
        </button>
      </div>

       
      </div>
    );
  };

  return <>{isLoading ? renderIsLoading() : renderPosts()}</>;
};

export default Home;
