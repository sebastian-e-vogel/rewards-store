import React from "react";

import { CardContainer, ImageContainer } from "./components";
import { ReactComponent as BuyBlue } from "../../assets/icons/buy-blue.svg";
import { usePoints, useRedeem } from "../../contexts";

const Card = ({ product, finishedRedeem }) => {
  const [points] = usePoints();
  const [redeem, redeemStatus] = useRedeem();
  const canBuy = product.cost <= points;

  const handleRedeem = async (prdouct) => {
    const result = await redeem(product);
    finishedRedeem(result);
  };

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
      <button
        disabled={!canBuy | (redeemStatus === "pending")}
        onClick={(product) => handleRedeem(product)}
      >
        {canBuy
          ? `Redeem for ${product.cost}`
          : `Missing ${product.cost - points} points`}
      </button>
    </CardContainer>
  );
};

export { Card };
