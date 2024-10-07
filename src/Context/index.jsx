import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart  ·  Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail  ·  Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu ·  Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  // Product Detail  ·  Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart  ·   Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart  ·   Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // Get products by Title
  const [searchByTitle, setSearchByTitle] = useState(null);
  // Get products by Category
  const [searchByCategory, setSearchByCategory] = useState(null);

  const filterItems = (items, searchByTitle, searchByCategory) => {
    return items?.filter((item) => {
      const matchesTitle = searchByTitle
        ? item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        : true;
      const matchesCategory = searchByCategory
        ? item.category.name
            .toLowerCase()
            .includes(searchByCategory.toLowerCase())
        : true;
      return matchesTitle && matchesCategory;
    });
  };

  useEffect(() => {
    setFilteredItems(filterItems(items, searchByTitle, searchByCategory));
  }, [searchByTitle, items, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        setIsProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckOutSideMenuOpen,
        setIsCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
