import { useState, useEffect } from "react";
import questions from "./assets/questions.json";
import QuestionBoxProps from "./QuestionBoxProps.tsx";
import Question from "./Question.tsx";

const defaultQuestion: Question = {
  question: "",
  answer: [],
  translation: "",
};

function QuestionBox({ input, setInput }: QuestionBoxProps) {
  const [currentQuestion, setCurrentQuestion] = useState(defaultQuestion);

  function goToNextQuestion() {
    // don't allow the same question to be asked twice in a row//

    
    let nextQuestion = getRandomQuestion();
    while (nextQuestion === currentQuestion) {
      nextQuestion = getRandomQuestion();
    }
    setInput("");
    setCurrentQuestion(nextQuestion);
  }

  // verify if the input is correct and then change the question//
  useEffect(() => {
    currentQuestion.answer.forEach((answer) => {
      if (input === answer) {
        goToNextQuestion();
      }
    });
  }
  , [input]);

  //this useeffect has no deppendencies so it only runs once//
  useEffect(() => {
    goToNextQuestion();
  }, []);

  function getRandomQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
  }

  return (
    <div className="QuestionBox">
      <p className="text-white text-5xl">
        {currentQuestion.question}
      </p>
    </div>
  );
}

export default QuestionBox;
