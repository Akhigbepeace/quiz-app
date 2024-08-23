import React from "react";
import FingerprintShowcase from "../components/organism/fingerprint-showcase";
import QuizData from "../components/organism/quiz-data";

const Quiz = () => {
  return (
    <div className="xl:flex block">
      <FingerprintShowcase />
      <QuizData />
    </div>
  );
};

export default Quiz;
