import React from "react";
import HomeFourthContainer from "./HomeFourthContainer";

export default function Home() {
  let arr = [
    {
      url: "./foto/home-utbilding.png",
      head: "Utbildning",
      text: "För att uppnå de högre betygsstegen är djup kunskap om ämnet en viktig förutsättning. Därför fokuserar vi på att tillhandahålla läromedel och litteratur som lärarna väljer med omsorg."
    },
    {
      url: "./foto/home-larare.png",
      head: "Engagerade lärare",
      text: "På Rosendalskolan är våra förväntningar höga, både på elever och lärare. Vårt mål är att erbjuda lektioner som är både tempofyllda och utmanande, anpassade för alla nivåer."
    },
    {
      url: "./foto/home-aktivitet.png",
      head: "våra aktiviteter",
      text: "På vår skola får eleverna redan i årskurs 7 välja den profil som bäst passar dem. Vi tror på att en kombination av fysisk aktivitet och studier kan underlätta förståelsen och leda till bättre resultat för eleverna."
    },
    {
      url: "./foto/home-halsa.png",
      head: "elevens hälsa",
      text: "Vi erbjuder omfattande stöd för eleverna, som sträcker sig från tillgång till kuratorer till tillhandahållande av specialassistenter. Vi prioriterar regelbundet elevernas välmående och hälsa för att säkerställa att de får den support de behöver."
    },
    {
      url: "./foto/home-leaderskap.png",
      head: "tydligt ledarskap",
      text: "En av nycklarna till framgångsrik utbildning är ett medvetet och tydligt ledarskap. Vi är omsorgsfulla i ledarskapet på alla nivåer; från lärarens ledarskap i klassrummet till rektors ledarskap för hela skolan."
    },
    {
      url: "./foto/hom-oss.png",
      head: "bli en av oss",
      text: "Kulturen på vår skola är av yttersta vikt för oss. Vi strävar efter att skapa en miljö där alla känner sig välkomna och trygga. Vi omfamnar mångfald och välkomnar alla individer med öppna armar."
    }
  ];
  /* arr 2 */
  let arr2 = [
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
  /*  */
  return (
    <div className="home-wrapper">
      {/* frist container */}
      <div className="home-frist-container">
        <div className="left-section">
          <h3>En tryggare </h3>
          <h3>utbildning för</h3>
          <h3>dina barn</h3>
        </div>
        <div className="right-section">
          <img src="./foto/home-frist.png"></img>
        </div>
      </div>
      {/* second container */}
      <div className="home-second-container">
        <div className="home-second-content">
          <h4>
            Vi har modet att föreställa oss framtiden och engagera oss i de
            betydande frågorna.
          </h4>
          <p>
            Vi tar på oss ansvaret att ge nästa generation de kunskaper och
            verktyg de behöver för att modigt och energiskt möta framtidens
            utmaningar. Vi ser utbildningen av eleverna som vår uppgift, och för
            att säkerställa deras framgång tror vi på en balans av olika
            element. Det handlar om både struktur och stöd, både lek och allvar,
            både kreativitet och färdighetsträning, både lust och krav. Hos oss
            får eleverna en helhetsupplevelse från början till slut.
          </p>
        </div>
      </div>
      {/*  thrid container */}
      <div className="home-third-container">
        <p>
          “Vi vill bidra med kompetens och kreativitet i att utveckla
          samhället.”
        </p>
      </div>
      {/*  fourth-container */}
      <div className="home-fourth-container">
        <div className="home-fourth-content">
          <h2>att studera på rosendalskolan</h2>
          <div className="home-fourth-bottom-div">
            <HomeFourthContainer name={arr} />
          </div>
        </div>
      </div>
      {/*  fifth-container */}
      <div className="home-fifth-container"></div>
      {/*  sixth-container */}
      <div className="home-sixth-container">
        <div className="sixth-content">
          <h1>Ansöknings processen - i steg </h1>
          <div className="text-container">
            {arr2.map((item, index) => {
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
