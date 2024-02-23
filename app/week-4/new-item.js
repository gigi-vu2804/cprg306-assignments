"use client";
import { useState } from "react";

export default function NewItem({
  name: currentName,
  quantity: currentQuantity,
  category: currentCategory,
}) {
  const [itemName, setName] = useState(currentName || "");
  const [itemQuantity, setQuantity] = useState(currentQuantity || 1);
  const [itemCategory, setCategory] = useState(currentCategory || "produce");

  const inputStyling = "p-2 border-gray-300 border-2 rounded-lg font-sans";
  const handleSubmit = (event) => {
    event.preventDefault();
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
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      <div className="mb-2">
        <input
          required
          className={`w-full mt-1 ${inputStyling}`}
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
        className="bg-blue-500 text-white rounded-lg w-full mt-4 py-2 px-4 font-semibold hover:bg-blue-700"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
