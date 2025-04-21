import React, { useState } from "react";
import "./QuizSection.css";
import PageWrapper from "./PageWrapper";

function QuizSection() {
  const questions = [
    {
      question: "What is the value of x in the equation 2x + 4 = 10?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
    {
      question: "Which process do plants use to make food?",
      options: ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
      answer: "Photosynthesis",
    },
    {
      question: "What year did World War II end?",
      options: ["1942", "1945", "1939", "1950"],
      answer: "1945",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = () => {
    if (selected === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelected("");
    } else {
      setShowScore(true);
    }
  };

  return (
    <PageWrapper> 
    <div className="quiz-section">
      <h2>Quick Quiz</h2>
      {showScore ? (
        <div className="score-display">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-card">
          <h3>{questions[currentIndex].question}</h3>
          <div className="options">
            {questions[currentIndex].options.map((opt, idx) => (
              <label key={idx} className="option">
                <input
                  type="radio"
                  value={opt}
                  checked={selected === opt}
                  onChange={(e) => setSelected(e.target.value)}
                />
                {opt}
              </label>
            ))}
          </div>
          <button onClick={handleAnswer} disabled={!selected}>
            {currentIndex + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
    </PageWrapper>
  );
}

export default QuizSection;
