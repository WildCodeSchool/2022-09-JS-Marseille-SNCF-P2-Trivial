import React, {useState} from 'react';
import CounterTime from './CounterTime';
import './GameApi.css';

const GameApi = ({
    game,
    category,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
    }) => {

const [number, setNumber] = useState(0);
const [correctAnswers, setCorrectAnswers] = useState(0);
const [selectAnswer, setSelectAnswer] = useState();
const [currentQuestion, setCurrentQuestion] = useState(0);
const [isActive, setIsActive] = useState(false);
const [error, setError] = useState(false);

// html encoding question
const questionHtml = `<div>${question}</div>`

// correct and incorrect answers in the same array
const allAnswers = incorrect_answers?.concat([correct_answer]);
//console.log(allAnswers, "là");

const randomAllAnswers = allAnswers?.sort();
//console.log(randomAllAnswers, "bas");

// click button answer
const toggleClass = () => {
  setIsActive(!isActive)
}

// function correct answer
const handleClick = (answer) => {
  toggleClass()
  setSelectAnswer(answer)

  if (answer === correct_answer) {
    alert ("gagné")
    
    setCorrectAnswers()
  } else {
    alert ("perdu")
  };
  console.log(answer, "combien")
}

// next question
const nextQuestion = (currentQuestion) => {
  setCurrentQuestion((currentQuestion) => currentQuestion + 1);
console.log(question, "question")
}

// return in JSX
      return (
<section className='gameSection'>
    <article className='game'>
    <div className='gameHeader'>
        <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
    </div>
    <div className='gameContent'>
      {randomAllAnswers?.map((answer, index) => (
        <>
        <button key={index} className={isActive ? "buttonIsActive" : "button"}>
          <h2 onClick={() =>handleClick(answer)}>{answer}</h2>
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
          <h2><CounterTime /></h2>
      </div>
    </article>
</section>
)}

export default GameApi;