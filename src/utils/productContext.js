// ProductContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  // Load selected products from local storage on component mount
  const [selectedProducts, setSelectedProducts] = useState(
    () => JSON.parse(localStorage.getItem("selectedProducts")) || []
  );

  // Update local storage whenever selected products change
  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  // Function to add a product
  const addProduct = (productId, quantity = 1) => {
    const updatedProducts = [...selectedProducts, { productId, quantity }];
    setSelectedProducts(updatedProducts);
  };

  // Function to remove a product
  const removeProduct = (productId) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.productId !== productId
    );
    setSelectedProducts(updatedProducts);
  };

  // Function to create a new selection
  const createNew = () => {
    setSelectedProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProduct, removeProduct, createNew }}
    >
      {children}
    </ProductContext.Provider>
  );
};
