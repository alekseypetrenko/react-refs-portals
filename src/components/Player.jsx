import { useState } from "react";

export default function Player() {
  const [submitted, setSubmitted] = useState(false);
  const [enteredPlayername, setEnteredPlayername] = useState("");

  function handlePlayer() {
    setSubmitted(true);
  }

  function handleChange(e) {
    setEnteredPlayername(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayername : "unknown"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayername} />
        <button onClick={handlePlayer}>Set Name</button>
      </p>
    </section>
  );
}
