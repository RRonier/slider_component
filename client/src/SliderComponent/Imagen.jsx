import React from "react";
import Imagen from "./test.jpg";

const Image = ({ width, height, alt }) => {
  return <img src={Imagen} width={width} height={height} alt={alt} />;
};

export default Image;
