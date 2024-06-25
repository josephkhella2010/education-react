import React from "react";

export default function Footer() {
  return (
    <nav className="footer">
      <div className="footer-nav">
        <div className="footer-left-content">
          <div className="logo">
            <a href="/">
              <img src="./foto/logo.png"></img>
            </a>
          </div>
          <div className="kontakt-footer">
            <h1>kontakt</h1>
            <a href="tel:070-000000">Telefon: 070-000000</a>
            <p>Address: hejpå dig 56 </p>
          </div>
        </div>
        <div className="right-content">
          <div className="frist-section">
            <h1>Genvägar</h1>
            <p>topic</p>
            <p>topic</p>
            <p>topic</p>
            <p>topic</p>
          </div>
          <div className="second-section">
            <h1>kontakt</h1>
            <p>topic</p>
            <p>topic</p>
            <p>topic</p>
            <p>topic</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
