import { React, useState } from "react";

export default function LarareLoggin() {
  const [inputvalue, setinputvalue] = useState("");
  function handleInput(event) {
    setinputvalue(event.target.value);
    console.log(inputvalue);
  }
  return (
    <div className="larareloggin-wrapper">
      <div className="larareloggin-container">
        <img src="./foto/logo.png"></img>
        <h3>Rita din figur för att logga in</h3>
        <input type="text" onChange={handleInput} />
        <p
          onClick={() => {
            window.location.href = "./GlomFigur";
          }}
        >
          Glömt min figur
        </p>
        <p>Lärare</p>
      </div>
    </div>
  );
}
