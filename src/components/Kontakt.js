import React from "react";
import FörstaGrupp from "./FörstaGrupp";
import AndraGrupp from "./AndraGrupp";

export default function Kontakt() {
  let anställda = [
    {
      grupp1: [
        {
          url: "./foto/kontakt-second.png",
          jobTitle: "Biträdande rektor",
          name: "Anna-Lena Fornell",
          email: "anna-lena.fornell@jenseneducation.se",
          tele: "0737 73 92 62"
        },
        {
          url: "./foto/kontakt-third.png",
          jobTitle: "Biträdande rektor, Lärare i SO, coach i 9C",
          name: "Mats Wallin",
          email: "mats.wallin@jenseneducation.se",
          tele: "073-77 33 334"
        },
        {
          url: "./foto/kontakt-fourth.png",
          jobTitle: "Administratör",
          name: "Erika Ryttinge",
          email: "erika.ryttinge@jenseneducation.se",
          tele: "0737 73 18 00"
        },
        {
          url: "./foto/kontakt-fifth.png",
          jobTitle: "Lärare i SO och coach i 8A",
          name: "marcus.karppinen",
          email: "marcus.karppinen@jenseneducation.se",
          tele: "0737 73 18 00"
        }
      ],
      grupp2: [
        {
          url: "./foto/kontakt-sixth.png",
          jobTitle: "Lärare i NO",
          name: "Ove Jonsson",
          email: "ove.jonsson@jenseneducation.se",
          tele: "0737 73 92 62"
        },
        {
          url: "./foto/kontakt-seventh.png",
          jobTitle: "Lärare i Svenska och NO,coach i 9C",
          name: "Erik Lantz",
          email: "erik.lantz@jenseneducation.se",
          tele: "073-77 33 334"
        },
        {
          url: "./foto/kontakt-eight.png",
          jobTitle: "Elevvärd coach i 9B",
          name: "Marcel Khouri",
          email: "marcel.khouri@jenseneducation.se",
          tele: "0737 73 18 00"
        },
        {
          url: "./foto/kontakt-ninth.png",
          jobTitle: "Lärare i Idrott & Hälsa",
          name: "Eric Sundin Landström",
          email: "eric.sundinlandstrom@jensened",
          tele: "0737 73 18 00"
        }
      ]
    }
  ];
  let förstgrupp = anställda[0].grupp1;
  let andragrupp = anställda[0].grupp2;

  andragrupp.map((el) => {
    console.log(el.url);
  });
  /*  anställda.forEach((item) => {
    item.grupp.map((el) => {
      console.log(el);
    });
  }); */
  return (
    <div className="kontakt-wrapper">
      <div className="frist-content">
        <div className="right-content">
          <div className="frist-section">
            <img src="./foto/kontakt-frist.png"></img>
            <p>Rektor</p>
            <p>hjernberg@jenseneducation.se</p>
            <p>0737 73 18 05</p>
          </div>
          <div className="line"></div>
          <div className="second-section">
            <div className="location-section">
              <img src="./foto/kontakt-location.png"></img>
              <h5>Adress</h5>
              <p>Hejpå dig 56 </p>
            </div>
            <div className="telefon-section">
              <img src="./foto/kontakt-telefone.png"></img>
              <h5>Telefonnummer</h5>
              <a href="tel:070-000000">070-000000 </a>
            </div>
          </div>
          <div className="line"></div>
          <div className="third-section">
            <FörstaGrupp name={förstgrupp} />
          </div>
          <div className="line"></div>
          <div className="fourth-section">
            <AndraGrupp name={andragrupp} />
          </div>
        </div>
        <div className="left-content">
          <div className="login-section">
            <h3>log in</h3>
            <button>Campus login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
