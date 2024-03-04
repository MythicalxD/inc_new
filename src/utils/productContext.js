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
  const addProduct = async (productId, quantity = 1) => {
    return new Promise((resolve, reject) => {
      try {
        const updatedProducts = [...selectedProducts, { productId, quantity }];
        setSelectedProducts(updatedProducts);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to add a product
  const addProductRemove = async (productId, quantity = 1) => {
    return new Promise((resolve, reject) => {
      try {
        const updatedProducts = [...selectedProducts, { productId, quantity }];
        setSelectedProducts(updatedProducts);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to remove the last product
  const removeProduct = () => {
    const updatedProducts = selectedProducts.slice(0, -1); // Remove the last item
    setSelectedProducts(updatedProducts);
  };

  // Function to create a new selection
  const createNew = () => {
    setSelectedProducts([]);
    localStorage.setItem("total_ca", 0);
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProducts,
        addProduct,
        removeProduct,
        createNew,
        addProductRemove,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
