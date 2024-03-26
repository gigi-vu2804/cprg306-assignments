"use client";
import { useState } from "react";
import items from "./items.json";

export default function ItemList({ name, quantity, category }) {
  const array_items = items;
  const [items_list, setItems] = useState(array_items);
  const [displayMode, setDisplayMode] = useState("list"); // New state to control display mode
  const itemBoxStyling = "p-2 m-4 bg-orange-200 max-w-sm";
  const itemNameStyling = "text-xl font-bold text-amber-900";
  const itemDescriptionStyling = "text-sm text-amber-900 italic";

  const [sortBy, setSortBy] = useState("name");
  const handleSort = (sortCriteria) => {
    setDisplayMode("list"); // Reset display mode to list
    setSortBy(sortCriteria); // Update the sortBy state
    const sortedItems = [...items_list].sort((a, b) =>
      a[sortCriteria].toString().localeCompare(b[sortCriteria].toString())
    );
    setItems(sortedItems);
  };

  const handleGroup = () => {
    setDisplayMode("grouped");
  };

  const groupedItems = () => {
    return items_list.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  const renderItems = () => {
    if (displayMode === "list") {
      return items_list.map((item, index) => (
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
    <>
      <div>
        <label htmlFor="sort" className="text-orange-200">
          Sort by:
        </label>
        {/* Sort Buttons */}
        <button
          onClick={() => handleSort("name")}
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-blue-500" : "bg-orange-500"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => handleSort("category")}
          className={`p-1 m-2 w-28 ${
            sortBy === "category" ? "bg-blue-500" : "bg-orange-700"
          }`}
        >
          Category
        </button>
        <button
          onClick={handleGroup}
          className={`p-1 m-2 w-28 
                      ${
                        sortBy === "groupedcategory"
                          ? "bg-blue-500"
                          : "bg-orange-300"
                      }
                    `}
        >
          Grouped Category
        </button>
      </div>
      <ul>{renderItems()}</ul>
    </>
  );
}
