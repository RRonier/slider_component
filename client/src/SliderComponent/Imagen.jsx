import React from "react";
import Imagen from "./test.jpg";

const Image = ({ alt }) => {
  return <img src={Imagen} style={style} alt={alt} />;
};

const style = {
  // maxWidth: "200",
  width: 200,
  height: 200,
};

export default Image;
