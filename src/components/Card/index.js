import React from "react";

import { CardContainer, ImageContainer } from "./components";
import { ReactComponent as BuyBlue } from "../../assets/icons/buy-blue.svg";
import iphoneImg from "../../assets/iPhone8-x1.png";

const Card = () => {
  return (
    <div>
      <CardContainer>
        <ImageContainer>
          <img src={iphoneImg} />
          <div>
            <BuyBlue />
          </div>
        </ImageContainer>
        <div>category</div>
        <p>name</p>
      </CardContainer>
    </div>
  );
};

export { Card };
