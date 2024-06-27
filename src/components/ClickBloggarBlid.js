import React from "react";

export default function ClickBloggarBlid() {
  return (
    <div className="clickbloggar-wrapper">
      <div className="clickbloggar-frist-container">
        <div className="line"></div>
        <div className="frist-content">
          <div className="left-section">
            <img src="./foto/clickbloggar-frist.png"></img>
          </div>
          <div className="right-section">
            <div className="top-content">
              <img src="./foto/clickbloggar-liam.png"></img>
              <p>Liam sten</p>
            </div>
            <p>#aktivitet</p>
            <div className="middle-content">
              <p>
                Tack skolan för en riktig härlig skol upplevelse, detta har vart
                jätte kul en rikit dream come true.{" "}
              </p>
            </div>
            <div className="blue-line"></div>
            <div className="bottom-content">
              <img src="./foto/clickbloggar-liam-second.png"></img>
              <p> håller med liam vi hadde riktigt kul </p>
            </div>
          </div>
        </div>
      </div>
      {/* second container */}
      <div className="clickbloggar-second-container">
        <div className="frist-content">
          <div className="blue-line"></div>
          <div className="frist-section">
            <h5>Se mer </h5>
            <div className="foto-section">
              <img src="./foto/bloggar-aktivi-second.png"></img>
              <img src="./foto/bloggar-aktivi-third.png"></img>
              <img src="./foto/bloggar-skolan-frist.png"></img>
              <img src="./foto/bloggar-studier-fourth.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
