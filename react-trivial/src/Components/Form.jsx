import React, {Components } from 'react';
import ReactDOM from "react-dom";



export default function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comments, setComments] = React.useState('');
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Nom: ${name}
      Email: ${email}
      Commentaires: ${comments}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Trivial Game</h1>

      <label>
        Nom Prénom:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

     

      <label>
        Commentaires:
        <input
          name="comments"
          type="textarea"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />
      </label>

      

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={(e) => setAcceptedTerms(e.target.value)}
          required
        />
        J'accepte les termes utilisateurs
      </label>

      <button>Submit</button>
    </form>
  );
}