/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useLayoutEffect, useState } from "react";
import Quese from "../Component/Quese";
import { useNavigate } from "react-router-dom";

const Developer = [
  [
    {
      index: 0,
      question: "What is the primary purpose of CSS?",
      options: [
        "To structure and format the content of a web page",
        "To style the appearance of a web page",
        "To animate the appearance of a web page",
        "To create interactive elements on a web page",
      ],
      correctAnswer: "To style the appearance of a web page",
    },
  ],
  [
    {
      index: 1,
      question: "Which CSS property is used to create a gradient effect?",
      options: [
        "background-image",
        "background-color",
        "background-size",
        "background-repeat",
      ],
      correctAnswer: "background-image",
    },
  ],
  [
    {
      index: 2,
      question:
        "Which CSS property is used to change the font size of an element?",
      options: ["font-size", "font-family", "font-weight", "font-style"],
      correctAnswer: "font-size",
    },
  ],
  [
    {
      index: 3,
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["color", "text-size", "background-color", "font-family"],
      correctAnswer: "color",
    },
  ],
  [
    {
      index: 4,
      question:
        "Which CSS property is used to change the font style of an element?",
      options: ["font-style", "font-size", "text-decoration", "font-family"],
      correctAnswer: "font-style",
    },
  ],
];

const UI_UX_Designer = [
  [
    {
      index: 0,
      question: "What does UX stand for in the context of web design?",
      options: [
        "User Experience",
        "User Experiment",
        "Unified Experience",
        "Unified Experiment",
      ],
      correctAnswer: "User Experience",
    },
  ],
  [
    {
      index: 1,
      question:
        "Which of the following is a common tool used for creating wireframes?",
      options: ["Photoshop", "Sketch", "HTML", "JavaScript"],
      correctAnswer: "Sketch",
    },
  ],
  [
    {
      index: 2,
      question:
        "Which principle focuses on making user interfaces more intuitive and easy to use?",
      options: [
        "Usability",
        "Accessibility",
        "Responsiveness",
        "Design Thinking",
      ],
      correctAnswer: "Usability",
    },
  ],
  [
    {
      index: 3,
      question: "What is the purpose of a user persona?",
      options: [
        "To define target audience characteristics",
        "To create a website's sitemap",
        "To determine the color scheme",
        "To test website performance",
      ],
      correctAnswer: "To define target audience characteristics",
    },
  ],
  [
    {
      index: 4,
      question: "Which tool is commonly used for prototyping in UI/UX design?",
      options: ["InVision", "Sublime Text", "Visual Studio Code", "Xcode"],
      correctAnswer: "InVision",
    },
  ],
];

const Product_Manager = [
  {
    question: "What is the primary role of a Product Manager?",
    options: [
      "To develop product features",
      "To manage the sales team",
      "To define the product roadmap",
      "To conduct market research",
    ],
    correctAnswer: "To define the product roadmap",
  },
  {
    question:
      "Which methodology is commonly used by Product Managers to manage product development?",
    options: ["Agile", "Waterfall", "Six Sigma", "Lean"],
    correctAnswer: "Agile",
  },
  {
    question: "What is a Minimum Viable Product (MVP)?",
    options: [
      "A fully-featured product ready for launch",
      "A product with just enough features to satisfy early customers",
      "A prototype for testing design concepts",
      "A version of the product used only for marketing",
    ],
    correctAnswer:
      "A product with just enough features to satisfy early customers",
  },
  {
    question:
      "Which tool is commonly used for product management and project tracking?",
    options: ["Trello", "Photoshop", "WordPress", "MySQL"],
    correctAnswer: "Trello",
  },
  {
    question: "What is the importance of a product backlog?",
    options: [
      "It lists all the tasks for the development team",
      "It defines the technical requirements of the product",
      "It prioritizes the features to be developed",
      "It tracks the marketing activities",
    ],
    correctAnswer: "It prioritizes the features to be developed",
  },
];

const Data_Scientist = [
  {
    question:
      "Which programming language is most commonly used in data science?",
    options: ["Python", "Java", "C++", "Ruby"],
    correctAnswer: "Python",
  },
  {
    question: "What is the purpose of a confusion matrix in data science?",
    options: [
      "To calculate data redundancy",
      "To evaluate the accuracy of a classification model",
      "To visualize data distribution",
      "To track the performance of SQL queries",
    ],
    correctAnswer: "To evaluate the accuracy of a classification model",
  },
  {
    question: "Which method is used to reduce the dimensionality of data?",
    options: [
      "PCA (Principal Component Analysis)",
      "Linear Regression",
      "Random Forest",
      "Clustering",
    ],
    correctAnswer: "PCA (Principal Component Analysis)",
  },
  {
    question: "What does the term 'overfitting' mean in machine learning?",
    options: [
      "A model that performs well on training data but poorly on new data",
      "A model that has too few parameters",
      "A model that is computationally expensive",
      "A model that generalizes well across different datasets",
    ],
    correctAnswer:
      "A model that performs well on training data but poorly on new data",
  },
  {
    question: "Which library is commonly used for data manipulation in Python?",
    options: ["Pandas", "NumPy", "TensorFlow", "Keras"],
    correctAnswer: "Pandas",
  },
];

