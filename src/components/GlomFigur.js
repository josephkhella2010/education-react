import React from "react";

export default function GlomFigur() {
  return (
    <div className="glomfigur-wrapper">
      <div className="glomfigur-container">
        <img src="./foto/logo.png"></img>
        <div className="button-container">
          <button>Logga in med faceID</button>
          <button>Logga in med användar namn och lösenord</button>
          <button>Kontakta IT</button>
        </div>
      </div>
    </div>
  );
}
