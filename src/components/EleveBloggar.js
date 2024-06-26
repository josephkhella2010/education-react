import React from "react";
import BloggarImg from "./BloggarImg";

export default function EleveBloggar() {
  return (
    <div className="bloggar-wrapper">
      <div className="bloggar-frist-container">
        <div className="frist-content">
          <p>Vår skol miljö </p>
        </div>
      </div>
      <div className="bloggar-second-container">
        <BloggarImg />
      </div>
      <div className="bloggar-third-container">
        <div className="frist-content"></div>
      </div>
    </div>
  );
}
