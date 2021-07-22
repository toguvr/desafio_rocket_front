import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { IProduct } from "../dtos";

interface ProductsStateContextData {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  countProducts: number;
  setCountProducts: Dispatch<SetStateAction<number>>;
}

const ProductsContext = createContext<ProductsStateContextData>(
  {} as ProductsStateContextData
);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, countProducts, setCountProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export function useProducts(): ProductsStateContextData {
  const context = useContext(ProductsContext);

  return context;
}
