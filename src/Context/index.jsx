import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart  ·  Increment quantity
  const [count, setCount] = useState(0);

  // Produc Detail  ·  Open/Close
  const [isProductDetailOpen, setIsProducDetailOpen] = useState(false);
  const openProductDetail = () => setIsProducDetailOpen(true);
  const closeProductDetail = () => setIsProducDetailOpen(false);

  // Checkout Side Menu ·  Open/Close
  const [isCheckOutSideMenu, setIsCheckOutSideMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  // Product Detail  ·  Show product
  const [productToShow, setIsproductToShow] = useState({});

  // Shopping Cart  ·   Add products to cart
  const [cartProducts, setcartProducts] = useState([]);

  // Shopping Cart  ·   Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        setIsProducDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckOutSideMenu,
        setIsCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        productToShow,
        setIsproductToShow,
        cartProducts,
        setcartProducts,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
