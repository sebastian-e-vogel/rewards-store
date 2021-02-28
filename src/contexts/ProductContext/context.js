import React from "react";
import api from "../api";

const ProductContext = React.createContext({});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [status, setStatus] = React.useState("pending");

  React.useEffect(async () => {
    const products = await api.list();
    setProducts(products);
    setStatus("resolved");
  }, []);

  if (!products || status === "pending") {
    return <div>cargando...</div>;
  }

  const state = {
    products,
  };

  return (
    <ProductContext.Provider value={{ state }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
