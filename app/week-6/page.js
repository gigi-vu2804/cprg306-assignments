// page.js
"use client";
import NewItem from "./new-item.js";
import Item from "./item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  // page.js controls/manages states and passes them to the NewItem and Item components.
  const [items, setItems] = useState(itemsData);
  const [displayMode, setDisplayMode] = useState("list"); // New state to control display mode
  const [selectedSort, setSelectedSort] = useState(); // New state to control sorting

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

  return (
    <main className="bg-amber-950 p-2 m-2 ">
      <div className="mx-w-sm w-full">
        <h1 className="text-3xl text-orange-200 font-bold mb-4">
          Shopping List
        </h1>
        <h2 className="text-xl  text-orange-200 font-bold">Add New Item</h2>
        <NewItem onAddItem={handleAddItem} />
        <Item
          items={items}
          onSort={handleSort}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
      </div>
    </main>
  );
}
