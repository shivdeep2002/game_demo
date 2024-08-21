import React, { useLayoutEffect, useState } from "react";

const Quese = ({
  data,
  correctAnswer,
  setCorrectAnswer,
  handleOptionNext,
  setScore,
  score,
  setSelectedOption,
  selectedOption,
  selectedData,
}) => {
  const wrongIcon =
    "https://res.cloudinary.com/dvhndpbun/image/upload/v1588517753/jfdedgwfzexf4hjin.svg";
  const correctIcon =
    "https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg";

  const [isCorrect, setIsCorrect] = useState(null);

  useLayoutEffect(() => {
    setCorrectAnswer(data.correctAnswer);
  }, [data, setCorrectAnswer]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === data.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const getOptionClass = (option) => {
    if (selectedOption === option) {
      return isCorrect ? "bg-green-400" : "bg-red-400";
    }
    return "bg-gray-300";
  };

  const getIcon = (option) => {
    if (selectedOption === option && isCorrect !== null) {
      return isCorrect ? correctIcon : wrongIcon;
    }
    return null; // No icon should be displayed before selection
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-lg mx-auto bg-opacity-30 bg-gray-100 rounded-lg p-8 mb-32">
        <div className="text-center">
          <h3 className="text-2xl">Pure Quiz</h3>
          {/* <p className="mt-4">
            QUESTION {data.index + 1} OF {selectedData?.length}
          </p> */}
          <p>{data.question}</p>
        </div>
        <form className="mt-8">
          <div className="space-y-4">
            {data.options.map((option, index) => (
              <div key={index} className="relative">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="quiz-options"
                  value={option}
                  onChange={handleOptionChange}
                  className="absolute w-1 h-1 opacity-0"
                />
                <label
                  htmlFor={`option-${index}`}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition ${getOptionClass(
                    option
                  )}`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="bg-black text-white rounded px-2 py-1">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-black">{option}</span>
                  </span>
                  {getIcon(option) && (
                    <img className="w-5 h-5" src={getIcon(option)} alt="" />
                  )}
                </label>
              </div>
            ))}
          </div>
          <button
            disabled={selectedOption === ""}
            type="button"
            onClick={handleOptionNext}
            className="mt-6 w-3/4 mx-auto block py-2 rounded-lg bg-pink-300 text-black font-semibold hover:bg-pink-200 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quese;
