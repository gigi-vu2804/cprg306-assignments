// item-list.js
"use client";
import { useState, useEffect } from "react";

export default function ItemList({
  items,
  onSort,
  displayMode,
  setDisplayMode,
  selectedSort,
  setSelectedSort,
}) {
  const itemBoxStyling = "p-2 m-4 bg-orange-200 max-w-sm";
  const itemNameStyling = "text-xl font-bold text-amber-900";
  const itemDescriptionStyling = "text-sm text-amber-900 italic";

  // Function to sort items as Grouped Category
  const groupedItems = () => {
    const itemsCopy = [...items]; // Create a copy of the items array
    return itemsCopy.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  // Function to render items with formatting based on the display mode
  const itemsCopy = [...items]; // Create a copy of the items array
  const renderItems = () => {
    if (displayMode === "list") {
      return itemsCopy.map((item, index) => (
        <li key={index} className={itemBoxStyling}>
          <h2 className={itemNameStyling}>{item.name}</h2>
          <div className={itemDescriptionStyling}>
            Buy {item.quantity} in {item.category}
          </div>
        </li>
      ));
    } else {
      const grouped = groupedItems();
      return Object.entries(grouped)
        .sort()
        .map(([category, items], index) => (
          <li key={index} className={itemBoxStyling}>
            <h2 className={itemNameStyling}>{category}</h2>
            <ul>
              {items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item, itemIndex) => (
                  <li key={itemIndex} className={itemDescriptionStyling}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
            </ul>
          </li>
        ));
    }
  };

  return (
    <div className="mt-8">
      <div>
        <label htmlFor="sort" className="text-orange-200 text-lg">
          Sort by:
        </label>
        {/* Sort Buttons */}
        <button
          onClick={() => {
            setDisplayMode("list");
            onSort("name");
            setSelectedSort("name");
          }}
          className={`p-1 m-2 w-28  hover:bg-blue-500 transition duration-150 ease-in-out ${
            selectedSort === "name" ? "bg-blue-500" : "bg-orange-500"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => {
            setDisplayMode("list");
            onSort("category");
            setSelectedSort("category");
          }}
          className={`p-1 m-2 w-28  hover:bg-blue-500 transition duration-150 ease-in-out ${
            selectedSort === "category" ? "bg-blue-500" : "bg-orange-700"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => {
            setDisplayMode("grouped");
            setSelectedSort("grouped");
          }}
          className={`p-1 m-2 w-28  hover:bg-blue-500 transition duration-150 ease-in-out
                      ${
                        selectedSort === "grouped"
                          ? "bg-blue-500"
                          : "bg-orange-300"
                      }
                    `}
        >
          Grouped Category
        </button>
      </div>
      <ul>{renderItems()}</ul>
    </div>
  );
}
