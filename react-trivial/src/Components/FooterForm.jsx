import React from "react";
import "./Footer.css";

function FooterForm({ setIsOpen }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comments, setComments] = React.useState("");
  //const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="formFoot" onSubmit={handleSubmit}>
      <button className="closerFoot" onClick={() => setIsOpen(false)}>
        Closed X
      </button>
      <h1>Trivial Game Contact</h1>
      <label>Name Firstname:</label>
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
      <label>Comments:</label>
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
        />
        I accept the terms of use of Trivial Game Inc.
      </label>
      <button onClick={() => setIsOpen(false)}>Send</button>
    </form>
  );
}
export default FooterForm;
