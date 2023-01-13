import React from "react";
import { TotalAmountStyled } from "./TotalAmount.styled";

const TotalAmount = ({ total }) => {
  return (
    <TotalAmountStyled>
      <h4>Total Amount</h4>
      <p>{total.reduce((a, b) => a + b, 0).toFixed(2)} &#8378;</p>
    </TotalAmountStyled>
  );
};

export default TotalAmount;
