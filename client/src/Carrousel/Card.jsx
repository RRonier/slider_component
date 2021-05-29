import React from "react";

export default function Card({ card_number  }) {
  const styles = {
    card: {
      width: "350px",
      height: "200px",
      backgroundColor: "blue",
      border: "1px solid black",
      boxSizing: "border-box",
      fontSize: "2.5em",
      color: "white",
    },
  };
  return <div style={styles.card}>{card_number}</div>;
}
