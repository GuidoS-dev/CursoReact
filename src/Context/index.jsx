import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart  ·  Increment quantity
  const [count, setCount] = useState(0);

  // Produc Detail  ·  Open/Close
  const [isProductDetailOpen, setIsProducDetailOpen] = useState(false);
  const openProductDetail = () => setIsProducDetailOpen(true);
  const closeProductDetail = () => setIsProducDetailOpen(false);

  // Product Detail  ·  Show product
  const [productToShow, setIsproductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        setIsProducDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setIsproductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
