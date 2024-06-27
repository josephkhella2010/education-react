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
            <a href={`mailto:${item.email}`}>{item.email}</a>
            <a href={`tel:${item.tele}`}>{item.tele}</a>
          </div>
        );
      })}
    </>
  );
}
