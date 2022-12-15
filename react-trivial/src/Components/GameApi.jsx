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

// encodage HTML 
  const questionHtml = `<div>${question}</div>`
// ------------

// questions en position aléatoire 
  //const [allAnswers, setAllAnswers] = useState([...incorrect_answers, correct_answer]); 
  /*const getRandomNumbers = () => {
      Math.floor(Math.random() * 5);
  };*/
  
// ------------

      return (
<section className='sectionGame'>
    <article className='game'>
    <div className='gameHeader'>
        <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
    </div>
    <div className='gameContent'>
        <button className='reponse'>
          <h2>{}</h2>
        </button>
        <button className='reponse'>
          <h2>{}</h2>
        </button>
        <button className='reponse'>
          <h2>{}</h2>
        </button>
        <button className='reponse'>
          <h2>{}</h2>
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