import React from "react";
import OmossMobile from "./OmossMobile";

export default function Omoss() {
  let arr = [
    {
      url: "./foto/second-omoss.png",
      head: "Där kunskap och kreativt skapande möts",
      text: "Entréskolan drivs av en vilja att utveckla lärandet och de estetiska uttrycksformerna där varje elev får vara kreativ och aktiv i sitt lärande."
    },
    {
      url: "./foto/third-omoss.png",
      head: "Följer den svenska läroplanen",
      text: "Entréskolan är politiskt och religiöst obunden fristående skola. Vårt arbetssätt och pedagogiska tankar grundar sig på den svenska läroplanen och skollagen. Vi genomför de nationella proven och sätter betyg utifrån det svenska betygssystemet.Skolinspektionen kontrollerar vår verksamhet regelbundet för att säkerställa Entréskolans kvalitet och resultat."
    },
    {
      url: "./foto/fourth-omoss.png",
      head: "Vision",
      text: " vision med Entréskolan är att utveckla lärandet och skolan i ett långsiktigt perspektiv för att skapa en lärmiljö där eleverna får växa och utvecklas till handlingskraftiga och kreativa individer med en framtidstro på sig själva."
    }
  ];
  return (
    <div className="omoss-wrapper">
      <div className="line"></div>
      <div className="omoss-frist-container">
        <div className="left-content">
          <h2>Om Rosendalskolan</h2>
          <p>
            rosendalskolan är den personliga skolan med den stora ambitionen
            belägen i Västerås.
          </p>
          <h2>Det här är Rosendalskolan</h2>
          <p>
            Skolan startade höstterminen 2008 och har sedan dess vuxit både i
            kvantitet och kvalitet. Idag är vi en väletablerad grundskola med
            500 elever från förskoleklass till årskurs 9. Vi bedriver skolan i
            helt nyrenoverade lokaler och har en trevlig skolgård utrustad efter
            elevernas önskemål. År 2020 bytte vi namn till Noblaskolan och i
            samband med det utökades skolan även med ett högstadium.
          </p>
        </div>
        <div className="right-content">
          <div className="right-div">
            <h3>Våra bloggar</h3>
            <div className="foto">
              <img src="./foto/frist-omoss.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="omoss-second-container">
        <div className="omoss-content">
          <h2>Rosendal skolan </h2>
          <div className="bottom-section">
            {arr.map((item, index) => {
              return (
                <div className="bottom-div" key={index}>
                  <img src={item.url}></img>
                  <div className="text-div">
                    <h4>{item.head}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="omoss-third-container">
        <div className="omoss-content">
          <img src="./foto/femth-omoss.png"></img>
          <button
            onClick={() => {
              window.location.href = "/Kontakt";
            }}
          >
            Kontakta Oss
          </button>
        </div>
      </div>
    </div>
  );
}
