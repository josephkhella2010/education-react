import React from "react";

export default function BloggarImg() {
  let arr = [
    {
      text: "# Aktiviteter",
      imgs: [
        "./foto/bloggar-aktivi-frist.png",
        "./foto/bloggar-aktivi-second.png",
        "./foto/bloggar-aktivi-third.png",
        "./foto/bloggar-aktivi-fourth.png",
        "./foto/bloggar-aktivi-fifth.png"
      ]
    },
    {
      text: "# studier",
      imgs: [
        "./foto/bloggar-studier-frist.png",
        "./foto/bloggar-studier-second.png",
        "./foto/bloggar-studier-third.png",
        "./foto/bloggar-studier-fourth.png",
        "./foto/bloggar-studier-fifth.png"
      ]
    },
    {
      text: "# vi_på_skolan",
      imgs: [
        "./foto/bloggar-skolan-frist.png",
        "./foto/bloggar-skolan-second.png",
        "./foto/bloggar-skolan-third.png",
        "./foto/bloggar-skolan-fourth.png",
        "./foto/bloggar-skolan-fifth.png"
      ]
    },
    {
      text: "# vad_tycker_vi",
      imgs: [
        "./foto/bloggar-tycker-frist.png",
        "./foto/bloggar-tycker-second.png",
        "./foto/bloggar-tycker-third.png",
        "./foto/bloggar-tycker-fourth.png",
        "./foto/bloggar-tycker-fifth.png"
      ]
    }
  ];
  return (
    <>
      {arr.map((item) => {
        return (
          <div className="bloggar-sections">
            <h4>{item.text}</h4>
            <div className="foto-section">
              {item.imgs.map((foto) => {
                return <img src={foto}></img>;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
