import React from "react";

export default function AndraGrupp(props) {
  const grupp = props.name;
  return (
    <>
      {grupp.map((item, index) => {
        return (
          <div className="frist-content" key={index}>
            <img src={item.url}></img>
            <p>{item.jobTitle}</p>
            <p>{item.name}</p>
            <a href={item.email}>{item.email}</a>
            <p>{item.tele}</p>
          </div>
        );
      })}
    </>
  );
}
