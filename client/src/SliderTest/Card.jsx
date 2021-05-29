import React from "react";
import { CardData } from "./CardData";

const Cards = (props) => {
  return (
    <section>
      {CardData.map((card, i) => {
        return (
          <div className="card" id="card" style={props.cardStyle} key={i}>
            <p className="title">{card.title}</p>
            <p className="desc">{card.desc}</p>
            <a href="#">
              <img src={card.url} />
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
