import React, { useState } from "react";

export default function LogginAnvandnamn() {
  const [inputsvalue, setinputsvalue] = useState([]);
  const [namn, setnamn] = useState("");
  const [password, setpassword] = useState("");

  function handleInamn(e) {
    setnamn(e.target.value);
  }
  function handlepassword(e) {
    setpassword(e.target.value);
  }
  let newuser = { name: namn, pass: password };
  function handleform() {
    setinputsvalue((oldvalue) => [...oldvalue, newuser]);
    console.log(inputsvalue);
  }
  return (
    <div className="logginmednamn-wrapper">
      <div className="logginmednamn-container">
        <img src="./foto/logo.png"></img>
        <div className="input-container">
          <div className="input-section">
            <p>Ditt användar namn</p>
            <input type="text" onChange={handleInamn} />
          </div>
          <div className="input-section" onChange={handlepassword}>
            <p>Ditt lösenord</p>
            <input type="password" />
          </div>

          <p
            onClick={() => {
              window.location.href = "./GlomLosenord";
            }}
          >
            Glömt lösenord?
          </p>
        </div>
        <button onClick={handleform}>submit</button>
      </div>
    </div>
  );
}