const CSSQuiz = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedData, setSelectedData] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [imageCount, setImageCount] = useState(3);
  const [wrongImageCount, setWrongImageCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");

  useLayoutEffect(() => {
    const storedAnswer = localStorage.getItem("field");
    if (storedAnswer == "Developer") {
      setSelectedData(Developer);
    }
    if (storedAnswer) {
      setDesignation(storedAnswer);
    }
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
    if (localStorage.getItem("company")) {
      setCompany(localStorage.getItem("company"));
    }
    console.log(selectedOption, "sachin");
  }, [selectedOption]);

  const handleOptionNext = () => {
    // Ensure that selectedOption[index] exists before accessing its properties
    if (selectedOption[index]) {
      console.log(selectedOption, correctAnswer, "currentQuestion");
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      } else {
        setImageCount(imageCount - 1);
        setWrongImageCount(wrongImageCount + 1);
      }

      setIndex(index + 1);
      setSelectedOption("");
    } else {
      console.error("selectedOption[index] is undefined.");
    }
  };

  const handleSubmit = () => {
    if (email && company && name) {
      // Create the current user's data object
      const newUser = {
        name: name,
        email: email,
        company: company,
        designation: designation,
        questionsCorrected: score,
        totalQuestions: selectedData.length,
        hero: score >= 4 ? "true" : "false",
      };

      // Retrieve existing users from localStorage, or initialize an empty array if none exist
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Add the new user to the array
      users.push(newUser);

      // Save the updated array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Navigate to the next page with the selected image as a parameter
      navigate("/");
      setName("");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-400 text-white font-comfortaa min-h-[95vh] flex flex-col items-center ">
      <div className="relative w-full mb-20 p-4">
        <div className="flex  gap-3 absolute right-4 ">
          {wrongImageCount >= 1 && (
            <img
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg"
              alt="image"
              className="h-10 w-10 bg-red-300"
            />
          )}{" "}
          {wrongImageCount >= 2 && (
            <img
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg"
              alt="image"
              className="h-10 w-10 bg-red-300"
            />
          )}{" "}
          {wrongImageCount >= 3 && (
            <img
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg"
              alt="image"
              className="h-10 w-10 bg-red-300"
            />
          )}
          {imageCount >= 1 && (
            <img
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg"
              alt="image"
              className="h-10 w-10 "
            />
          )}
          {imageCount >= 2 && (
            <img
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg"
              alt="image"
              className="h-10 w-10"
            />
          )}
          {imageCount >= 3 && (
            <img
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg"
              alt="image"
              className="h-10 w-10"
            />
          )}
        </div>
      </div>
      {selectedData[index] &&
        Array.isArray(selectedData[index]) &&
        selectedData[index].map((data) => (
          <Quese
            data={data}
            key={data.question}
            setCorrectAnswer={setCorrectAnswer}
            correctAnswer={correctAnswer}
            handleOptionNext={handleOptionNext}
            setScore={setScore}
            score={score}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            selectedData={selectedData}
          />
        ))}

      {/* Repeat similar sections for the other questions */}

      {/* Score Counter */}
      <div className="fixed top-2 right-2 bg-black bg-opacity-75 text-white py-2 px-6 rounded-lg shadow-inner">
        <p className="text-center">CORRECT: {selectedData ? score : 0}</p>
      </div>

      {/* Game Over Page */}
      {index === selectedData?.length && (
        <section
          id="game-over"
          className=" text-white min-h-screen w-full flex mt-40  justify-center"
        >
          <div className="text-center">
            <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              You Won The Game
            </h1>
            <h2 className="mt-4 text-xl">
              Total Score: {selectedOption ? score : 0}/5
            </h2>
            <input
              className="text-black p-2 w-3/4 bg-transparent border mt-5"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />

            <button
              disabled={name === ""}
              type="button"
              onClick={handleSubmit}
              className="mt-6 w-3/4 py-2  bg-pink-300 text-black font-semibold hover:bg-pink-200 transition"
            >
              Submit
            </button>
          </div>
        </section>
      )}

      {/* Refresh Page Section */}
      {/* <section
        id="refresh"
        className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center"
      >
        <svg
          className="animate-pulse w-12 h-12 mb-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 341.12 341.33"
        >
          <path
            className="fill-white"
            d="M341.23,149.33V0L291.09,50.13A169.56,169.56,0,0,0,170.56,0C76.27,0,.11,76.37.11,170.67S76.27,341.33,170.56,341.33c79.47,0,146-54.4,164.91-128H291.09A127.94,127.94,0,1,1,170.56,42.67c35.31,0,67,14.72,90.13,37.86l-68.8,68.8Z"
            transform="translate(-0.11)"
          />
        </svg>
        <h2 className="text-center text-xl">
          Refresh/Reload this page to continue
        </h2>
      </section> */}
    </div>
  );
};

export default CSSQuiz;
