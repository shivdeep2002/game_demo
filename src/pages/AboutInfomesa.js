import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutInfomesa = () => {
  // const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(`Selected: ${option}`);
    localStorage.setItem("field", option);
  };

  const handlePlayClick = () => {
    if (email && company) {
      localStorage.setItem("email", email);
      localStorage.setItem("company", company);
      navigate("/quiz");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh] w-full">
      {!selectedOption ? (
        <div className="w-[40vw] h-[32vh] flex items-center justify-center flex-col shadow-lg">
          <h2 className="text-2xl text-center mt-2">What are you?</h2>
          <div className="flex justify-center space-x-5 mt-5 items-center">
            <p
              className={`cursor-pointer px-2 border-2 ${
                selectedOption === "Developer"
                  ? "border-blue-500"
                  : "border-gray-300"
              } p-1`}
              onClick={() => handleOptionClick("Developer")}
            >
              Developer
            </p>
            <p
              className={`cursor-pointer border-2 ${
                selectedOption === "UI_UX_Designer"
                  ? "border-blue-500"
                  : "border-gray-300"
              } p-1`}
              onClick={() => handleOptionClick("UI_UX_Designer")}
            >
              UI/UX Designer
            </p>
            <p
              className={`cursor-pointer px-2 border-2 ${
                selectedOption === "Product_Manager"
                  ? "border-blue-500"
                  : "border-gray-300"
              } p-1`}
              onClick={() => handleOptionClick("Product_Manager")}
            >
              Product Manager
            </p>
            <p
              className={`cursor-pointer px-2 border-2 ${
                selectedOption === "Data_Scientist"
                  ? "border-blue-500"
                  : "border-gray-300"
              } p-1`}
              onClick={() => handleOptionClick("Data_Scientist")}
            >
              Data Scientist
            </p>
          </div>
        </div>
      ) : (
        <div className=" p-10 shadow-lg ">
          <div className="flex flex-col gap-5 w-80 ">
            <h2>Company Information</h2>
            <input
              type="text"
              placeholder="Enter company"
              className="border-2 p-2 w-full max-w-[40vw]"
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="border-2 p-2 w-full max-w-[40vw]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            disabled={!email || !company}
            onClick={handlePlayClick}
            className="mt-6 px-20 py-2 text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutInfomesa;
