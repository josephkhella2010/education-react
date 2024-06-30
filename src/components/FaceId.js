import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TbSquareLetterCFilled, TbBrandOffice } from "react-icons/tb";
import { MdOutlineCloudQueue, MdEmail } from "react-icons/md";

export default function FaceId() {
  return (
    <div className="faceid-wrapper">
      <div className="faceid-container">
        <div className="left-content">
          <div className="logo">
            <img src="./foto/logo.png"></img>
          </div>
          <div className="button-container">
            <a>
              {" "}
              <FcGoogle className="icon-frist" />
              <span>Sign in with Google</span>
            </a>
            <a>
              {" "}
              <TbBrandOffice className="icon" />
              <span>Sign in with Office 365</span>
            </a>
            <a>
              <TbSquareLetterCFilled className="icon" />

              <span>Sign in with Clever</span>
            </a>
            <a>
              <MdOutlineCloudQueue className="icon" />

              <span>Sign in with Class Link</span>
            </a>
            <a>
              <span> School Mail</span>
            </a>
          </div>
        </div>
        <div className="middle-content">
          <div className="line"></div>
          <p>alternative</p>
          <div className="line"></div>
        </div>

        <div className="right-content">
          <img src="./foto/face-id.png"></img>
        </div>
      </div>
    </div>
  );
}
