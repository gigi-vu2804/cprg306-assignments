// new-item.js
"use client";
import { useState } from "react";

export default function NewItem({
  onAddItem,
  name: currentName,
  quantity: currentQuantity,
  category: currentCategory,
}) {
  const [itemName, setName] = useState(currentName || "");
  const [itemQuantity, setQuantity] = useState(currentQuantity || 1);
  const [itemCategory, setCategory] = useState(currentCategory || "produce");

  const inputStyling =
    "p-2 border-amber-900 border-2 rounded-lg text-sm text-amber-900";

  // Replace the alert functionality by calling the onAddItem prop with the item object when the form is submitted. The item object should have the following properties: id, name, quantity, and category. id should be a random string.
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({
      id: Math.random().toString(36).substr(2, 9),
      name: itemName,
      quantity: parseInt(itemQuantity),
      category: itemCategory,
    });
    // setName("");
    // setQuantity(1);
    // setCategory("produce");

    // Log a confirmation message to the console.
    const confirmation =
      "Added item: " +
      itemName +
      ", quantity: " +
      itemQuantity +
      ", category: " +
      itemCategory;
    console.log(confirmation);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 mt-2 bg-orange-200 max-w-sm w-full rounded-lg border-amber-800 border-4"
    >
      <div className="mb-2">
        <input
          required
          className={`mr-2 ${inputStyling}`}
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <input
          required
          className={`w-20 ${inputStyling}`}
          type="number"
          min="1"
          max="99"
          value={parseInt(itemQuantity)}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select
          required
          className={`ml-1 ${inputStyling}`}
          value={itemCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value disabled>
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        className="bg-amber-950 mt-2 text-white rounded-lg w-full py-2 px-4 font-semibold hover:bg-blue-500 transition duration-150 ease-in-out"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
