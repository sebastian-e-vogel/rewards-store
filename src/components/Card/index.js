import React from "react";

import { CardContainer, ImageContainer } from "./components";
import { ReactComponent as BuyBlue } from "../../assets/icons/buy-blue.svg";

const Card = ({ product }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={product.img.url} />
        <div>
          <BuyBlue />
        </div>
      </ImageContainer>
      <div>{product.category}</div>
      <p>{product.name}</p>
    </CardContainer>
  );
};

export { Card };
