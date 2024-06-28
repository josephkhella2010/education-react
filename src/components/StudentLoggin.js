import { React, useState } from "react";

export default function StudentLoggin() {
  const [inputvalue, setinputvalue] = useState("");
  function handleInput(event) {
    setinputvalue(event.target.value);
    console.log(inputvalue);
  }
  return (
    <div className="studentloggin-wrapper">
      <div className="studentloggin-container">
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
        <p>Elev</p>
      </div>
    </div>
  );
}
