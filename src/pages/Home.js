/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [topHeroes, setTopHeroes] = useState([]);
  useLayoutEffect(() => {
    const allUserData = localStorage.getItem("users");
    if (allUserData) {
      setAllUsers(JSON.parse(allUserData));
    }
  }, []);

  useEffect(() => {
    // Filter the data to only include items where hero is "true"
    if (allUsers) {
      const heroes = allUsers.filter((item) => item.hero === "true");
      console.log(heroes, "heros");
      // Get the top 10 items
      const top10Heroes = heroes.slice(0, 10);
      console.log(top10Heroes, "top10heros");
      // Save the filtered data in another state
      setTopHeroes(top10Heroes);
    }
  }, [allUsers]); // This effect runs whenever 'data' changes

  console.log(allUsers, topHeroes, "all users");

  const navigate = useNavigate();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePlayClick = () => {
    if (selectedImage) {
      // Navigate to the next page with the selected image as a parameter
      navigate(`/about`);
    } else {
      alert("Please select an image first.");
    }
  };
  return (
    <div className="flex w-full ">
      <div className=" h-[90vh] w-[70%]">
        <div className="w-full flex flex-col justify-center h-full items-center ">
          <div className="w-[40vw] text-start ">
            <h1 className="text-4xl ">Welcome to the Home Page</h1>
            <p className="mt-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod faucibus sem, vel elementum felis semper ut. Sed vel nisi
              at arcu tristique semper. Aliquam erat volutpat.
            </p>
            <div className=" mt-12">
              <div className="flex space-x-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO4kw4CJYq4u79F13XGgysu28MPNqUbPG8Q&s" // Replace with your first image URL
                  alt="Image 1"
                  className={`cursor-pointer border-2 w-1/2 ${
                    selectedImage === "Image 1"
                      ? "border-blue-500"
                      : "border-gray-300"
                  } p-1`}
                  onClick={() => handleImageClick("Image 1")}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO4kw4CJYq4u79F13XGgysu28MPNqUbPG8Q&s" // Replace with your second image URL
                  alt="Image 2"
                  className={`cursor-pointer border-2 w-1/2 ${
                    selectedImage === "Image 2"
                      ? "border-blue-500"
                      : "border-gray-300"
                  } p-1`}
                  onClick={() => handleImageClick("Image 2")}
                />
              </div>
              <div className="w-full flex flex-col items-center text-2xl mt-5 ">
                <p className="">Privacy Hero or Zero?</p>

                <button
                  onClick={handlePlayClick}
                  className="w-[25vw] px-20 py-2 mt-5 text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border w-[30%]">
        <h2 className="text-2xl text-center mt-5">Leader Board</h2>

        <div className="w-full pr-5">
          <div className="w-full text-right">
            <p>All User : {allUsers.length}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col px-3 gap-5 w-full ">
            <h2>Top Heroes</h2>
            <div className="flex flex-col">
              {topHeroes.map((hero, index) => (
                <div
                  key={index}
                  className="w-full gap-2 border-b flex items-center p-1 "
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO4kw4CJYq4u79F13XGgysu28MPNqUbPG8Q&s"
                    alt=""
                    className="object-cover h-14 w-14 rounded-full border p-1"
                  />
                  <div className="w-full flex justify-between gap-2">
                    <span className="text-sm"> {hero.name}</span>
                    <span className="">
                      {" "}
                      {"("}
                      {hero.company}
                      {")"}
                    </span>
                    <span className=""> {hero.questionsCorrected}</span>
                    {/* <span className=""> {hero.email}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
