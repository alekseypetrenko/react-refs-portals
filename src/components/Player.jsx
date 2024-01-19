import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayername, setEnteredPlayername] = useState("");

  function handleClick() {
    setEnteredPlayername(playerName.current.value);
  }

  function handleChange() {
    setEnteredPlayername(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayername && "unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
