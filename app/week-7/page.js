// page.js
"use client";
import NewItem from "./new-item.js";
import Item from "./item.js";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  // page.js controls/manages states and passes them to the NewItem and Item components.
  const [items, setItems] = useState(itemsData);
  const [displayMode, setDisplayMode] = useState("list"); // New state to control display mode
  const [selectedSort, setSelectedSort] = useState("name"); // New state to control sorting
  const [selectedItemName, setSelectedItemName] = useState(""); // New state to store selected item name

  // Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleSort = (sortCriteria) => {
    const sortedItems = [...items].sort((a, b) =>
      a[sortCriteria].toString().localeCompare(b[sortCriteria].toString())
    );
    setItems(sortedItems);
  };

  const handleItemSelect = (item) => {
    // Clean the item name by removing special characters, emojis, and anything after a comma or semicolon
    let cleanItemName = item.name.replace(/[^\w\s,]/g, "");
    cleanItemName = cleanItemName.split(/[;,]/)[0].trim();
    cleanItemName = cleanItemName
      .toLowerCase()
      .replace(/\b\w/g, (s) => s.toUpperCase());
    console.log("Selected item:", cleanItemName);
    setSelectedItemName(cleanItemName);
  };

  return (
    <main className="bg-amber-950 p-2 ">
      <div className="mx-w-sm w-full">
        <h1 className="text-3xl text-orange-200 font-bold m-2">
          Shopping List
        </h1>
        <h2 className="text-xl text-orange-200 font-bold m-2">Add New Item</h2>
        <NewItem onAddItem={handleAddItem} />
        <div className="flex">
          <Item
            items={items}
            onSort={handleSort}
            displayMode={displayMode}
            setDisplayMode={setDisplayMode}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            onItemSelect={handleItemSelect}
          />
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
