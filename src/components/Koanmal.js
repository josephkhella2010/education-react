import React from "react";

export default function Koanmal() {
  /* arr 2 */
  let arr = [
    {
      id: 1,
      head: "Läs på om skolan",
      text: "Innan du söker till skolan kan det vara en bra idé att läsa lite mer om oss och hur vi jobbar på rosendalskolan."
    },
    {
      id: 2,
      head: "Besök oss",
      text: "Besök oss på öppet hus eller gå på någon av våra visningar för att få en uppfattning om hur förskolan eller skolan fungerar."
    },
    {
      id: 3,
      head: "Ställ dig i kö",
      text: "När du känner dig redo fyller du i vårt ansöknigsformulär Skicka in det för att ansöka till skolan."
    },
    {
      id: 4,
      head: "Antagningsbesked",
      text: "Vi återkommer med erbjudande om plats, som du sedan får tacka ja till. Kom ihåg att du måste tacka ja inom en viss tid för att få platsen"
    }
  ];
  return (
    <div className="koanmal-wrapper">
      {/* frist-container */}
      <div className="koanmal-frist-container">
        <div className="frist-section">
          <h2>Bli elev på rosendalskolan</h2>
          <p>
            Vill du gå på rosendalskolan i Västerås? Här kan du läsa mer om hur
            du går till väga för att få mer information om besöksdagar och göra
            en intresseanmälan.
          </p>
        </div>
      </div>
      {/* second-container */}
      <div className="koanmal-second-container">
        <img src="./foto/frist-koanmal.png"></img>
      </div>
      {/* third-container */}
      <div className="koanmal-third-container">
        <div className="frist-content">
          <div className="left-content">
            <h2>Ställ ditt barn i kö till rosendalskolan</h2>
            <p>
              Vi är glada att du överväger att välja vår skola för din students
              utbildning. På rosendalskolan strävar vi efter att skapa en
              inkluderande och stödjande lärandemiljö där varje elev ges
              möjlighet att växa och uppnå sitt fulla potential.
            </p>
            <p>
              För att ansöka om att ställa ditt barn i kö till vår skola för
              årskurs 7-9, vänligen fyll i formuläret. Vi bekräftar mottagandet
              av din ansökan och kontaktar dig så snart som möjligt med mer
              information om nästa steg i ansökningsprocessen.
            </p>
          </div>
          <div className="right-content">
            <button>Ställ ditt barn i kö</button>
          </div>
        </div>
      </div>
      {/* fourth-container */}
      <div className="koanmal-fourth-container">
        <div className="frist-content">
          <div className="foto">
            <img src="./foto/second-koanmal.png"></img>
          </div>
          <div className="text">
            <h2>Prova på en dag på Hitachigymnasiet i Västerås</h2>
            <p>
              Besök en klass under en halvdag för att testa på vårt arbetssätt
              och uppleva hur det är att gå på vår skola. Allmänna
              prova-på-dagar anordnar vi normalt i perioden december-februari. 
            </p>
          </div>
        </div>
      </div>
      {/*  fifth-container */}
      <div className="koanmal-fifth-container">
        <div className="frist-content">
          <h1>Ansöknings processen - i steg </h1>
          <div className="text-container">
            {arr.map((item, index) => {
              return (
                <div className="text-content" key={item.id}>
                  <p>{item.id}</p>
                  <div className="text-child">
                    <h4>{item.head}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              console.log("hi");
              window.location.href = "/Koanmal";
            }}
          >
            STÄLL DITT BARN I KÖ
          </button>
        </div>
      </div>
    </div>
  );
}
