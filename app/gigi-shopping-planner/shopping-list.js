import React, { useState } from "react";
import ItemList from "./item-list"; // Adjust the import path as needed
import NewItem from "./new-item"; // Adjust the import path as needed

export default function ShoppingList() {
  const [items, setItems] = useState([
    { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
    { name: "bread 🍞", quantity: 2, category: "bakery" },
    { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
    { name: "bananas 🍌", quantity: 6, category: "produce" },
    { name: "broccoli 🥦", quantity: 3, category: "produce" },
    { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
    { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
    { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
    { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
    { name: "paper towels, 6 pack", quantity: 1, category: "household" },
  ]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (itemName) => {
    setItems(items.filter((item) => item.name !== itemName));
  };

  return (
    <div className="flex flex-row gap-6 justify-center mt-8 mx-auto w-full">
      <NewItem onAddItem={addItem} />
      <ItemList items={items} onDeleteItem={deleteItem} />
    </div>
  );
}
