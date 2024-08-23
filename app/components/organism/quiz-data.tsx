"use client";

import React, { useState, useEffect } from "react";
import UserProfile from "../molecule/user-profile";
import Image from "next/image";
import Typography from "../atom/typography";
import { useRouter } from "next/navigation";

const checkmark = "/assets/check.png";

// Define the shape of your quiz question object
interface QuizQuestion {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: string;
}

const QuizData = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch quiz data from the JSON file
    fetch("/quiz-data.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      if (questions[currentIndex].answer === selectedAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      setSelectedAnswer(null);

      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }
  };

  const handleBack = () => router.push("/");

  if (quizComplete) {
    const completedQuiz = "/assets/completed-quiz.png";
    return (
      <div className="lg:w-1/2 lg:py-16 lg:px-32 lg:flex block flex-col items-center text-center justify-center">
        <div className="relative lg:w-[384px] w-[300px] h-[256px] mb-3 mx-auto ">
          <Image src={completedQuiz} alt="showcase" fill />
        </div>

        <Typography variant="h4" weight="extraBold" color="secondaryColor">
          You answered {score}/{questions.length} questions correctly.
        </Typography>

        <button
          type="submit"
          className="w-full bg-primaryColor text-white rounded-lg border py-3 text-center h-11 mt-10"
          onClick={handleBack}
        >
          Done
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const { question, options } = questions[currentIndex];

  return (
    <div className="lg:w-1/2">
      <UserProfile />
      <div className="py-16 lg:px-32 px-5">
        <div className="flex items-center justify-between mb-8">
          <button
            className="bg-[#F5F3FC] py-2 px-3 rounded"
            onClick={handleBack}
          >
            Back
          </button>

          <Image src={checkmark} alt="showcase" width={26} height={32} />

          <Typography variant="p" weight="light" color="secondaryColor">
            {currentIndex + 1} of {questions.length}
          </Typography>
        </div>

        <div className="mt-14">
          <Typography variant="h3" weight="extraBold" color="secondaryColor">
            {question}
          </Typography>

          <div className="mt-6 flex flex-col gap-4">
            {Object.entries(options).map(([key, value]) => (
              <button
                key={key}
                className={`w-full   rounded-lg border py-3 text-center h-11 ${
                  selectedAnswer === key
                    ? "bg-[#3F0DC50D] border-primaryColor "
                    : ""
                }`}
                onClick={() => handleOptionClick(key)}
              >
                {value}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-primaryColor text-white rounded-lg border py-3 text-center h-11"
            onClick={handleSubmit}
          >
            {currentIndex < questions.length - 1 ? "Submit" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizData;
