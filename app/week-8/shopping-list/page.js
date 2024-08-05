"use client";
import NewItem from "./new-item.js";
import Item from "./item.js";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";

export default function ShoppingPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [displayMode, setDisplayMode] = useState("list");
  const [selectedSort, setSelectedSort] = useState("name");
  const [selectedItemName, setSelectedItemName] = useState("");

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
    <main className="bg-amber-950 p-2 flex flex-col items-center">
      <div className="w-full">
        <h1 className="text-3xl text-orange-200 font-bold m-2">
          Shopping List
        </h1>
        {/* protected page content*/}
        {user ? (
          <div className="flex flex-row gap-2">
            <div className="flex-1">
              <h2 className="text-xl text-orange-200 font-bold m-2">
                Add New Item
              </h2>
              <NewItem onAddItem={handleAddItem} />
              <Item
                items={items}
                onSort={handleSort}
                displayMode={displayMode}
                setDisplayMode={setDisplayMode}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                onItemSelect={handleItemSelect}
              />
            </div>
            <div className="flex-1">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        ) : (
          <p className="text-orange-200">
            Please sign in to view your shopping list.
          </p>
        )}
      </div>
    </main>
  );
}
