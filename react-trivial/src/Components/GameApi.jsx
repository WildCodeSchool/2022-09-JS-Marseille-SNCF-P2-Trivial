import React, {useEffect, useState} from 'react';
import CounterTime from './CounterTime';
import './GameApi.css';

const GameApi = ({
    secs,
    category,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
    selectedCategory
    }) => {

const [correctAnswers, setCorrectAnswers] = useState("");
const [selectAnswer, setSelectAnswer] = useState("");
const [currentQuestion, setCurrentQuestion] = useState(0);
const [isActive, setIsActive] = useState(false);

const questionHtml = `<div>${question}</div>`

const allAnswers = incorrect_answers?.concat([correct_answer]);
const randomAllAnswers = allAnswers?.sort();

const toggleClass = () => {
  setIsActive(!isActive)
}

const handleSelect = (answer) => {
  setSelectAnswer(answer)
  toggleClass()
  console.log("réponse :",selectAnswer)
  if (answer === correct_answer) {    
    setCorrectAnswers(correct_answer)
  } else if (incorrect_answers.includes(answer)) {
};

const nextQuestion = (question) => {
  if ((secs === 0) || handleSelect(answer)) {
// ???????
  }
}
console.log("Question :", currentQuestion)
}

// return in JSX
      return (
<section className='gameSection'>
    <article className='game'>
    <div className='gameHeader'>
        <h2 onChange={currentQuestion} dangerouslySetInnerHTML={{__html: question}}></h2>
    </div>
    <div className='gameContent'>
      {randomAllAnswers?.map((answer, index) => (
        <>
        <button key={index}
          className={`button ${isActive ? answer === correct_answer ? "correct" : "wrong" : ""}`}
          onClick={() => handleSelect(answer)} >
          <h2>{answer}</h2>
        </button>
        </>
      ))
      }
    </div>
    </article>
    <article className='counter'>
      <div className='counterCategory'>
          <h1>Category</h1>
          <h2>{category}</h2>
      </div>
      <div className='counterQuestion'>
          <h1>Question</h1>
          <h2>1/10</h2>
      </div>
      <div className='counterTime'>
          <h1>Time left</h1>
          <h2><CounterTime secs={secs}/></h2>
      </div>
    </article>
</section>
)}

export default GameApi;