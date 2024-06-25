import React from "react";

export default function HomeFourthContainer(props) {
  let list = props.name;
  return (
    <>
      {list.map((item, index) => {
        return (
          <div className="home-bottom-section" key={index}>
            <div className="home-bottom-foto">
              <img src={item.url}></img>
            </div>
            <div className="text-div">
              <h3>{item.head}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
