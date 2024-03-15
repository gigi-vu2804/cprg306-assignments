"use client";
import { useState } from "react";
import items from "./items.json";

export default function ItemList({ name, quantity, category }) {
  const array_items = items;
  const [items_list, setItems] = useState(array_items);
  const itemBoxStyling = "p-2 m-4 bg-orange-200 max-w-sm";
  const itemNameStyling = "text-xl font-bold text-amber-900";
  const itemDescriptionStyling = "text-sm text-amber-900 italic";

  const [sortBy, setSortBy] = useState("name");
  const [groupedCategory, setGroupedCategory] = useState("groupedcategory");
  const handleSort = (sortCriteria) => {
    // Update the sortBy state
    setSortBy(sortCriteria);
    const sortedItems = [...items_list].sort((a, b) =>
      a[sortCriteria].localeCompare(b[sortCriteria])
    );
    setItems(sortedItems);
  };

  const handleGroupedCategory = () => {
    const grouped = items_list.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});

    const sortedGrouped = Object.keys(grouped)
      .sort()
      .reduce((acc, key) => {
        acc[key] = grouped[key].sort((a, b) => a.name.localeCompare(b.name));
        return acc;
      });
  };

  return (
    <>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <button
          onClick={() => handleSort("name")}
          className={`p-1 m-2 w-28 
                      ${sortBy === "name" ? "bg-blue-500" : "bg-orange-500"}
                    `}
        >
          Name
        </button>
        <button
          onClick={() => handleSort("category")}
          className={`p-1 m-2 w-28 
                      ${sortBy === "category" ? "bg-blue-500" : "bg-orange-700"}
                    `}
        >
          Category
        </button>
        <button
          // onClick={() => handleSort("category")}
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

      <ul>
        {items_list.map((item, index) => (
          <li key={index} className={itemBoxStyling}>
            <h2 className={itemNameStyling}>{item.name}</h2>
            <div className={itemDescriptionStyling}>
              Buy {item.quantity} in {item.category}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
