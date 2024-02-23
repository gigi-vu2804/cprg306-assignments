"use client"; // Make sure this line is uncommented
import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  console.log("ItemProvider rendering, items:", items); // Debugging log
  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};
