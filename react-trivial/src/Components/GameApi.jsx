import React, {useState} from 'react';
import CounterTime from './CounterTime';
import './GameApi.css';

const GameApi = ({
    category,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
    }) => {

      const questionHtml = `<div>${question}</div>`

  /*const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [oneAnswer, setOneAnswer] = useState('');
  const getRandomAnswers = () => {
    const randomAnswers = {incorrect_answers}[Math.floor(Math.random() * incorrect_answers.length)];
    setOneAnswer(randomAnswers);
   
  };
 console.log(incorrectAnswers, 'LOG');*/

      return (
<section className='sectionGame'>
    <article className='game'>
    <div className='gameHeader'>
        <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
    </div>
    <div className='gameContent'>
        <button className='reponse'>
          <h2>{incorrect_answers?.[0]}</h2>
        </button>
        <button className='reponse'>
          <h2>{incorrect_answers?.[1]}</h2>
        </button>
        <button className='reponse'>
          <h2>{correct_answer}</h2>
        </button>
        <button className='reponse'>
          <h2>{incorrect_answers?.[2]}</h2>
        </button>
    </div>
    </article>
    <article className='counter'>
      <div className='categorySelect'>
          <h1>Catégorie</h1>
          <h2>{category}</h2>
      </div>
      <div className='counterQuestion'>
          <h1>Question</h1>
          <h2>1/10</h2>
      </div>
      <div className='counterTime'>
          <h1>Temps restant</h1>
          <h2><CounterTime /></h2>
      </div>
    </article>
</section>
)}

export default GameApi;