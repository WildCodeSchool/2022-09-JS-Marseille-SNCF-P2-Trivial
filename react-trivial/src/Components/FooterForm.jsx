import React from "react";
import "./Footer.css";

function FooterForm({ setIsOpen }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comments, setComments] = React.useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="formFoot" onSubmit={handleSubmit}>
      <button className="closerFoot" onClick={() => setIsOpen(false)}>
        Closed X
      </button>
      <h1>Trivial Game Contact</h1>
      <label id="label1">Name Firstname:</label>
      <input
        id="input1"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label id="label2">Email:</label>
      <input
        id="input2"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label id="label3">Comments:</label>
      <textarea id="input3"
        name="comments"
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
        <label id="label4"></label>
        <input id="input4" name="acceptedTerms" type="checkbox" />I accept the
        terms of use of Trivial Game Inc.
        <button id="button" onClick={() => setIsOpen(false)}>Send</button>
    </form>
  );
}
export default FooterForm;
