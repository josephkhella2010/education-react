import React from "react";

export default function Loggin() {
  return (
    <div className="loggin-wrapper">
      <div className="loggin-content">
        <img src="./foto/logo.png"></img>
        <p>vad är din roll i skolan</p>
        <div className="button-container">
          <button
            onClick={() => {
              window.location.href = "./StudentLoggin";
            }}
          >
            student
          </button>
          <button
            onClick={() => {
              window.location.href = "./LarareLoggin";
            }}
          >
            lärare
          </button>
        </div>
      </div>
    </div>
  );
}
