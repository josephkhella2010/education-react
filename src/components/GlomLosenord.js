import React, { useState } from "react";

export default function GlomLosenord() {
  const [namn, setnamn] = useState("");
  const [figur, setfigur] = useState("");
  const [inputsvalue, setinputsvalue] = useState([]);
  function handlenamn(e) {
    setnamn(e.target.value);
  }
  function handlefigur(e) {
    setfigur(e.target.value);
  }
  let newUser = { name: namn, figur: figur };
  function handleform() {
    setinputsvalue((oldvalue) => [...oldvalue, newUser]);
    console.log(inputsvalue);
  }
  return (
    <div>
      <div className="Glomlosenord-wrapper">
        <div className="Glomlosenord-container">
          <img src="./foto/logo.png"></img>
          <div className="input-container">
            <div className="input-section">
              <p>Ditt användar namn</p>
              <input type="text" onChange={handlenamn} />
            </div>
            <div className="input-section">
              <p>Rita din figur för att logga in</p>
              <input type="text" onChange={handlefigur} />
            </div>

            <p
              onClick={() => {
                window.location.href = "./GlomFigur";
              }}
            >
              Glömt min figur
            </p>
          </div>
          <button onClick={handleform}>logga in</button>
        </div>
      </div>
    </div>
  );
}
