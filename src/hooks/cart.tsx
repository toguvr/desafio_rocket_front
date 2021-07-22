import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { IProduct } from "../dtos";

interface IProductCart extends IProduct {
  quantity: number;
}

interface CartContext {
  products: IProductCart[];
  quantityCart: number;
  totalPrice: number;
  addToCart(item: IProduct): void;
  increment(id: string): void;
  decrement(id: string): void;
  removeFromCart(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const cartList = localStorage.getItem("@MyCart");

      if (cartList) {
        setProducts(JSON.parse(cartList));
      }
    }

    loadProducts();
  }, []);

  const increment = useCallback(
    async (id) => {
      const newProducts = [...products];

      const indexProduct = newProducts.findIndex(
        (newProduct) => newProduct.id === id
      );

      if (indexProduct >= 0) {
        newProducts[indexProduct].quantity += 1;
      }

      setProducts(newProducts);
      localStorage.setItem("@MyCart", JSON.stringify(newProducts));
    },
    [products]
  );

  const quantityCart = useMemo(() => {
    const allProducts = [...products];

    return allProducts.reduce(function (total, numero) {
      return total + numero.quantity;
    }, 0);
  }, [products]);

  const totalPrice = useMemo(() => {
    const allProducts = [...products];

    return allProducts.reduce(function (total, numero) {
      return Number(total + numero.quantity * numero.price);
    }, 0);
  }, [products]);

  const addToCart = useCallback(
    (product) => {
      const checkExist = products.find(
        (oldProduct) => oldProduct.id === product.id
      );

      if (!checkExist) {
        const newProduct = {
          ...product,
          quantity: 1,
        };

        setProducts((state) => [...state, newProduct]);

        localStorage.setItem(
          "@MyCart",
          JSON.stringify([...products, newProduct])
        );
      } else {
        increment(product.id);
      }
    },
    [products, increment]
  );

  const removeFromCart = useCallback(
    async (id) => {
      const newProducts = [...products];

      const removedProduct = newProducts.filter((newProduct) => {
        return newProduct.id !== id;
      });

      setProducts(removedProduct);
      localStorage.setItem("@MyCart", JSON.stringify(removedProduct));
    },
    [products]
  );

  const decrement = useCallback(
    async (id) => {
      const newProducts = [...products];
      const indexProduct = newProducts.findIndex(
        (newProduct) => newProduct.id === id
      );

      if (indexProduct >= 0) {
        if (newProducts[indexProduct].quantity >= 1) {
          newProducts[indexProduct].quantity -= 1;
          if (newProducts[indexProduct].quantity === 0) {
            newProducts.splice(indexProduct, 1);
          }
        }
      }

      setProducts(newProducts);
      localStorage.setItem("@MyCart", JSON.stringify(newProducts));
    },
    [products]
  );

  const value = React.useMemo(
    () => ({
      addToCart,
      increment,
      decrement,
      products,
      removeFromCart,
      quantityCart,
      totalPrice,
    }),
    [
      products,
      addToCart,
      increment,
      decrement,
      removeFromCart,
      quantityCart,
      totalPrice,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
