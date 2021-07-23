import React from "react";
import { CartProvider } from "./cart";
import { StateProvider } from "./globalState";
import { ProductsProvider } from "./products";

const AppProvider: React.FC = ({ children }) => {
  return (
    <StateProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </StateProvider>
  );
};

export default AppProvider;
