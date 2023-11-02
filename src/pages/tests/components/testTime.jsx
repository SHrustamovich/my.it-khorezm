import { useState, useEffect } from "react";

const TestPerformance = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime <= 0 ? 10 : prevTime - 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setRemainingTime(10);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setRemainingTime(10);
  };

  useEffect(() => {
    if (remainingTime === 0) {
      handleNextQuestion();
    }
  }, [remainingTime]);

  return (
    <div className="test-performance-framework">
      <div className="question">
        <p>Question ${currentQuestion + 1}</p>
        <p>${remainingTime} seconds left</p>
      </div>
      <div className="buttons">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous Question
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestion === 4}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default TestPerformance;
