import { React, useState } from "react";

export default function Navbar() {
  const [active, setactive] = useState(false);

  function handleHamBar() {
    setactive((c) => !c);
  }
  let addclass = active ? "active" : "";
  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <a href="/">
            <img src="./foto/logo.png"></img>
          </a>
        </div>
        <div className="hambar" onClick={handleHamBar}>
          <div className={`line ${addclass}`}></div>
          <div className={`line ${addclass}`}></div>
          <div className={`line ${addclass}`}></div>
        </div>
        <ul className={addclass}>
          <li>
            <a href="/Skolan">Skolan</a>
          </li>
          <li>
            <a href="/Koanmal">Köanmalan</a>
          </li>
          <li>
            <a href="/EleveBloggar">Elev Bloggar</a>
          </li>
          <li>
            <a href="/Jobbarmedoss">Jobbar med oss </a>
          </li>
          <li>
            <a href="/Omoss">Om Oss </a>
          </li>
          <li>
            <a href="/Kontakt">Kontakt </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
