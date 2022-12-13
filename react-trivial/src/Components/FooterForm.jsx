import React from "react";
import "./Footer.css";

export default function Footer({ setIsOpen }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comments, setComments] = React.useState("");
  //const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="closer" onClick={() => setIsOpen(false)}>
        Fermer X
      </button>
      <h1>Contact Trivial Game</h1>

      <label>Nom Prénom:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email:</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Commentaires:</label>
      <textarea
        name="comments"
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          //onChange={(e) => setAcceptedTerms(e.target.value)}
        />
        J'accepte les termes utilisateurs de Trivial Game Inc.
      </label>
      <button onClick={() => setIsOpen(false)}>Envoyer</button>
    </form>
  );
}
