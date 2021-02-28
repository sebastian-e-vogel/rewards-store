import React from "react";
import { ProductContext } from "./context";

export function useProducts() {
  const {
    state: { products },
  } = React.useContext(ProductContext);

  return products;
}
